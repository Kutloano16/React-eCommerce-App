import React, { Component } from "react";
import ReactDOM from "react-dom";
import Prodcut from "./Product";
import { Button, Confirm, Icon } from "semantic-ui-react";

class AddtoCartButton extends Component {
  state = { open: false, count: 0 || 0 };

  show = () => this.setState({ open: true });
  handleConfirm = () =>
    this.setState({ count: this.state.count + 1, open: false });

  handleCancel = () => this.setState({ count: this.state.count, open: false });

  handleRemove = () =>
    this.setState({ count: this.state.count - 1, open: false });

  render() {
    const { open, count } = this.state;
    return (
      <div>
        <p>
          <Icon name="cart" />
          <em>{count}</em>
        </p>
        <Button onClick={this.show} positive>
          Add To Cart
        </Button>
        <Confirm
          open={this.state.open}
          header="Confirm Add To Cart?"
          onConfirm={this.handleConfirm}
          onCancel={this.handleCancel}
        />
        <Button onClick={this.show} negative>
          Remove
        </Button>
        <Confirm onConfirm={this.handleRemove} />
      </div>
    );
  }
}

export default AddtoCartButton;
