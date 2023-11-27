import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddProduct = () => {
  return (
    <Button
      variant="contained"
      startIcon={<AddIcon />}
      style={{ backgroundColor: "green" }}
    >
      ADD
    </Button>
  );
};

export default AddProduct;
