//Paso 4: Importar useContext y mi contexto (NotificationsContext) y usarlo

import { useContext, useState } from "react";
import { NotificationButton } from "./components/NotificationButton";

import { Navbar } from "./components/Navbar";

import { NotificationsContext } from "./context/NotificationsContext";
function App() {
  //Acá lo estamos usando
  const objetoGlobal = useContext(NotificationsContext);

  // console.log(objetoGlobal);
  return (
    <>
      <Navbar />
      <NotificationButton
        notificationName="Enviar Like"
        notificationMessage="Has recibido un like"
      />
    </>
  );
}

export default App;
