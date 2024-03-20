import React from 'react';
import { Nav, NavbarBrand } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Changed import
import { faHouse, faRectangleList, faTableCellsLarge, faDiagramProject, faCalendar } from "@fortawesome/free-solid-svg-icons"; // Added import
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Nav className="flex-column">
      <br />
      <h4 className="mx-auto">Dashboard</h4>
      <br /><br />{/* Updated icon usage */}
      <Nav.Link className="alink" href="#home"><FontAwesomeIcon icon={faHouse} /> Dashboards</Nav.Link>
      <Nav.Link className="link" href="#about"><FontAwesomeIcon icon={faRectangleList} /> Widgets</Nav.Link>
      <Nav.Link className="link" href="#services"><FontAwesomeIcon icon={faTableCellsLarge} /> Page Layout</Nav.Link>
      <hr />
      <Nav.Link className="link" href="#home"><FontAwesomeIcon icon={faDiagramProject} /> Projects</Nav.Link>
      <Nav.Link className="link" href="#about"><FontAwesomeIcon icon={faCalendar} /> Calender</Nav.Link>
      <Nav.Link className="link" href="#services"><FontAwesomeIcon icon={faTableCellsLarge} /> Ecommerce</Nav.Link>
      <Nav.Link className="link" href="#home"><FontAwesomeIcon icon={faHouse} /> Bookmarks</Nav.Link>
      <Nav.Link className="link" href="#about"><FontAwesomeIcon icon={faRectangleList} /> Contacts</Nav.Link>
      <Nav.Link className="link" href="#services"><FontAwesomeIcon icon={faTableCellsLarge} /> Users</Nav.Link>
      
    </Nav>
  );
};

export default Sidebar;
