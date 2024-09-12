import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <div className="dark text-foreground bg-gradient-to-l from-[#373E44] to-[#191B1F]">
        <App />
      </div>
    </NextUIProvider>
  </StrictMode>
);
