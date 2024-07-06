import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getNotifications, setNotifications } from "../utils/localStorage";

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [notificationsArray, setNotificationsArray] = useState(
    getNotifications() || []
  );
  const [notificationsCounter, setNotificationsCounter] = useState(0);

  useEffect(() => {
    setNotificationsCounter(0);
    notificationsArray?.forEach((notification) => {
      if (!notification.seen) {
        setNotificationsCounter(
          (notificationsCounter) => notificationsCounter + 1
        );
      }
    });

    setNotifications(JSON.stringify(notificationsArray));
  }, [notificationsArray]);

  const handleSendNotification = (notification, notificationType) => {
    const newNotification = {
      id: uuidv4(),
      notificationMessage: notification,
      seen: false,
      notificationType: notificationType,
    };

    setNotificationsArray([...notificationsArray, newNotification]);
  };

  const handleMarkAsSeen = (notificationId) => {
    const updatedArray = notificationsArray?.map((notification) => {
      if (notification.id === notificationId) {
        return { ...notification, seen: true };
      } else {
        return notification;
      }
    });

    setNotificationsArray(updatedArray);
  };

  const handleDeleteNotification = (notificationId) => {
    const updatedArray = notificationsArray?.filter(
      (notification) => notification.id !== notificationId
    );

    setNotificationsArray(updatedArray);
  };

  const handleDeleteNotifications = () => {
    setNotificationsArray([]);
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
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
