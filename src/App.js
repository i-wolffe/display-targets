
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import logo from './images/logo_rsz.png';
import { FaWolfPackBattalion } from "react-icons/fa6";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentList from './components/ContentList';


function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Container>
        <Row className='logo'>
          <Col className="img-logo">
          <img src={logo} className="Image-logo" alt="logo" />
          </Col>
          <Col xs lg="2" className="locale">
            <span>Lang</span>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} className="title">
            <h1>Targets 2024</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} className="subtitle">
            <h3>Sustentabilidad & Digitalización</h3>
          </Col>
        </Row>
      </Container>
      <ContentList />
      <div className='footer'>
      <span className="iconBadge"><FaWolfPackBattalion /></span>
      </div>
    </div>
  );
}

export default App;
