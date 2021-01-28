import React from "react";
import SignIn from "./components/SignIn";
import Checkout from "./components/Checkout";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>どこそこ</h1>
      <h2>登記手続確認</h2>
      <SignIn />
      <Checkout />
    </div>
  );
}
