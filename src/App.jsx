import { NotificationButton } from "./components/NotificationButton";

import { Navbar } from "./components/Navbar";

function App() {
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
