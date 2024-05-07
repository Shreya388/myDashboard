import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import "../Pages/ecommerce.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user from "../user.jpg";

const Topbar = () => {
    return ( 
        <div className="Topbar bg-dark">
            <Row>
                <Col>
                    <div className="Heading">
                    <h3>Welcome</h3>
                    <small><p>Best Selling Products</p></small>
                    </div>
                </Col>
                <Col>
                <form method="get" style={{marginTop: "10px"}}>
                    <input className="search-box" type="text" placeholder="Search" />
                    <button type="submit" className="search-btn"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
                </Col>
                <Col>
                    <Dropdown>
                        <img src={user} alt="user" className="user-img" style={{}} />
                        <Dropdown.Toggle id="dropdown-basic" className="user">
                            James Levitt <br />
                            <span style={{ fontSize: "0.8em" }}>Admin</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ border: "none" }}>
                            <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Inbox</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            </div>
     );
}
 
export default Topbar;