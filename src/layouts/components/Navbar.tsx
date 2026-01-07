import flowerLogo from '../../assets/flower-logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-neutral-100 sticky top-0 z-50 flex items-center justify-center px-2xs py-3xs">
            <Link to="/" aria-label="Go to home">
                <img src={flowerLogo} alt="Flower logo" className="h-10 w-10" />
            </Link>
        </nav>
    )
}

export default Navbar