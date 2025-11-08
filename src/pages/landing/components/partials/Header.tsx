import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegHospital } from "react-icons/fa";
const Header = () => {
  return (
      <header>
        <Link to="/">
            <h4>
                <FaRegHospital size={45} />
                CoreHealth
            </h4>
        </Link>
        <nav>
            <ul>
                <li><Link to="#">Home</Link>{" "}</li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Find Doctor</Link></li>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
        </nav>
        <div>
            <CiSearch size={30}/>
            <FaBars size={30} />
        </div>
    </header>
  );
}

export default Header
