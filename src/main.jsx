import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";

//Paso 3: Importar y usar mi provider
import { NotificationsProvider } from "./context/NotificationsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotificationsProvider>
      <CssBaseline />
      <App />
    </NotificationsProvider>
  </React.StrictMode>
);
