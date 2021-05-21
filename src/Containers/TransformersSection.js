import React, { Component } from 'react';
import Transformer from '../Components/Transformer'

class TransformersSection extends Component {

  renderTransformer = (props) => {
    return this.props.proptimii.map(transformer => {
      return <Transformer
        key={transformer.id}
        url={transformer.url}
        alt={transformer.name} />
    })
  }

  render() {
    return (
      <section className="transformers-section">
        {this.renderTransformer()}
      </section>
    );
  }
}

export default TransformersSection;
