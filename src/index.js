import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["lime", "lemon", "orange"];
const fruits = ["apple", "raspberry", ...citrus];
console.log(fruits);

const fullname = {
  fname: "James",
  lName: "Bond"
};

const user = {
  fullname,
  id: 1,
  email: "zavarko@gmail.com"
};

console.log(user);
