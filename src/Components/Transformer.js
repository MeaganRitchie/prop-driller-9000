import React from 'react';

function Transformer(props) {

  return (
    <img
      className='transformer'
      src={props.url}
      alt={props.alt}
    />
  );
}

export default Transformer;
