
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';

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
            <h1>_LOGO_</h1>
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
            <h3>Sostenibilidad & Digitalizacion</h3>
          </Col>
        </Row>
      </Container>
      <ContentList />
    </div>
  );
}

export default App;
