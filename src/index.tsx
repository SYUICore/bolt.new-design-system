import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Blog from "./pages/Blog";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Blog />
  </StrictMode>,
);
