import {Link} from "react-router-dom" ;

const Navbar = () => {
    return ( 
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/add-movie">Add Movie</Link>
    </nav> 
    );
}
 
export default Navbar;