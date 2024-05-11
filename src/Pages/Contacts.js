import React, { useEffect, useState } from "react";
import contacts from "../Contacts.json";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "./Contacts.css";
import { faSort, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contacts = () => {
    const [allContacts, setAllContacts] = useState([]);

    useEffect(() => {
        setAllContacts(contacts.contacts);
    }, []);

    return (
        <div className="contacts">
            <Container>
                <div className="p-3">
                <Row>
                    <Col>
                        <Button variant="success">
                            <FontAwesomeIcon icon={faPlus} /> 
                            Add New</Button>
                    </Col>
                    <Col>
                    <div style={{float:"right"}}>
                        <Form.Control placeholder="Search" />
                    </div>
                    </Col>
                </Row>
                </div>
                
                <table className="contacts-table">
                    <thead>
                        <tr>
                            <th>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </th>
                            <th>ID</th>
                            <th>Name <FontAwesomeIcon icon={faSort} size="sm" /></th>
                            <th>Phone <FontAwesomeIcon icon={faSort} size="sm" /></th>
                            <th>Email <FontAwesomeIcon icon={faSort} size="sm" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allContacts.map(contact => (
                            <tr key={contact.id}>
                                <td>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ borderRadius: "5px !important" }} />
                                </td>
                                <td>{contact.id}</td>
                                <td >{contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </div>
    );
}

export default Contacts;
