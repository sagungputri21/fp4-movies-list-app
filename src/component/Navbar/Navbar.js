import { Link } from "react-router-dom";
import '../../styles/navbar-footer-style.css'
import { Container, Nav } from "react-bootstrap";
import SearchBox from "../searchInput";

const NavbarComponent = () => {
    return (
      <header id= "navbar" className="fixed top-0 overflow-hidden bg-[#121829] w-full border-b border-gray-600">
        <div>
            <Container>
              <Nav className="all-naigation flex justify-between mx-auto py-4 text-lg">
                <div>
                  <Link className="font-bold text-blue-400 text-decoration-none" to="/">
                    DGP-Movies
                  </Link>
                </div>
                <div className="flex gap-4">
                  <Link 
                    className="text-gray-400 hover:font-bold text-decoration-none"
                    to="/">Home
                  </Link>
                  <Link 
                    className="text-gray-400 hover:font-bold text-decoration-none"
                    to='/wishlist'>Wishlist ()
                  </Link>
                  <SearchBox />
                </div> 
              </Nav>
            </Container>
        </div>
      </header>
    )
  };
  
  export default NavbarComponent;