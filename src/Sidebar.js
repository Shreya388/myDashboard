import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Changed import
import { faHouse, faRectangleList, faTableCellsLarge, faDiagramProject, faCalendar, faCartShopping, faBookmark, faContactBook, faUser } from "@fortawesome/free-solid-svg-icons"; // Added import
import "./Sidebar.css";
import logo from "./logo.png";

const Sidebar = () => {
  return (
    <Nav className="flex-column">
      <br />
      <img src={logo} draggable="false" style={{height:"105px", width: "100px", margin: "auto"}} alt="logo" />
      <br /><br />{/* Updated icon usage */}
      <Nav.Link className="link" href="#home"><FontAwesomeIcon icon={faHouse} /> Dashboards</Nav.Link>
      <Nav.Link className="link" href="#about"><FontAwesomeIcon icon={faRectangleList} /> Widgets</Nav.Link>
      <Nav.Link className="link" href="#services"><FontAwesomeIcon icon={faTableCellsLarge} /> Page Layout</Nav.Link>
      <hr />
      <Nav.Link className="link" href="#home"><FontAwesomeIcon icon={faDiagramProject} /> Projects</Nav.Link>
      <Nav.Link className="link" href="#about"><FontAwesomeIcon icon={faCalendar} /> Calender</Nav.Link>
      <Nav.Link className="alink" href="#services"><FontAwesomeIcon icon={faCartShopping} /> Ecommerce</Nav.Link>
      <Nav.Link className="link" href="#home"><FontAwesomeIcon icon={faBookmark} /> Bookmarks</Nav.Link>
      <Nav.Link className="link" href="#about"><FontAwesomeIcon icon={faContactBook} /> Contact</Nav.Link>
      <Nav.Link className="link" href="#services"><FontAwesomeIcon icon={faUser} /> Users</Nav.Link>
      
    </Nav>
  );
};

export default Sidebar;
