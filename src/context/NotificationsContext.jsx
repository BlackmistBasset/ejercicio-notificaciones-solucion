import { createContext, useState } from "react";

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [notificationsArray, setNotificationsArray] = useState([]);
  const miEstadoGlobal = "Hola mundo!";
  const unArray = [1, 2, 3];
  return (
    <NotificationsContext.Provider
      value={{
        miEstadoGlobal,
        unArray,
        notificationsArray,
        setNotificationsArray,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
