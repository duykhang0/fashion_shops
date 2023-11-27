import {
  Divider,
  Paper,
  MenuList,
  MenuItem,
  Box,
  ListItemText,
  Typography,
  ListItemIcon,
} from "@mui/material";

import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Link from "next/link";
const Slidebar = () => {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }} className="rounded-none">
      <Box className="h-16 flex justify-center items-center">
        <Typography className="text-3xl">Dashboard</Typography>
      </Box>
      <Divider className="border-t-1 border-gray-700" />
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Link href="/dashboard/product">Product</Link>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Link href="/dashboard/category">Category</Link>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
        </MenuItem>
        <Divider />
      </MenuList>
    </Paper>
  );
};

export default Slidebar;
