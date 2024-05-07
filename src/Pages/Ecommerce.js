import React from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardDetails from "../CardDetails.json";

const Section = ({ img, title, description, price }) => (
    <Col md={6} lg={4} sm={12}>
        <Card className="card-box border-0 mt-2 mb-2">
            <img src={img} draggable="false" className="card-img card-image" alt="images" />
            <Card.Body className="pt-4 pl-4 pr-4">
                <h4>{title}</h4>
                <p>{description}</p>
                <h4 className="price">{price}</h4>
            </Card.Body>
        </Card>
    </Col>
);

const Ecommerce = () => (
    <>
    <div className="pt-4">
        <h5>Product</h5>
        <Col lg={8} md={12} sm={12}>
        <Row>
            <Col md={6} lg={8} sm={6}>
                <form>
                    <input className="product-search" type="text" placeholder="Search Products..." />
                    <button type="submit" className="search-btn2"> <FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </Col>
            <Col md={6} lg={4} sm={6}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="filter">
                        Filters
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
        </Col>
        <br />
        {[...Array(1)].map((_, index) => (
            <Row key={index}>
                {CardDetails.products.map((product, i) => (
                    <Section
                        key={i}
                        img={CardDetails.images[i]}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </Row>
        ))}
    </div>
    </>
);

export default Ecommerce;
