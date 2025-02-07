import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./assets/css/menu.css";
import "./assets/css/home.css";
import Menu from "./components/menu";
import Home from "./components/home";

/*
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
*/

createRoot(document.getElementById("menu-react")).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  </StrictMode>
);

createRoot(document.getElementById("home-react")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
