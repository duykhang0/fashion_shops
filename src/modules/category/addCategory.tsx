import { useState } from "react";
import { useForm } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Card,
  CardActions,
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
import { addCategogy } from "./categorySlice";
const rulesCategoryPerent = {
  required: "Categorty does not empty !",
  minLength: {
    value: 8,
    message: "Category name must be at least 8 characters !",
  },
};
const AddCategory = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { handleSubmit, control } = useForm();
  const onSubmit = (data: any) => {
    dispatch(addCategogy(data));
  };
  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        className="bg-green-600 hover:bg-green-700"
        onClick={() => setOpenDrawer(true)}
      >
        ADD
      </Button>

      <Drawer anchor="right" open={true} onClose={() => setOpenDrawer(false)}>
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
              <IconButton aria-label="close">
                <CloseIcon />
              </IconButton>
            }
            className="flex-row-reverse text-center"
            title="Add Category"
          />
          <Divider className="border-y border-b-neutral-400" />
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                control={control}
                name="parentCategory"
                label="Category"
                placeholder="Enter Category"
                rules={rulesCategoryPerent}
              />
              <CustomInput
                control={control}
                name="childrenCategroy"
                label="Children Category"
                placeholder="Enter Category"
              />
              <Stack direction="row" className="">
                <Button
                  variant="contained"
                  className="bg-green-600 hover:bg-green-700 mx-auto w-28 mt-10"
                  type="submit"
                >
                  ADD
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Drawer>
    </>
  );
};
export default AddCategory;
