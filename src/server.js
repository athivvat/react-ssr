import express from "express";
import path from "path";
import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOMServer from "react-dom/server";

import Html from "./components/Html";
import App from "./components/App";
import reducer from "./reducers";

const app = express();

app.use(express.static(path.join(__dirname)));

app.get("*", async (req, res) => {
  const scripts = ["vendor.js", "client.js"];

  const initialState = { initialText: "rendered on the server !!" }

  const store = createStore(reducer, initialState)

  const appMarkup = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const html = ReactDOMServer.renderToStaticMarkup(
    <Html children={appMarkup} scripts={scripts} initialState={initialState} />
  );

  res.send(`<!DOCTYPE html>${html}`);
});

app.listen(3000, () => console.log("Listening on localhost:3000"));
