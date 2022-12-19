import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

const Notification = ({ type, message }) => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const handleclose = () => {
    dispatch(uiActions.showNotifacation({ open: false }));
  };
  return (
    <div>
      {notification.open && (
        <Alert severity={type} onClose={handleclose}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
