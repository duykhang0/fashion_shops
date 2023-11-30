import React, { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import EditIcon from "@mui/icons-material/Edit";
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
} from "@mui/material";
//
import { CustomInput } from "@/customForm";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addNewCategogy } from "./categorySlice";
import { ICategories } from "./type";
import DialogMessage from "@/components/dashboard/dialogMessage";
const rulesCategoryPerent = {
  required: "Categorty does not empty !",
  minLength: {
    value: 8,
    message: "Category name  must be at least 8 characters !",
  },
};

interface IEditCategory {
  data: ICategories;
}
const EditCategory = ({ data }: IEditCategory) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openDialogMessage, setOpenDialogMessage] = useState<boolean>(false);
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
    defaultValues: data,
  });

  // check form value
  const isCheckForm = () => {
    //check value of form
    const isCheckValueForm = Object.values(getValues()).some(
      (value) => value !== null && value !== undefined && value !== ""
    );
    //check error of form
    const isCheckError = Object.keys(errors).length !== 0;
    const check = isCheckError || isCheckValueForm;
    return check;
  };

  const toggleDrawer = (
    event: React.KeyboardEvent | React.MouseEvent,
    open: boolean
  ) => {
    if (
      event &&
      (("key" in event && event.key === "Escape") ||
        ("type" in event && event.type === "click"))
    ) {
      if (isCheckForm()) {
        setOpenDialogMessage(true);
      } else {
        setOpenDrawer(open);
        clearErrors();
      }
    }
  };
  // handle submit
  const onSubmit = async (data: any) => {
    // dispatch(addNewCategogy(data));
    console.log(data);
    reset();
  };
  // handle onclick
  const handleOnclick = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <IconButton
        aria-label="edit"
        className="text-yellow-500"
        onClick={() => handleOnclick()}
      >
        <EditIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={(event) => toggleDrawer(event, false)}
        onKeyDown={(event) => toggleDrawer(event, false)}
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
                onClick={(event) => toggleDrawer(event, false)}
              >
                <CloseIcon />
              </IconButton>
            }
            className="flex-row-reverse text-center"
            title="Add Category"
          />
          <Divider className="border-y border-b-neutral-400" />
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} id="form-update-category">
              <CustomInput
                control={control}
                name="name_category"
                label="Category"
                placeholder="Enter Category"
                rules={rulesCategoryPerent}
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
                  form="form-update-category"
                >
                  Save
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
    </>
  );
};
export default EditCategory;
