import React, { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Drawer,
  IconButton,
  Divider,
  Stack,
  Snackbar,
  Alert,
  AlertTitle,
} from "@mui/material";
//
import { CustomInput } from "@/customForm";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addNewCategogy } from "./categorySlice";
import { ICategories } from "./type";
import { isCheckForm } from "@/util";
import DialogMessage from "@/components/dashboard/dialogMessage";
const rulesCategoryParent = {
  required: "Categorty does not empty !",
  minLength: {
    value: 8,
    message: "Category name  must be at least 8 characters !",
  },
};

const AddCategory = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openDialogMessage, setOpenDialogMessage] = useState<boolean>(false);
  const [openAlertMessage, setOpenAlertMessage] = React.useState(false);
  const dispatch = useAppDispatch();

  // react hook form

  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: { name_category: "" },
  });

  const toggleDrawer = (
    open: boolean,
    event?: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      (("key" in event && event.key === "Escape") ||
        ("type" in event && event.type === "click"))
    ) {
      if (isCheckForm(getValues, errors)) {
        setOpenDialogMessage(true);
      } else {
        setOpenDrawer(open);
        clearErrors();
      }
    }
  };
  // handle submit
  const onSubmit = async (data: ICategories) => {
    dispatch(addNewCategogy(data));
    reset();
    setOpenAlertMessage(true);
  };
  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        className="bg-green-600 hover:bg-green-700"
        onClick={(event) => toggleDrawer(true, event)}
      >
        ADD
      </Button>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        onKeyDown={(event) => toggleDrawer(false, event)}
      >
        <Card
          sx={{
            height: "100vh",
            width: {
              xs: "100vw",
              sm: "70vw",
              md: "50vw",
            },
          }}
        >
          <CardHeader
            action={
              <IconButton
                aria-label="close"
                onClick={(event) => toggleDrawer(false, event)}
              >
                <CloseIcon />
              </IconButton>
            }
            className="flex-row-reverse text-center"
            title="Add Category"
          />
          <Divider className="border-y border-b-neutral-400" />
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} id="form-add-category">
              <CustomInput
                control={control}
                name="name_category"
                label="Category"
                placeholder="Enter Category"
                rules={rulesCategoryParent}
              />
              {/* <CustomInput
                control={control}
                name="childrenCategroy"
                label="Children Category"
                placeholder="Enter Category"
              /> */}
              <Stack direction="row" className="">
                <Button
                  variant="contained"
                  className="bg-green-600 hover:bg-green-700 mx-auto w-28 mt-10"
                  type="submit"
                  form="form-add-category"
                >
                  ADD
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Drawer>
      <DialogMessage
        openDialogMessage={openDialogMessage}
        setOpenDialogMessage={setOpenDialogMessage}
        setOpenDrawer={setOpenDrawer}
        reset={reset}
      />
      <Snackbar
        open={openAlertMessage}
        autoHideDuration={6000}
        onClose={() => setOpenAlertMessage(false)}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert
          onClose={() => setOpenAlertMessage(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          <AlertTitle>Success</AlertTitle>
          Add a new product success
        </Alert>
      </Snackbar>
    </>
  );
};
export default AddCategory;
