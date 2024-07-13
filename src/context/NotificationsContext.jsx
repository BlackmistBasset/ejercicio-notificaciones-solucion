import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [notificationsArray, setNotificationsArray] = useState([]);
  const [notificationsCounter, setNotificationsCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  axios.defaults.baseURL =
    "https://666ddd147a3738f7cacd7f85.mockapi.io/notificaciones";

  const getNotifications = () => {
    axios.get().then((response) => {
      setNotificationsArray(response.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getNotifications();
  }, []);

  useEffect(() => {
    setNotificationsCounter(0);
    notificationsArray?.forEach((notification) => {
      if (!notification.seen) {
        setNotificationsCounter(
          (notificationsCounter) => notificationsCounter + 1
        );
      }
    });
  }, [notificationsArray]);

  const handleSendNotification = (notification, notificationType) => {
    const newNotification = {
      notificationMessage: notification,
      seen: false,
      notificationType: notificationType,
    };

    axios
      .post(axios.defaults.baseURL, newNotification)
      .finally(() => getNotifications());
  };

  const handleMarkAsSeen = (notificationId) => {
    axios
      .put(`/${notificationId}`, { seen: true })
      .finally(() => getNotifications());
  };

  const handleDeleteNotification = (notificationId) => {
    axios.delete(`/${notificationId}`).finally(() => getNotifications());
  };

  const handleDeleteNotifications = () => {
    notificationsArray.forEach(({ id }) => {
      fetch(
        `https://666ddd147a3738f7cacd7f85.mockapi.io/notificaciones/${id}`,
        {
          method: "DELETE",
        }
      ).finally(() => getNotifications());
    });
  };

  return (
    <NotificationsContext.Provider
      value={{
        notificationsArray,
        setNotificationsArray,
        handleSendNotification,
        notificationsCounter,
        handleMarkAsSeen,
        handleDeleteNotification,
        handleDeleteNotifications,
        isLoading,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
