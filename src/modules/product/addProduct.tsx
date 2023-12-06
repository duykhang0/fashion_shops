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
  UploadImage,
} from "@/customForm";
import { IProduct } from "./types";
import { useAppSelector } from "@/redux/hooks";
import * as rules from "./rules";

const AddProduct = () => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const categories = useAppSelector((state) => state.category.categories);

  const toggleDrawer = (open: boolean, event?: React.MouseEvent) => {
    setOpenDrawer(open);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name_product: "",
      price: null,
      description: "",
      main_image: "",
      detail_images: [],
      category: [],
    },
  });
  const onSubmit = async (data: IProduct) => {
    console.log("🚀 ~ file: addProduct.tsx:24 ~ data:", data);
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        style={{ backgroundColor: "green" }}
        onClick={() => toggleDrawer(true)}
      >
        ADD
      </Button>
      <Drawer anchor="right" open={true} onClose={() => toggleDrawer(false)}>
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
                onClick={() => toggleDrawer(false)}
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
                  name="category"
                  rules={rules.ruleCategorySelect}
                />
                {/* Input currency */}
                <InputCurrency control={control} name="price" label="Price" />
                {/* Input description */}
                <TextAreaCustom
                  label="Product Description"
                  placeholder="Enter description ..."
                  control={control}
                  name="description"
                />
                {/* upload main image */}
                <UploadImage
                  control={control}
                  name="main_image"
                  label="Main Image"
                />
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
    </>
  );
};

export default AddProduct;
