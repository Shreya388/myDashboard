import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./Header.css";

const images = [
    "https://images.pexels.com/photos/5525005/pexels-photo-5525005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6635999/pexels-photo-6635999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4458518/pexels-photo-4458518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8891953/pexels-photo-8891953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3908800/pexels-photo-3908800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7160860/pexels-photo-7160860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5121738/pexels-photo-5121738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8219320/pexels-photo-8219320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const products = [
    { title: "Pink Georgette Dress", description: "Stylish Women Dresses", price: "$30.00" },
    { title: "Pink Hoop Earing", description: "Women Eccessories", price: "$3.00" },
    { title: "Casual Maroon Skirt", description: "Casual Women Skirts", price: "$15.00" },
    { title: "Golden Necklace Set", description: "Women Jewellary Sets", price: "$20.00" },
    { title: "Trendy Leather Bag", description: "Women Purse", price: "$40.00" },
    { title: "Beautiful Wedding Dress", description: "Western Wedding Dresses", price: "$150.00" },
    { title: "Trendy Jeans Jacket", description: "Mens Jacket", price: "$22.00" },
    { title: "Cute Black Tshirt", description: "Men T-shirts", price: "$19.00" },
    { title: "Maroon Velvet Sweater", description: "Women Winter Wear", price: "$50.00" },
];

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

const Header = () => (
    <div className="p-4">
        <div className="Topbar">
            <h3>Welcome Alex</h3>
            <small><p>Here's what's happening with your Store today</p></small>
        </div>
        <br /><br /><br />

        <hr />
        <h4>Product</h4><br />
        {[...Array(1)].map((_, index) => (
            <Row key={index}>
                {products.map((product, i) => (
                    <Section
                        key={i}
                        img={images[i]}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </Row>
        ))}
    </div>
);

export default Header;
