import { Box, Typography, Stack, Button } from "@mui/material";
import AddProduct from "./addProduct";
const HeaderProduct = () => {
  return (
    <Box className="flex justify-between items-center">
      <Typography className="text-2xl">Product Management</Typography>
      <Stack>
        <AddProduct />
      </Stack>
    </Box>
  );
};
export default HeaderProduct;
