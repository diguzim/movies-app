import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Routes } from "./Routes";
import { MovieServiceProvider } from "./providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MovieServiceProvider>
      <Routes />
    </MovieServiceProvider>
  </StrictMode>
);
