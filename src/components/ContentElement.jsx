import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class  ContentElement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      target: this.props.target,
      elements: this.props.elements
    }
  }
  render() {
    console.log(this.state.elements)
    return (
      <Container className='elementContainer'>
        <Row className='justify-content-left'>
          <Col xs={8} lg={10}>
            <h2 className='title-name'>{this.state.name}</h2>
          </Col>
          <Col xs={4} lg={2}>
            <span className='targetBadge'>{this.state.target}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={10}>
          <Accordion>
            {
              this.state.elements.map((elem,i) => {
                return <Accordion.Item eventKey={i} key={`acc-${i}`}>
                  <Accordion.Header><strong>{elem.name}</strong></Accordion.Header>
                  <Accordion.Body>
                    {elem.description}
                  </Accordion.Body>
                </Accordion.Item>
              })
            }
          </Accordion>
          </Col>
        </Row>
      </Container>
      )
  }
}

export default ContentElement
