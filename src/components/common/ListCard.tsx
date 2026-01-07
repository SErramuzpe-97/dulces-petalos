import ProductImage from "./ProductImage";

interface Props {
  id: string;
  name: string;
  binomialName: string;
  price: number;
  imageUrl: string;
} 

const ListCard = ({ id, name, binomialName, price, imageUrl }: Props) => {
  return (
    <div className="bg-neutral-100 rounded-m shadow-md  min-w-[384px] h-[422px] ">
      <div className="flex flex-col px-2 pt-1 items-start h-full p-xs">
        <div className="flex flex-col gap-3xs pt-s pl-2">
          <h4>{name}</h4>
          <p className="text-neutral-500">{binomialName}</p>
        </div>
        <div className="flex-grow w-full pt-3 px-2">
          <ProductImage id={id} imageUrl={imageUrl} price={price} />
        </div>
      </div>
    </div>
  );
};

export default ListCard;