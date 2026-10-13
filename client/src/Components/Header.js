import { Container, Nav,NavItem,NavLink,Navbar } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../Images/logo-t.png";
const Header = () => {

  return (

    <Container>
        
          <Navbar className="header">
            <Nav>
              <NavItem>
                <Link to='/' className="nav-link a">
                  <img src={logo} ></img>
                </Link>
              </NavItem>


              <NavItem>
                <Link to='/' className="nav-link a">
                  Home
                </Link>
              </NavItem>

              <NavItem>
                <Link to='/profile' className="nav-link a">
                  Profile
                </Link>
              </NavItem>

              <NavItem>
                <NavLink href='#'>
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
   
    </Container>


  );
};

export default Header;
