import React, { Component } from 'react';
import './Card.css';

import { Card } from 'antd';
const { Meta } = Card;

class IsaacCard extends Component {
  render() {
    return (
        <Card 
          hoverable
          className="IsaacCard"
          cover={<img alt="example" src={process.env.PUBLIC_URL + '/cards/' + this.props.card.img} />}
        >
            <Meta title={this.props.card.originalName} description={<div><div>{this.props.card.translatedTextMonster ? <span style={{fontWeight: 'bold'}}>{this.props.card.translatedText}</span> : this.props.card.translatedText}</div><div>{this.props.card.translatedTextMonster}</div></div>} />
        </Card>
    );
  }
}

export default IsaacCard;
