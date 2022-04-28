import React from 'react';
import './Item.scss';

const Item = (props) => {
  return <li className="cell_container">{props.children}</li>;
}

export default Item;
