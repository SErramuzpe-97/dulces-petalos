import { Link } from "react-router-dom";
import arrowIcon from "../../assets/arrow-icon.svg";

interface Props {
  imageUrl: string;
  price: number;
  id: string;
}

const ProductImage = ({ imageUrl, price, id }: Props) => {
  return (
    <div
      className="w-full h-full rounded-[theme(borderRadius.s)] bg-center bg-no-repeat flex items-end p-3" 
      style={
        imageUrl
          ? { backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }
          : undefined
      }
    >
      <div className="flex items-center justify-between w-full">
        <div className="bg-neutral-100 rounded-[theme(borderRadius.s)] px-2 py-1 text-xl">€{price.toFixed(2)}</div>
        <Link to={`/products/${id}/detail`}>
          <div className="bg-neutral-100 rounded-[theme(borderRadius.s)] p-1">
            <img src={arrowIcon} alt="Ver producto" />
          </div>
        </Link>
      </div>
    </div>
  )
};

export default ProductImage;