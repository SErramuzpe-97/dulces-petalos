import { useEffect, useState } from "react";
import { fromProductToHomeProduct } from "./utils/mappers"; 
import { getProducts } from "../api/api";

export interface HomeProduct {
  id: string;
  name: string;
  binomialName: string;
  price: number;
  imageUrl: string;
}

const Home = () => {
  const [products, setProducts] = useState<HomeProduct[]>([]);
  const [error, setError] = useState<boolean>(false);

  const fetchProducts = async () => {
    try {
      const apiProducts = await getProducts();
      const mapped = apiProducts.map(fromProductToHomeProduct);
      setProducts(mapped);
    } catch {
      setError(true);
    } 
  };

  useEffect(() => {
    void fetchProducts();
  }, []);

  if (error) {
    return <h4 className="text-center">No se han podido cargar los productos</h4>;
  }

  if (products.length === 0) {
    return <h4 className="text-center">Cargando productos...</h4>;
  }

  return (
    <>
      <div className=" space-y-xl">
        <div className="flex justify-center items-center">
          searchbar
        </div>
        <div className="grid gap-m grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-m flex flex-col items-center">
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


export default Home;