import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import DesignSystem from "./pages/DesignSystem";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/ui-design-system" element={<DesignSystem />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
