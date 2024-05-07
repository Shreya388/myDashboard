import './App.css';
import Ecommerce from './Pages/Ecommerce';
import { Row, Container, Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <Row>
            <Sidebar />
            <Col sm={8} md={8} lg={10} className="pl-0 pr-0">
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
            </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
