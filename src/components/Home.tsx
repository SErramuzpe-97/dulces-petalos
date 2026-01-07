import { useEffect, useState } from "react";
import { fromProductToHomeProduct } from "./utils/mappers"; 
import { getProducts } from "../api/api";
import SearchBar from "./common/SearchBar";
import { filterProductsByName } from "./utils/filters";

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
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    try {
      const apiProducts = await getProducts();
      const mapped = apiProducts.map(fromProductToHomeProduct);
      setProducts(mapped);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchProducts();
  }, []);

  if (error) {
    return <h5 className="text-center">No se han podido cargar los productos</h5>;
  }

  if (loading) {
    return <h5 className="text-center">Cargando productos...</h5>;
  }

  let filteredProducts: HomeProduct[] = products;
  if (searchTerm.trim().length > 0) {
    filteredProducts = filterProductsByName(products, searchTerm);
  }

  return (
    <>
      <div className=" space-y-xl">
        <div className="flex justify-center items-center">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>
        { (filteredProducts.length === 0) && <h5 className="text-center">No se han encontrado productos</h5> }
        { (filteredProducts.length > 0) && 
          <div className="grid gap-m grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-m flex flex-col items-center">
              <p>{product.name}</p>
            </div>
          ))}
          </div> 
        }                
      </div>
    </>
  )
}


export default Home;