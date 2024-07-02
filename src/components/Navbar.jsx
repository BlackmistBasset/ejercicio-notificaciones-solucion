import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { IoIosNotifications } from "react-icons/io";

import Badge from "@mui/material/Badge";
import { NotificationsContainer } from "./NotificationsContainer";

export const Navbar = ({ notificationsArray, setNotificationsArray }) => {
  const [notificationsCounter, setNotificationsCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    notificationsArray?.forEach((notification) => {
      if (!notification.seen) {
        setNotificationsCounter(notificationsCounter + 1);
      }
    });
  }, [notificationsArray]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex" }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Badge badgeContent={notificationsCounter} color="error">
                  <IoIosNotifications />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
          <NotificationsContainer
            isOpen={isOpen}
            notificationsArray={notificationsArray}
            setNotificationsArray={setNotificationsArray}
          />
        </AppBar>
      </Box>
    </>
  );
};
