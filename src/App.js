import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { Col, Row, Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={3} md={4} lg={2} className="sidebar sticky-md-top">
            <Sidebar />
          </Col>
          <Col sm={9} md={8} lg={10} className="">
            <Header />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
