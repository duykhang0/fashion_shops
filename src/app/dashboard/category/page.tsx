"use client";
import React from "react";
import { Grid } from "@mui/material";
import HeaderCategories from "@/modules/category/headerCategories";
import TableProduct from "@/modules/category/tableCategories";
const CategoryPage: React.FC = () => {
  return (
    <>
      <Grid container className="mt-10 px-4 ">
        <Grid item xs={12} className="header mb-1">
          <HeaderCategories />
        </Grid>
        <Grid item xs={12} className="table_category">
          <TableProduct />
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryPage;
