import Button from "@mui/material/Button";
import { useContext } from "react";
import { NotificationsContext } from "../context/NotificationsContext";
import { v4 as uuidv4 } from "uuid";

export const NotificationButton = ({
  notificationName,
  notificationMessage,
}) => {
  const { notificationsArray, setNotificationsArray } =
    useContext(NotificationsContext);
  console.log(notificationsArray, setNotificationsArray);
  const handleSendNotification = (notification) => {
    const newNotification = {
      id: uuidv4(),
      notificationMessage: notification,
      seen: false,
    };

    setNotificationsArray([...notificationsArray, newNotification]);

    console.log(notificationsArray);
  };

  return (
    <Button
      variant="contained"
      onClick={() => handleSendNotification(notificationMessage)}
    >
      {notificationName}
    </Button>
  );
};
