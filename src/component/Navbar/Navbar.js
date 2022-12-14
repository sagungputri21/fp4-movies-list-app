import { Link } from "react-router-dom";
import '../../styles/navbar-footer-style.css'
import { Container, Nav } from "react-bootstrap";

const NavbarComponent = () => {
    return (
      <header id= "navbar" className="fixed top-0 overflow-hidden bg-[#121829] w-full">
        <div>
            <Container>
              <Nav className="all-naigation flex justify-between mx-auto py-4 text-lg">
                <div>
                  <Link className="font-bold text-blue-400" to="/">
                    DGP-Movies
                  </Link>
                </div>
                <div className="flex gap-4 hover:text-indigo-600">
                  <Link 
                    className="hover:font-bold"
                    to="/">Home
                  </Link>
                  <Link 
                    className="hover:font-bold"
                    to='/wishlist'>Wishlist ()
                  </Link>
                </div> 
              </Nav>
            </Container>
        </div>
      </header>
    )
  };
  
  export default NavbarComponent;