import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ICategories } from "./type";
import { Stack } from "@mui/material";
import EditCategory from "./editCategory";
export default function TableCategory() {
  const dispatch = useAppDispatch();

  const categories = useAppSelector((state) => state.category.categories);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="text-base font-semibold">
              id_Category
            </TableCell>
            <TableCell className="text-base font-semibold">
              Category Name
            </TableCell>

            <TableCell className="text-base font-semibold">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.length > 0 ? (
            categories.map((category: ICategories, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell scope="row" className="text-base">
                    {category.id_category}
                  </TableCell>
                  <TableCell scope="row" className="text-base">
                    {category.name_category}
                  </TableCell>

                  <TableCell className="text-base">
                    <Stack direction="row" className="mx-auto">
                      <IconButton aria-label="delete" className="text-red-500">
                        <DeleteIcon />
                      </IconButton>

                      <EditCategory data={category} />
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" colSpan={4}>
                Table empty
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
