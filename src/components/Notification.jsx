import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export const Notification = ({ notificationMessage }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
        <ListItemText primary={notificationMessage} sx={{ color: "black" }} />
      </ListItemButton>
    </ListItem>
  );
};
