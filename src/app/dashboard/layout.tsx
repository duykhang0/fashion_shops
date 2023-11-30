import { Grid } from "@mui/material";
import Slidebar from "@/components/dashboard/slidebar";
import HeaderDashboard from "@/components/dashboard/header";

import { Inter } from "next/font/google";
import "@/style/globals.css";
import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Grid container className=" min-h-screen">
            <Grid item className="slidebar bg-red-300" xs={2}>
              <Slidebar />
            </Grid>
            <Grid item className="content" xs={10}>
              <HeaderDashboard />
              {children}
            </Grid>
          </Grid>
        </Providers>
      </body>
    </html>
  );
}
