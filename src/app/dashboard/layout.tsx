import { Grid } from "@mui/material";
import Slidebar from "@/components/dashboard/slidebar";
import HeaderDashboard from "@/components/dashboard/header";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Grid container className=" min-h-screen">
        <Grid item className="slidebar bg-red-300" xs={2}>
          <Slidebar />
        </Grid>
        <Grid item className="content" xs={10}>
          <HeaderDashboard />
          {children}
        </Grid>
      </Grid>
    </section>
  );
}
