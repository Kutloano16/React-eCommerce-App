import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import { Menu, Input } from "semantic-ui-react";

class MainMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="groceries"
          active={activeItem === "groceries"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="electronics"
          active={activeItem === "electronics"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Household"
          active={activeItem === "household"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            icon="logout"
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MainMenu;
