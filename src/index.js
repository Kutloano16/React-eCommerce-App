import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import MainMenu from "./components/MainMenu.jsx";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import AddToCartButton from "./components/PurchaseButton";
import { Card, Icon, Image, Container, Button } from "semantic-ui-react";
import "./styles.css";

function App() {
  return (
    <Container className="App">
      <MainMenu />
      <Card>
        <Product
          name="Wholewheat Bread"
          description="Baked fresh at store"
          price="12.95"
        />
        <AddToCartButton icon="cart" />
      </Card>
    </Container>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
