import type { Product } from "../../api/types";
import type { HomeProduct } from "../Home";

const fromProductToHomeProduct = (product: Product): HomeProduct => {
  const { id, name, binomialName, price, imgUrl } = product;

  return {
    id,
    name,
    binomialName,
    price,
    imageUrl: imgUrl,
  };
}

export { fromProductToHomeProduct };