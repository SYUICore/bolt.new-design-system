import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { FeaturesSection } from "./components/FeaturesSection";
import { PlansSection } from "./components/PlansSection";
import { HowToUseSection } from "./components/HowToUseSection";
import { TelemedicineSection } from "./components/TelemedicineSection";
import { ApprovalSection } from "./components/ApprovalSection";
import { FAQSection } from "./components/FAQSection";
import { Frame } from "./screens/Frame";
import "./components/Header/Header.css";
import "./components/FeaturesSection/FeaturesSection.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Header />
    <Frame />
    <FeaturesSection />
    <PlansSection />
    <HowToUseSection />
    <TelemedicineSection />
    <ApprovalSection />
    <FAQSection />
  </StrictMode>,
);
