import { format } from "path";

const formatCurrency = (price: number) => {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return USDollar.format(price);
};

export default formatCurrency;
