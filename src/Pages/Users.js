import React, { useEffect, useState } from "react";
import userlist from "../Users.json";
import { Container } from "react-bootstrap";
import "./Users.css";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Users = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        setAllUsers(userlist.userlist);
    }, []);

    return (
        <div className="users">
            <Container>
                <h5 className="pt-4 pb-4">User List</h5>
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </th>
                            <th>ID</th>
                            <th>Name <FontAwesomeIcon icon={faSort} size="sm" /></th>
                            <th>Username <FontAwesomeIcon icon={faSort} size="sm" /></th>
                            <th>Email <FontAwesomeIcon icon={faSort} size="sm" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{borderRadius:"5px !important"}} />
                                </td>
                                <td>{user.id}</td>
                                <td >{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </div>
    );
}

export default Users;
