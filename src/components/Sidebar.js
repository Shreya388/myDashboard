import React from 'react';
import { Nav, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faRectangleList, faTableCellsLarge, faDiagramProject, faCalendar, faCartShopping, faBookmark, faContactBook, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Col sm={4} md={4} lg={2} className="sidebar sticky-md-top">
      <Nav className="flex-column">
        <br />
        <img src={logo} draggable="false" style={{ height: "105px", width: "100px", margin: "auto" }} alt="logo" />
        <br />
        <Link to="/" className="link"><FontAwesomeIcon icon={faHouse} /> Dashboard</Link>
        <Nav.Link className="link" href="#about"><FontAwesomeIcon icon={faRectangleList} /> Widgets</Nav.Link>
        <Nav.Link className="link" href="#services"><FontAwesomeIcon icon={faTableCellsLarge} /> Page Layout</Nav.Link>
        <hr />
        <Nav.Link className="link" href="#home"><FontAwesomeIcon icon={faDiagramProject} /> Projects</Nav.Link>
        <Link to="/calender" className="link"><FontAwesomeIcon icon={faCalendar} /> Calender</Link>
        <Link to="/ecommerce" className="link"><FontAwesomeIcon icon={faCartShopping} /> Ecommerce</Link>
        <Nav.Link className="link" href="#home"><FontAwesomeIcon icon={faBookmark} /> Bookmarks</Nav.Link>
        <Link to="/contacts" className="link"><FontAwesomeIcon icon={faContactBook} /> Contact</Link>
        <Link to="/users" className="link"><FontAwesomeIcon icon={faUser} /> Users</Link>
      </Nav>
    </Col>
  );
};

export default Sidebar;
