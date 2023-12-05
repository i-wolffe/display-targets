import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import content from './config/content.js';
import { ContentElement } from './ContentElement';

export class  ContentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }
  async componentDidMount() {
    //console.log(content)
    if (content !== null) {
      this.setState({
        data: content
      })
    }
  }
  render() {
    return (
      <Container className='mainContainer'>
        {
          this.state.data != null
          ? 
            this.state.data.map((item) => {
              //console.log('Actions:',item.actions)
              return <ContentElement 
              key={`item-${item.name}`}
              name={item.name}
              target={item.target}
              elements={item.actions}
              />
            })
          : null
        }
        <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Container>
    )
  }
}

export default ContentList