import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useCategories from "@/hooks/useCategory";

interface IChildrenCategory {
  name: string;
  id_category: number;
  id_children_category: number;
}
interface ICategory {
  id_category: string | number;
  parent_category: string;
  children_category: IChildrenCategory[];
}

function Row(props: { row: ICategory }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell scope="row" className="text-base">
          {row.id_category}
        </TableCell>
        <TableCell className="text-base">{row.parent_category}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                gutterBottom
                component="div"
                className="font-semibold text-lg"
              >
                Children Category : {row.parent_category}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell className="text-base font-semibold">
                      Id children category
                    </TableCell>
                    <TableCell className="text-base font-semibold">
                      Name children category
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.children_category.map(
                    (children: IChildrenCategory, index) =>
                      children ? (
                        <TableRow key={index}>
                          <TableCell scope="row"></TableCell>
                          <TableCell scope="row" style={{ fontSize: "16px" }}>
                            {children.id_children_category}
                          </TableCell>
                          <TableCell scope="row" style={{ fontSize: "16px" }}>
                            {children.name}
                          </TableCell>
                        </TableRow>
                      ) : (
                        "not is children category"
                      )
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function TableProduct() {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    const fetchCategory = async () => {
      try {
        const rawcategories = await useCategories();

        if (rawcategories) {
          setCategories(rawcategories);
        }
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    fetchCategory();
  }, []);
  console.log("category", categories);
  return (
    <TableContainer component={Paper} className="rounded-none">
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className="text-lg font-semibold">ID_Category</TableCell>
            <TableCell className="text-lg font-semibold">
              Parent Category
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category: ICategory) => (
            <Row key={category.id_category} row={category} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
