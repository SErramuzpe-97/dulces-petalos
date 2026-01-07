import { useParams } from "react-router-dom";
import Breadcrumbs from "./common/Breadcrumbs";
import { getProductById } from "../api/api";
import { useEffect, useState } from "react";
import { fromProductToProductDetail } from "./utils/mappers";

export interface ProductDetail {
  id: string;
  name: string;
  binomialName: string;
  price: number;
  imgUrl: string;
  wateringsPerWeek: number;
  fertilizerType: string;
  heightInCm: number;
}

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  
  const fetchProduct = async (productId: string) => {
    try {
      const product = await getProductById(productId);
      setProduct(fromProductToProductDetail(product));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      void fetchProduct(id);
    }
  }, [])

  if (error) {
    return <h5 className="text-center">No se ha podido cargar el producto</h5>;
  }

  if (loading) {
    return <h5 className="text-center">Cargando producto...</h5>;
  } 

  if (!product || !id) {
    return <h5 className="text-center">Producto no encontrado</h5>;
  }
  
  return (
    <div className="flex flex-col items-start w-full min-h-[100%] top-0">
      <Breadcrumbs productName={product.name} />
      <div className="w-full flex flex-col flex-1 py-xl min-h-0">
        <div className="flex flex-col md:flex-row flex-1 min-h-0 items-stretch gap-m md:gap-xl w-full">        
            <div className="w-full md:w-1/2 flex">
              <div
                className="w-full h-[250px] md:h-auto md:flex-1 rounded-[theme(borderRadius.s)] bg-center bg-no-repeat p-3" 
                style={
                  product.imgUrl
                    ? { backgroundImage: `url(${product.imgUrl})`, backgroundSize: "cover" }
                    : undefined
                }
              ></div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-2xs">
              <div className="flex flex-col gap-2xs">
                <h2>{product.name}</h2>
                <p className="text-neutral-500">{product.binomialName}</p>
              </div>
              <div className="pt-s">
                <h6>€{product.price.toFixed(2)}</h6>
              </div>
              <div className="pt-s">
                <ul className="list-disc list-inside space-y-1xs">
                  <li>Regar {product.wateringsPerWeek} {product.wateringsPerWeek > 1 ? "veces" : "vez"} por semana</li>
                  <li>Fertilizar con {product.fertilizerType}</li>
                </ul>
              </div>
              <div className="pt-s">
                <button className="bg-accent-600 text-neutral-100 px-xs py-2xs rounded-full cursor-pointer hover:bg-accent-500 focus-visible:bg-accent-500 focus:outline-none">Añadir al carrito</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;