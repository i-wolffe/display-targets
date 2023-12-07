import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { GiEcology } from "react-icons/gi";
import { FaDigitalTachograph } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai"; // Sustainability
import { AiOutlineCodepenCircle } from "react-icons/ai"; // Digitalization
import { AiFillSecurityScan } from "react-icons/ai";// Security

export class  ContentElement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      target: this.props.target,
      type: String(this.props.type),
      badge: this.props.badge,
      elements: this.props.elements
    }
  }
  render() {
    console.log(this.state.elements)
    return (
      <Container className='elementContainer'>
        <Row className='justify-content-left itemHeader'>
          <Col xs={2} lg={1} className=''>
            <span className={`iconBadge icon-${this.state.type}`}>
              {
                this.state.type === '1' 
                ?
                  <AiFillSafetyCertificate />
                : this.state.type === '2'
                ? <AiOutlineCodepenCircle />
                : <AiFillSecurityScan />
              }
            </span>
          </Col>
          <Col xs={6} lg={9}>
            <h3 className='title-name'>{this.state.name}</h3>
          </Col>
          <Col xs={4} lg={2}>
            <span className={`targetBadge badgeType${this.state.badge}`}>{this.state.target}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={10}>
          <Accordion>
            {
              this.state.elements.map((elem,i) => {
                return <Accordion.Item className='acc-item' eventKey={i} key={`acc-${i}`}>
                  <Accordion.Header><strong>{elem.name}</strong></Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col xs={6} lg={6} className='details'>
                        <span><strong>Métrica: </strong>{elem.metric}</span>
                      </Col>
                      <Col xs={6} lg={6} className='details'>
                        <span><strong>Objetivo: </strong>{elem.objective}</span>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col xs={12} lg={12}>
                        <p className='description'>{elem.description}</p>
                      </Col>
                    </Row>
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
