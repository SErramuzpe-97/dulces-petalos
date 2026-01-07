import type { HomeProduct } from "../Home";

export const filterProductsByName = (products: HomeProduct[], searchTerm: string): HomeProduct[] => {
  const normalizedSearch = searchTerm.trim().toLowerCase();
  return products.filter(({name, binomialName}) => {
    const normalizedName = name.toLowerCase();
    const normalizedBinomialName = binomialName.toLowerCase();
    return normalizedName.includes(normalizedSearch) ||
           normalizedBinomialName.includes(normalizedSearch);
  });
}