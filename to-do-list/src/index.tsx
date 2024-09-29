import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Container from "@mui/material/Container/Container";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Container maxWidth="xl">
      <App />
    </Container>
  </React.StrictMode>
);
