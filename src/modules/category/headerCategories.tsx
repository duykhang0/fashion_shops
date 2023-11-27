import { Box, Typography, Stack, Button } from "@mui/material";
import AddCategory from "./addCategory";
const HeaderCategories = () => {
  return (
    <Box className="flex justify-between items-center">
      <Typography className="text-xl font-semibold">
        Category Management
      </Typography>

      <Stack>
        <AddCategory />
      </Stack>
    </Box>
  );
};
export default HeaderCategories;
