import './App.css';
import Ecommerce from './Pages/Ecommerce';
import { Row, Container, Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import MyCalendar from './Pages/Calender';
import Users from './Pages/Users';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <Row>
            <Sidebar />
            <Col sm={8} md={8} lg={10} className="p-0">
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/calender" element={<MyCalendar />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/users" element={<Users />} />
            </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
