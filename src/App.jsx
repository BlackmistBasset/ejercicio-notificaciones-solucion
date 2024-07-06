import { NotificationButton } from "./components/NotificationButton";
import { Navbar } from "./components/Navbar";

import { Box } from "@mui/material";
function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "grid", justifyContent: "center" }}>
        <NotificationButton
          notificationName="Enviar Like"
          notificationMessage="Has recibido un like"
          notificationType="like"
        />
        <NotificationButton
          notificationName="Seguir Usuario"
          notificationMessage="Pepito te está siguiendo"
          notificationType="follow"
        />
      </Box>
    </>
  );
}

export default App;
