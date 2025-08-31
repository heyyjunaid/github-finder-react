import ReactDOM from "react-dom/client"; // 👈 use client API
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")); // 👈 createRoot
root.render(
  <Router>
    <App />
  </Router>
);

// Performance reporting
reportWebVitals();
