import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface IAlertMessage {
  open: boolean;
  setOpen: any;
  message: string;
}
const AlertMessage = (props: IAlertMessage) => {
  const { open, setOpen, message } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert variant="filled" severity="success">
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AlertMessage;
