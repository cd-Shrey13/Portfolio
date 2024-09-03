import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Index from "./pages/Home/Index.tsx";
// import SmoothScrolling from "./components/SmoothScrolling.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <SmoothScrolling> */}
      <Index />
    {/* </SmoothScrolling> */}
  </StrictMode>,
);
