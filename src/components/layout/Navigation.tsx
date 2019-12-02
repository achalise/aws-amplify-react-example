import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Hidden } from "aws-amplify-react/lib-esm/AmplifyTheme";

export const Navigation: React.FC<NavigationProps> = props => {
  let [show, setShow] = useState(false);
  let transition = `transition: all 0.2s;`

  const toggleMenu = () => {
    setShow(!show);
  }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light" id="pb-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">Landing from component </a>
          <button onClick={toggleMenu} className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#probootstrap-navbar" aria-controls="probootstrap-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span><i className="ion-navicon"></i></span>
          </button>
          <div className={`collapse navbar-collapse transition ${show ? 'show': 'collapsing'}`} id="probootstrap-navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" href="#section-home">Home</a></li>
              <li className="nav-item"><a className="nav-link" onClick={toggleMenu}>
                <Link to="/faq">Register your vehicle</Link>
                </a>
                </li>              
              <li className="nav-item"><a className="nav-link" href="#section-features">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#section-reviews">Reviews</a></li>
              <li className="nav-item"><a className="nav-link" href="#section-pricing">Pricing</a></li>
              <li className="nav-item"><a className="nav-link" href="#section-faq">FAQ</a></li>
              <li className="nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0"><a className="nav-link" href="https://uicookies.com/" target="_blank"><span className="pb_rounded-4 px-4">Get Started</span></a></li>
            </ul>
          </div>
        </div>
      </nav>
    )


//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="pb_navbar pb_scrolled-light">
//       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#pricing">Pricing</Nav.Link>
//           <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">
//               Another action
//             </NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">
//               Separated link
//             </NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//         <Nav>
//           <Nav.Link href="#deets">More deets</Nav.Link>
//           <Nav.Link eventKey={2} href="#memes">
//             Dank memes
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
};

export interface NavigationProps {}
