import { Link } from "react-router-dom";
import nextIcon from '../../assets/next-icon.svg';

interface Props {
  productName: string;
}

const Breadcrumbs = ({ productName }: Props) => {
  return (
    <>
      <div className="flex items-center gap-2xs mb-s text-neutral-500">
        <Link to="/products"><span className="text-neutral-800 hover:underline">Inicio</span></Link>
        <div className="flex items-center justify-center">
          <img src={nextIcon} alt="Next Icon" className="inline-block" /> 
        </div>
        <div className="text-neutral-800">{productName}</div>
      </div>
    </>
  );
}

export default Breadcrumbs;