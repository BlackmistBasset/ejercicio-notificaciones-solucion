// Paso 1: Importar y crear nuestro primer contexto
import { createContext, useState } from "react";

export const NotificationsContext = createContext();

// Paso 2: Crear nuestro provider.

export const NotificationsProvider = ({ children }) => {
  const [notificationsArray, setNotificationsArray] = useState([]);
  const miEstadoGlobal = "Hola mundo!";
  const unArray = [1, 2, 3];
  return (
    <NotificationsContext.Provider
      value={{
        miEstadoGlobal: miEstadoGlobal,
        unArray: unArray,
        notificationsArray: notificationsArray,
        setNotificationsArray: setNotificationsArray,
      }}
    >
      {/*Cuando la propiedad ded un objeto se llama igual que el valor que guarda, no es necesario especificarlo pero sigue siendo un objeto.
    
     value={{ miEstadoGlobal unArray}}
    */}
      {children}
    </NotificationsContext.Provider>
  );
};
