import React, { Component } from 'react';
import IsaacCard from '../Card/Card'
import { Col } from 'react-bootstrap';

class IsaacCardCategory extends Component {
  render() {
    return (
      this.props.cards.map(card => {
        return <Col sm><IsaacCard card={card}></IsaacCard></Col>
      })
    );
  }
}

export default IsaacCardCategory;
