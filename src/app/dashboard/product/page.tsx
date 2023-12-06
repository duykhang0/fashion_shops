"use client";
import Grid from "@mui/material/Grid";
import HeaderProduct from "@/modules/product/headerProduct";
import TableProduct from "@/modules/product/tableProduct";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { fetchCategories } from "@/modules/category/categorySlice";
const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {}, [dispatch(fetchCategories())]);
  return (
    <>
      <Grid container className="mt-10 px-4 ">
        <Grid item xs={12}>
          <HeaderProduct />
        </Grid>
        <Grid item xs={12}>
          <TableProduct />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
