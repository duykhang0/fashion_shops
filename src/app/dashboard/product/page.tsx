"use client";
import Grid from "@mui/material/Grid";
import HeaderProduct from "@/modules/product/headerProduct";
import TableProduct from "@/modules/product/tableProduct";
const HomePage = () => {
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
