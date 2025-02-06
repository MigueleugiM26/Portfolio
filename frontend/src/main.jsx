import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./assets/css/menu.css";
import Menu from "./components/menu";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  </StrictMode>
);
