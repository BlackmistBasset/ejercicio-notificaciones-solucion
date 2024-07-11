import { createContext, useState, useEffect } from "react";

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [notificationsArray, setNotificationsArray] = useState([]);
  const [notificationsCounter, setNotificationsCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getNotifications = () => {
    fetch("https://666ddd147a3738f7cacd7f85.mockapi.io/notificaciones")
      .then((res) => res.json())
      .then((data) => {
        setNotificationsArray(data);
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

    fetch("https://666ddd147a3738f7cacd7f85.mockapi.io/notificaciones", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newNotification),
    }).finally(() => getNotifications());
  };

  const handleMarkAsSeen = (notificationId) => {
    fetch(
      `https://666ddd147a3738f7cacd7f85.mockapi.io/notificaciones/${notificationId}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ seen: true }),
      }
    ).finally(() => getNotifications());
  };

  const handleDeleteNotification = (notificationId) => {
    fetch(
      `https://666ddd147a3738f7cacd7f85.mockapi.io/notificaciones/${notificationId}`,
      {
        method: "DELETE",
      }
    ).finally(() => getNotifications());
  };

  // const handleDeleteNotifications = () => {

  // };

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
