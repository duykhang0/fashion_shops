import * as React from "react";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";

import {
  CustomInput,
  CustomSelect,
  InputCurrency,
  TextAreaCustom,
  UploadDetailImage,
  UploadImage,
} from "@/customForm";
import { IProduct } from "./types";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { addProduct } from "./productSlice";
import * as rules from "./rules";
import { ICategories } from "../category/type";
import { isCheckForm } from "@/util";
import DialogMessage from "@/components/dashboard/dialogMessage";
const AddProduct = () => {
  const dispatch = useAppDispatch();
  // state open drawer
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  // state open message
  const [openMessage, setOpenMessage] = React.useState<boolean>(false);
  const categories = useAppSelector((state) => state.category.categories);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    getValues,
  } = useForm({
    defaultValues: {
      name_product: "",
      price: "",
      product_description: "",
      main_image: "",
      detail_images: [],
      categories: [],
    },
  });

  //set open or close Drawer
  const toggleDrawer = (
    open: boolean,
    event?: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      (("key" in event && event.key === "Escape") ||
        ("type" in event && event.type === "click"))
    ) {
      setOpenDrawer(open);
      clearErrors();
    }
  };
  const onSubmit = async (data: IProduct) => {
    dispatch(addProduct(data));
    reset();
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        style={{ backgroundColor: "green" }}
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
          className="overflow-y-scroll"
        >
          <CardHeader
            className="flex-row-reverse text-center"
            action={
              <IconButton
                aria-label="settings"
                onClick={(event) => toggleDrawer(false, event)}
              >
                <CloseIcon />
              </IconButton>
            }
            title="Add A New Product"
          />
          <Divider className="border-y border-b-neutral-400" />
          <CardContent>
            <form id="form-add-product" onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                {/* input product name */}
                <CustomInput
                  control={control}
                  label="Name Product"
                  name="name_product"
                  rules={rules.ruleProductNameInput}
                  placeholder="Input product name ..."
                />
                {/* select category */}
                <CustomSelect
                  control={control}
                  datas={categories}
                  label="Category"
                  placeholder="Input category..."
                  name="categories"
                  rules={rules.ruleCategorySelect}
                />
                {/* Input currency */}
                <InputCurrency control={control} name="price" label="Price" />
                {/* Input description */}
                <TextAreaCustom
                  label="Product Description"
                  placeholder="Enter description ..."
                  control={control}
                  name="product_description"
                />
                {/* upload main image */}
                <UploadImage
                  control={control}
                  name="main_image"
                  label="Main Image"
                />

                {/* upload detail image */}
                <UploadDetailImage name="detail_images" control={control} />
              </Stack>

              <Stack>
                <Button
                  variant="contained"
                  className="bg-green-600 hover:bg-green-700 mx-auto w-28 mt-10"
                  type="submit"
                  form="form-add-product"
                >
                  ADD
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Drawer>
      <DialogMessage
        openDialogMessage={openMessage}
        reset={reset}
        setOpenDialogMessage={setOpenMessage}
        setOpenDrawer={openDrawer}
      />
    </>
  );
};

export default AddProduct;
