import { Grid, Typography } from "@mui/material";
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Grid container className=" min-h-screen">
        <Grid item className="slidebar bg-red-300" xs={2}>
          <Typography>Header client</Typography>
        </Grid>
        <Grid item className="content" xs={10}>
          {children}
        </Grid>
        <Grid item className="slidebar bg-red-300" xs={2}>
          <Typography>footer client</Typography>
        </Grid>
      </Grid>
    </section>
  );
}
