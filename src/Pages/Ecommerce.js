import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import CardDetails from "../CardDetails.json";
import "./ecommerce.css";

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
    <div className="ecommerce">
    <div className="p-4">
        <h5>Product</h5>
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
    </div>
);

export default Ecommerce;
