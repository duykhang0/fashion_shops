import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useProduct from "@/hooks/useProduct";
import { formatCurrency } from "@/util";
interface IProduct {
  id_product: number;
  name: string;
  price: string;
  description: string;
  main_image: string;
}

const TableProduct = () => {
  const [dataProducts, setDataProducts] = React.useState<IProduct[]>([]);
  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const rawDataProduct = await useProduct();
        if (rawDataProduct) {
          setDataProducts(rawDataProduct);
        }
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="text-base font-semibold">
              ID_Product
            </TableCell>
            <TableCell className="text-base font-semibold">
              Product Name
            </TableCell>
            <TableCell className="text-base font-semibold">Price</TableCell>
            <TableCell className="text-base font-semibold">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataProducts.length > 0 ? (
            dataProducts.map((product: IProduct) => {
              return (
                <TableRow
                  key={product.id_product}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell scope="row" className="text-base">
                    {product.id_product}
                  </TableCell>
                  <TableCell className="text-base">{product.name}</TableCell>
                  <TableCell className="text-base">
                    {formatCurrency(parseInt(product.price))}
                  </TableCell>
                  <TableCell className="text-base"></TableCell>
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
};
export default TableProduct;
