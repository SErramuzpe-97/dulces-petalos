import type { Product } from "./types";

export const apiUrl = `${import.meta.env.VITE_BASE_URL}/api/v${import.meta.env.VITE_API_VERSION}`

const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${apiUrl}/product`);
  const data = await response.json();
  return data;
}

const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${apiUrl}/product/${id}`);
  const data = await response.json();
  return data;
}

export { getProducts, getProductById };