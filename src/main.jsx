import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'remixicon/fonts/remixicon.css';

// import { ToastContainer } from "react-toastify";


createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
);
