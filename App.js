import React from "react";

import { Provider } from "react-redux";
import store from "./src/store";

import Home from "./src/screen/Home";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}