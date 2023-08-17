import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import client from "./apollo/client";
import { Provider } from "react-redux";
import store from "./redux/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
