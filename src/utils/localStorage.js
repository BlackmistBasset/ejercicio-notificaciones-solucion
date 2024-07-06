export const getNotifications = () => {
  return JSON.parse(localStorage.getItem("notifications"));
};

export const setNotifications = (notifications) => {
  localStorage.setItem("notifications", notifications);
};
