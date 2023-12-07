import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';

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
              badge={item.badge}
              type={item.type}
              elements={item.actions}
              />
            })
          : null
        }
      </Container>
    )
  }
}

export default ContentList