import React from "react";
import ReactDOM from "react-dom";
import { Container } from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";

const Product = props => {
  return (
    <div className="Card">
      <Image src="https://via.placeholder.com/400x400" />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <h3> ${props.price}</h3>
    </div>
  );
};
export default Product;
