import React, { Component } from "react";
import ReactDOM from "react-dom";
import Product from "./Product";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ manufacturer }) => {
      manufacturer: [
        {
          manufacturer: "Samsung"
        },
        {
          manufacturer: "Apple"
        },
        {
          manufacturer: "Huawei"
        },
        {
          manufacturer: "Nokia"
        }
      ];
    };
    this.changeManufacturer = this.changeManufacturer.bind(this);
  }
  changeManufacturer = manufacturer => {
    if ((manufacturer !== "Apple", "Samsung", "Huawei", "Nokia")) {
      this.setState({
        manufacturer: "Other Device"
      });
    }
  };
  render() {
    return <h4>Make:{this.state.changeManufacturer}</h4>;
  }
}
export default ProductDetails;
