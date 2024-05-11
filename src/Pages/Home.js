import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "./Home.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Cards = (props) => {
  return (
    <Col md={6} lg={4} sm={12}>
      <Card className="order-card">
        <Card.Body>
          <Row>
            <Col>
              <p>{props.label}</p>
              <h2>{props.count}</h2>
            </Col>
            <Col>
              <div style={{ float: "right" }}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  )
}

const Home = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Brown', 'Pink', 'Cyan', 'Magenta'],
    datasets: [{
      label: 'Dataset',
      data: [900, 90, 300, 200, 400, 500, 600, 700, 800, 1000],
      backgroundColor: ['#ffa0a0'],
      borderColor: ['#ffa0a0'],
      borderWidth: 0
    }]
  };

  return (
      <div className="dashboard">
        <Container className="mx-auto">
          <h5 className="pt-4 pb-3">Dashboard</h5>
          <Row>
            <Cards label="Total sells" count="$2799.00" />
            <Cards label="Average order value" count="$272.98" />
            <Cards label="Total orders" count="578" />
          </Row>
          <div className="mt-4">
            <Row>
              <Col md={6} lg={4} sm={12}>
                <Card className="border-0">
                  <Card.Body>
                    <Row>
                    <Col>
                      <p>Active users</p>
                    </Col>
                    <Col>
                      <div style={{float:"right"}}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </div>
                    </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={8} sm={12}>
                <Card className="stats-card">
                  <Card.Body>
                  <Row>
                    <Col>
                      <p>Income statistics</p>
                    </Col>
                    <Col>
                      <div style={{float:"right"}}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </div>
                    </Col>
                    </Row>
                    <Bar data={data} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
  );
};

export default Home;
