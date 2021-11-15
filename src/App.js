import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Products from './components/Products';
import Courses from './components/Courses';
import Enquiry from './components/Enquiry';
import { Navbar,Container,Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      
  <Navbar bg="dark" variant="dark">
    <Container fluid>
    <Navbar.Brand href="#home">React Assignment</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/products">Products</Nav.Link>
      <Nav.Link href="/courses">Courses</Nav.Link>
      <Nav.Link href="/enquiry">Enquiry</Nav.Link>
     </Nav>
    </Container>
  </Navbar>
      <Router>
        <Routes>
          <Route path="/products" element={<Products/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/enquiry" element={<Enquiry/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
