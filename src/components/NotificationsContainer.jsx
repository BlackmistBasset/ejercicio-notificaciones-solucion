import { useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Notification } from "./Notification";
import { NotificationsContext } from "../context/NotificationsContext";
export const NotificationsContainer = ({ isOpen }) => {
  const { notificationsArray } = useContext(NotificationsContext);
  return (
    <Box
      sx={{
        position: "absolute",
        right: "0px",
        top: "64px",
        width: "100%",
        maxWidth: 360,
        border: "1px solid black",
        display: isOpen ? "block" : "none",
      }}
    >
      <nav aria-label="lista de notificacioines">
        <List>
          {notificationsArray?.map(({ id, notificationMessage, seen }) => {
            console.log(notificationMessage);
            return (
              <Notification
                key={id}
                notificationMessage={notificationMessage}
                seen={seen}
              />
            );
          })}
        </List>
      </nav>
    </Box>
  );
};
