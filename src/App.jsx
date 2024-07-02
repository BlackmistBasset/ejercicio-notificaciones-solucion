import { useState } from "react";
import { NotificationButton } from "./components/NotificationButton";

import { Navbar } from "./components/Navbar";
function App() {
  const [notificationsArray, setNotificationsArray] = useState([]);
  return (
    <>
      <Navbar
        notificationsArray={notificationsArray}
        setNotificationsArray={setNotificationsArray}
      />
      <NotificationButton
        notificationName="Enviar Like"
        notificationMessage="Has recibido un like"
        setNotificationsArray={setNotificationsArray}
        notificationsArray={notificationsArray}
      />
    </>
  );
}

export default App;
