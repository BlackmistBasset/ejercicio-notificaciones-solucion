import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

export const NotificationButton = ({
  notificationName,
  notificationMessage,
  setNotificationsArray,
  notificationsArray,
}) => {
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
