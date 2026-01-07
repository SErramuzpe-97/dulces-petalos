import type { Product } from "../../api/types";
import type { ProductDetail } from "../Detail";
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

const fromProductToProductDetail = (product: Product): ProductDetail => {
  const { 
    id, name, binomialName, price, imgUrl,
    wateringsPerWeek, fertilizerType, heightInCm
   } = product;

  const fertilizerTypeSpanish = fertilizerType === "phosphorus" ? "fósforo" : "nitrógeno";

  return {
    id,
    name,
    binomialName,
    price,
    imgUrl,
    wateringsPerWeek,
    fertilizerType: fertilizerTypeSpanish,
    heightInCm,
  };
}

export { fromProductToHomeProduct, fromProductToProductDetail };