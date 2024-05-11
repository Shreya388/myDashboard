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
        <Link to="/" style={{ color: "white", textDecoration: "none" }}><Nav.Link className="link" href="#home"><FontAwesomeIcon icon={faHouse} /> Dashboard</Nav.Link></Link>
        <Nav.Link className="link" href="#about"><FontAwesomeIcon icon={faRectangleList} /> Widgets</Nav.Link>
        <Nav.Link className="link" href="#services"><FontAwesomeIcon icon={faTableCellsLarge} /> Page Layout</Nav.Link>
        <hr />
        <Nav.Link className="link" href="#home"><FontAwesomeIcon icon={faDiagramProject} /> Projects</Nav.Link>
        <Link to="/calender" style={{ color: "white", textDecoration: "none" }}><Nav.Link className="link" href="#about"><FontAwesomeIcon icon={faCalendar} /> Calender</Nav.Link></Link>
        <Link to="/ecommerce" style={{ color: "white", textDecoration: "none" }}><Nav.Link className="alink" href="#services"><FontAwesomeIcon icon={faCartShopping} /> Ecommerce</Nav.Link></Link>
        <Nav.Link className="link" href="#home"><FontAwesomeIcon icon={faBookmark} /> Bookmarks</Nav.Link>
        <Nav.Link className="link" href="#about"><FontAwesomeIcon icon={faContactBook} /> Contact</Nav.Link>
        <Nav.Link className="link" href="#services"><FontAwesomeIcon icon={faUser} /> Users</Nav.Link>
      </Nav>
    </Col>
  );
};

export default Sidebar;
