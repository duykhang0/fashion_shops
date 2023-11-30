import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
interface IDialogMessageProps {
  openDialogMessage: boolean;
  setOpenDialogMessage: any;
  setOpenDrawer: any;
  reset: any;
}
export default function DialogMessage(props: IDialogMessageProps) {
  const { openDialogMessage, setOpenDialogMessage, setOpenDrawer, reset } =
    props;

  const handleClickOpen = () => {
    setOpenDialogMessage(true);
  };

  const handleClose = (confirm: string) => {
    if (confirm === "no") {
      setOpenDialogMessage(false);
      setOpenDrawer(false);
      if (reset) {
        reset();
      }
    }
    setOpenDialogMessage(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={openDialogMessage}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Message</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are adding or updating ! do you want to continue ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("yes")}>Yes</Button>
          <Button onClick={() => handleClose("no")} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
