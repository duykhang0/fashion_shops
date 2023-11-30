"use client";
import React from "react";
import { Grid } from "@mui/material";
import HeaderCategories from "@/modules/category/headerCategories";
import TableCategory from "@/modules/category/tableCategories";

import { useAppDispatch } from "@/redux/hooks";
import { fetchCategories } from "@/modules/category/categorySlice";
const CategoryPage: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <>
      <Grid container className="mt-10 px-4 ">
        <Grid item xs={12} className="header mb-1">
          <HeaderCategories />
        </Grid>
        <Grid item xs={12} className="table_category">
          <TableCategory />
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryPage;
