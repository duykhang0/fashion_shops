import * as React from "react";
import Box from "@mui/material/Box";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import {
  Alert,
  AlertTitle,
  Button,
  IconButton,
  Snackbar,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ICategories } from "./type";
import { deleteCategoryById } from "./categorySlice";
import { useAppDispatch } from "@/redux/hooks";
import AlertMessage from "@/components/dashboard/alertMessage";
interface IDeleteCategoryProp {
  data: ICategories;
}
const DeleteCategory = ({ data }: IDeleteCategoryProp) => {
  const { id_category, name_category } = data;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  // state open popper
  const [openPopper, setOpenPopper] = React.useState(false);
  // state open alert message
  const [openAlertMessage, setOpenAlertMessage] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenPopper((prevState) => !prevState);
  };

  //handleClose
  const handleClose = (confirm: string) => {
    if (confirm === "yes") {
      dispatch(deleteCategoryById(data));
      setOpenPopper(false);
      setOpenAlertMessage(true);
    }
    setOpenPopper(false);
  };

  return (
    <>
      <IconButton
        aria-label="delete"
        className="text-red-500"
        onClick={(event) => handleClick(event)}
      >
        <DeleteIcon />
      </IconButton>
      <Box>
        <Popper
          open={openPopper}
          anchorEl={anchorEl}
          placement="left"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography sx={{ p: 2 }}>
                  {`Are you sure you want to delete :  ${name_category} ?`}
                </Typography>
                <Stack direction="row" className="justify-end pb-1">
                  <Button
                    className="bg-red-500 text-white hover:bg-red-600"
                    onClick={() => handleClose("yes")}
                  >
                    Yes
                  </Button>
                  <Button autoFocus onClick={() => handleClose("no")}>
                    No
                  </Button>
                </Stack>
              </Paper>
            </Fade>
          )}
        </Popper>
      </Box>
    </>
  );
};

export default DeleteCategory;
