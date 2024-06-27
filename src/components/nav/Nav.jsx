// import { Link, useNavigate } from "react-router-dom"
// import "./NavBar.css"

// export const Nav = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("furEverHome_user"); // Remove user data from localStorage
//     navigate("/", { replace: true }); // Navigate to home page
//   };

//   const isLoggedIn = localStorage.getItem("furEverHome_user");

//   return (
//     <ul className="navbar">
//       <li className="navbar-item">
//         <Link className="navbar-link" to="/">Fur-Ever-Home</Link>
//       </li>
//       <li className="navbar-item">
//         <Link className="navbar-link" to="/availablePets">Available Pets</Link>
//       </li>
//       <li className="navbar-item">
//         <Link className="navbar-link" to="/postAPet">Post a Pet</Link>
//       </li>
//       {isLoggedIn ? (
//         <>
//           <li className="navbar-item">
//             <Link className="navbar-link" to="/myPosts">My Posts</Link>
//           </li>
//           <li className="navbar-item">
//             <Link className="navbar-link" to="/myProfile">My Profile</Link>
//           </li>
//           <li className="navbar-item navbar-logout">
//             <Link className="navbar-link" to="" onClick={handleLogout}>Logout</Link>
//           </li>
//         </>
//       ) : (
//         <li className="navbar-item navbar-login">
//           <Link className="navbar-link" to="/login">Login</Link>
//         </li>
//       )}
//     </ul>
//   );
// };



// import React from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import './NavBar.css';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// export const NavigationBar = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem("furEverHome_user"); // Remove user data from localStorage
//         navigate("/", { replace: true }); // Navigate to home page
//     };

//     const isLoggedIn = localStorage.getItem("furEverHome_user");

//     return (
//         <>
//             {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
//                 <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
//                     <Container fluid>
//                         <Navbar.Brand href="#">Fur-Ever-Home</Navbar.Brand>
//                         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//                         <Navbar.Offcanvas
//                             id={`offcanvasNavbar-expand-${expand}`}
//                             aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                             placement="end"
//                         >
//                             <Offcanvas.Header closeButton>
//                                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                                     Navigation
//                                 </Offcanvas.Title>
//                             </Offcanvas.Header>
//                             <Offcanvas.Body>
//                                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                                     <Nav.Link as={Link} to="/">Home</Nav.Link>
//                                     <Nav.Link as={Link} to="/availablePets">Available Pets</Nav.Link>
//                                     <Nav.Link as={Link} to="/postAPet">Post a Pet</Nav.Link>
//                                     {isLoggedIn ? (
//                                         <>
//                                             <Nav.Link as={Link} to="/myPosts">My Posts</Nav.Link>
//                                             <Nav.Link as={Link} to="/myProfile">My Profile</Nav.Link>
//                                             <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
//                                         </>
//                                     ) : (
//                                         <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                                     )}
//                                 </Nav>
//                                 <Form className="d-flex">
//                                     <Form.Control
//                                         type="search"
//                                         placeholder="Search"
//                                         className="me-2"
//                                         aria-label="Search"
//                                     />
//                                     <Button variant="outline-success">Search</Button>
//                                 </Form>
//                             </Offcanvas.Body>
//                         </Navbar.Offcanvas>
//                     </Container>
//                 </Navbar>
//             ))}
//         </>
//     );
// }

// export default NavigationBar;



// import { Link, useNavigate } from "react-router-dom"; // Import necessary functions from react-router-dom
// import Button from 'react-bootstrap/Button'; // Import Button component from react-bootstrap
// import Container from 'react-bootstrap/Container'; // Import Container component from react-bootstrap
// import Form from 'react-bootstrap/Form'; // Import Form component from react-bootstrap
// import Nav from 'react-bootstrap/Nav'; // Import Nav component from react-bootstrap
// import Navbar from 'react-bootstrap/Navbar'; // Import Navbar component from react-bootstrap
// import NavDropdown from 'react-bootstrap/NavDropdown'; // Import NavDropdown component from react-bootstrap
// import Offcanvas from 'react-bootstrap/Offcanvas'; // Import Offcanvas component from react-bootstrap
// import "./NavBar.css"; // Import custom CSS for the NavBar

// export const NavigationBar = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook for navigation

//   // Function to handle user logout
//   const handleLogout = () => {
//     localStorage.removeItem("furEverHome_user"); // Remove user data from localStorage
//     navigate("/", { replace: true }); // Navigate to home page
//   };

//   const isLoggedIn = localStorage.getItem("furEverHome_user"); // Check if the user is logged in

//   return (
//     <>
//       {[false].map((expand) => (
//         <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3"> {/* Navbar with expand on small screens */}
//           <Container fluid> {/* Fluid container for full width */}
//           <Navbar.Brand href="/">
//             <img
//               src="./images/Logo1.png"
//               width="250"
//               height="50"
//               alt=""
//             />
//           </Navbar.Brand>
//             {/* <Navbar.Brand href="#">Fur-Ever-Home</Navbar.Brand> Brand link */}
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /> {/* Navbar toggle for offcanvas */}
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`} 
//               // {/* Offcanvas ID */}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} 
//               // {/* Offcanvas aria label */}
//               placement="end" 
//               // {/* Offcanvas placement */}
//             >
//               <Offcanvas.Header closeButton> {/* Offcanvas header with close button */}
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}> {/* Offcanvas title */}
//                   Fur-Ever-Home
//                 </Offcanvas.Title>
//               </Offcanvas.Header>

//               <Offcanvas.Body> {/* Offcanvas body */}
//                 <Nav className="justify-content-end flex-grow-1 pe-3"> {/* Navigation links container */}
//                   <Nav.Link href="/">Home</Nav.Link> {/* Home link */}
//                   <Nav.Link href="/availablePets">Available Pets</Nav.Link> {/* Available Pets link */}
//                   <Nav.Link href="/postAPet">Post a Pet</Nav.Link> {/* Post a Pet link */}
//                   {isLoggedIn ? (
//                     <>
//                       <Nav.Link href="/myPosts">My Posts</Nav.Link> {/* My Posts link */}
//                       <Nav.Link href="/myProfile">My Profile</Nav.Link> {/* My Profile link */}
//                       <Nav.Link href="/" onClick={handleLogout}>Logout</Nav.Link> {/* Logout link */}
//                     </>
//                   ) : (
//                     <Nav.Link href="/login">Login</Nav.Link> 
//                     // {/* Login link */}
//                   )}
//                 </Nav>
//                 {/* <Form className="d-flex"> Search form */}
//                   {/* <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   /> */}
//                   {/* <Button variant="outline-success">Search</Button> Search button */}
//                 {/* </Form> */}
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default NavigationBar; // Export the NavbarComponent




// import { Link, useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import "./NavBar.css"

// export const NavigationBar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("furEverHome_user");
//     navigate("/", { replace: true });
//   };

//   const isLoggedIn = localStorage.getItem("furEverHome_user");

//   return (
//     <Navbar expand="false" className="navbar-custom bg-body-tertiary mb-3">
//       <Container fluid>
//         <Navbar.Brand href="/">
//           <img
//             src="./images/Logo1.png"
//             width="250"
//             height="50"
//             alt="Fur-Ever-Home Logo"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
//         <Navbar.Offcanvas
//           id={`offcanvasNavbar-expand`}
//           aria-labelledby={`offcanvasNavbarLabel-expand`}
//           placement="end"
//         >
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
//               Fur-Ever-Home
//             </Offcanvas.Title>
//           </Offcanvas.Header>

//           <Offcanvas.Body>
//             <Nav className="justify-content-end flex-grow-1 pe-3">
//               <Nav.Link href="/" className="active">Home</Nav.Link>
//               <Nav.Link href="/availablePets">Available Pets</Nav.Link>
//               <Nav.Link href="/postAPet">Post a Pet</Nav.Link>
//               {isLoggedIn ? (
//                 <>
//                   <Nav.Link href="/myPosts">My Posts</Nav.Link>
//                   <Nav.Link href="/myProfile">My Profile</Nav.Link>
//                   <Nav.Link href="/" onClick={handleLogout}>Logout</Nav.Link>
//                 </>
//               ) : (
//                 <Nav.Link href="/login">Login</Nav.Link>
//               )}
//             </Nav>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;








//This works and nav bar is pink--offcanvas still white tho---
// import { Link, useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import "./NavBar.css"

// export const NavigationBar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("furEverHome_user");
//     navigate("/", { replace: true });
//   };

//   const isLoggedIn = localStorage.getItem("furEverHome_user");

//   return (
//     <Navbar expand="false" className="navbar-custom mb-3">
//       <Container fluid>
//         <Navbar.Brand href="/">
//           <img
//             src="./images/Logo1.png"
//             width="250"
//             height="50"
//             alt="Fur-Ever-Home Logo"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
//         <Navbar.Offcanvas
//           id={`offcanvasNavbar-expand`}
//           aria-labelledby={`offcanvasNavbarLabel-expand`}
//           placement="end"
//         >
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
//               Fur-Ever-Home
//             </Offcanvas.Title>
//           </Offcanvas.Header>

//           <Offcanvas.Body>
//             <Nav className="justify-content-end flex-grow-1 pe-3">
//               <Nav.Link href="/" className="nav-link-home active">Home</Nav.Link>
//               <Nav.Link href="/availablePets" className="nav-link-available-pets">Available Pets</Nav.Link>
//               <Nav.Link href="/postAPet" className="nav-link-post-pet">Post a Pet</Nav.Link>
//               {isLoggedIn ? (
//                 <>
//                   <Nav.Link href="/myPosts" className="nav-link-my-posts">My Posts</Nav.Link>
//                   <Nav.Link href="/myProfile" className="nav-link-my-profile">My Profile</Nav.Link>
//                   <Nav.Link href="/" onClick={handleLogout} className="nav-link-logout">Logout</Nav.Link>
//                 </>
//               ) : (
//                 <Nav.Link href="/login" className="nav-link-login">Login</Nav.Link>
//               )}
//             </Nav>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;








// import { Link, useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import "./NavBar.css"

// export const NavigationBar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("furEverHome_user");
//     navigate("/", { replace: true });
//   };

//   const isLoggedIn = localStorage.getItem("furEverHome_user");

//   return (
//     <Navbar expand="false" className="navbar-custom mb-3">
//       <Container fluid>
//         <Navbar.Brand href="/">
//           <img
//             src="./images/Logo1.png"
//             width="250"
//             height="50"
//             alt="Fur-Ever-Home Logo"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
//         <Navbar.Offcanvas
//           id={`offcanvasNavbar-expand`}
//           aria-labelledby={`offcanvasNavbarLabel-expand`}
//           placement="end"
//         >
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
//             <img
//             src="./images/Logo1.png"
//             width="280"
//             height="60"
//             alt="Fur-Ever-Home Logo"
//           />
//             </Offcanvas.Title>
//           </Offcanvas.Header>

//           <Offcanvas.Body>
//             <Nav className="justify-content-end flex-grow-1 pe-3 navbar-offcanvas">
//               <Nav.Link href="/" className="nav-link-custom active">Home</Nav.Link>
//               <Nav.Link href="/availablePets" className="nav-link-custom">Available Pets</Nav.Link>
//               <Nav.Link href="/postAPet" className="nav-link-custom">Post a Pet</Nav.Link>
//               {isLoggedIn ? (
//                 <>
//                   <Nav.Link href="/myPosts" className="nav-link-custom">My Posts</Nav.Link>
//                   <Nav.Link href="/myProfile" className="nav-link-custom">My Profile</Nav.Link>
//                   <Nav.Link href="/" onClick={handleLogout} className="nav-link-custom">Logout</Nav.Link>
//                 </>
//               ) : (
//                 <Nav.Link href="/login" className="nav-link-custom">Login</Nav.Link>
//               )}
//             </Nav>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;





//This works w/o highlight on selected page on offcanvas!!
// import { Link, useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import "./NavBar.css"; // Import your CSS file

// export const NavigationBar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("furEverHome_user");
//     navigate("/", { replace: true });
//   };

//   const isLoggedIn = localStorage.getItem("furEverHome_user");

//   return (
//     <Navbar expand="false" className="navbar-custom mb-3">
//       <Container fluid>
//         <Navbar.Brand href="/">
//           <img
//             src="./images/Logo1.png"
//             width="250"
//             height="50"
//             alt="Fur-Ever-Home Logo"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
//         <Navbar.Offcanvas
//           id={`offcanvasNavbar-expand`}
//           aria-labelledby={`offcanvasNavbarLabel-expand`}
//           placement="end"
//         >
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
//               <img
//                 src="./images/Logo1.png"
//                 width="280"
//                 height="60"
//                 alt="Fur-Ever-Home Logo"
//               />
//             </Offcanvas.Title>
//           </Offcanvas.Header>

//           <Offcanvas.Body>
//             <Nav className="justify-content-end flex-grow-1 pe-3 navbar-offcanvas">
//               <Nav.Link href="/" className="nav-link-custom active">Home</Nav.Link>
//               <Nav.Link href="/availablePets" className="nav-link-custom">Available Pets</Nav.Link>
//               <Nav.Link href="/postAPet" className="nav-link-custom">Post a Pet</Nav.Link>
//               {isLoggedIn ? (
//                 <>
//                   <Nav.Link href="/myPosts" className="nav-link-custom">My Posts</Nav.Link>
//                   <Nav.Link href="/myProfile" className="nav-link-custom">My Profile</Nav.Link>
//                   <Nav.Link href="/" onClick={handleLogout} className="nav-link-custom">Logout</Nav.Link>
//                 </>
//               ) : (
//                 <Nav.Link href="/login" className="nav-link-custom">Login</Nav.Link>
//               )}
//             </Nav>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;














// import { Link, useNavigate, useLocation } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import "./NavBar.css"; // Import your CSS file

// export const NavigationBar = () => {
//   const navigate = useNavigate();
//   const location = useLocation(); // Get current location pathname

//   const handleLogout = () => {
//     localStorage.removeItem("furEverHome_user");
//     navigate("/", { replace: true });
//   };

//   const isLoggedIn = localStorage.getItem("furEverHome_user");

//   // Function to determine if a link is active
//   const isLinkActive = (href) => {
//     // Check if the current pathname matches the href
//     return location.pathname === href;
//   };

//   return (
//     <Navbar expand="false" className="navbar-custom mb-3">
//       <Container fluid>
//         <Navbar.Brand href="/">
//           <img
//             src="./images/Logo1.png"
//             width="250"
//             height="50"
//             alt="Fur-Ever-Home Logo"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
//         <Navbar.Offcanvas
//           id={`offcanvasNavbar-expand`}
//           aria-labelledby={`offcanvasNavbarLabel-expand`}
//           placement="end"
//         >
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
//               <img
//                 src="./images/Logo1.png"
//                 width="280"
//                 height="60"
//                 alt="Fur-Ever-Home Logo"
//               />
//             </Offcanvas.Title>
//           </Offcanvas.Header>

//           <Offcanvas.Body>
//             <Nav className="justify-content-end flex-grow-1 pe-3 navbar-offcanvas">
//               <Nav.Link href="/" className={`nav-link-custom ${isLinkActive('/') ? 'active' : ''}`}>Home</Nav.Link>
//               <Nav.Link href="/availablePets" className={`nav-link-custom ${isLinkActive('/availablePets') ? 'active' : ''}`}>Available Pets</Nav.Link>
//               <Nav.Link href="/postAPet" className={`nav-link-custom ${isLinkActive('/postAPet') ? 'active' : ''}`}>Post a Pet</Nav.Link>
//               {isLoggedIn ? (
//                 <>
//                   <Nav.Link href="/myPosts" className={`nav-link-custom ${isLinkActive('/myPosts') ? 'active' : ''}`}>My Posts</Nav.Link>
//                   <Nav.Link href="/myProfile" className={`nav-link-custom ${isLinkActive('/myProfile') ? 'active' : ''}`}>My Profile</Nav.Link>
//                   <Nav.Link href="/" onClick={handleLogout} className={`nav-link-custom ${isLinkActive('/') ? 'active' : ''}`}>Logout</Nav.Link>
//                 </>
//               ) : (
//                 <Nav.Link href="/login" className={`nav-link-custom ${isLinkActive('/login') ? 'active' : ''}`}>Login</Nav.Link>
//               )}
//             </Nav>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;






// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import "./NavBar.css";

// export const NavigationBar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [showOffcanvas, setShowOffcanvas] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("furEverHome_user");
//     navigate("/", { replace: true });
//     setShowOffcanvas(false); // Close offcanvas after logout
//   };

//   const isLoggedIn = localStorage.getItem("furEverHome_user");

//   // Function to determine if a link is active
//   const isLinkActive = (href) => {
//     // Check if the current pathname exactly matches the href
//     return location.pathname === href;
//   };

//   return (
//     <>
//       <Navbar expand="false" className="navbar-custom mb-3">
//         <Container fluid>
//           <Navbar.Brand href="/">
//             <img
//               src="./images/Logo1.png"
//               width="250"
//               height="50"
//               alt="Fur-Ever-Home Logo"
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls={`offcanvasNavbar-expand`}
//             onClick={() => setShowOffcanvas(true)}
//           />
//         </Container>
//       </Navbar>

//       <Offcanvas
//         show={showOffcanvas}
//         onHide={() => setShowOffcanvas(false)}
//         placement="end"
//         id="offcanvasNavbar-expand"
//       >
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>
//             <img
//                  src="./images/Logo1.png"
//                  width="280"
//                  height="60"
//                  alt="Fur-Ever-Home Logo"
//                />
// </Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             <Nav.Link
//               href="/"
//               className={`nav-link-custom ${
//                 isLinkActive("/") ? "active" : ""
//               }`}
//               onClick={() => setShowOffcanvas(false)}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               href="/availablePets"
//               className={`nav-link-custom ${
//                 isLinkActive("/availablePets") ? "active" : ""
//               }`}
//               onClick={() => setShowOffcanvas(false)}
//             >
//               Available Pets
//             </Nav.Link>
//             <Nav.Link
//               href="/postAPet"
//               className={`nav-link-custom ${
//                 isLinkActive("/postAPet") ? "active" : ""
//               }`}
//               onClick={() => setShowOffcanvas(false)}
//             >
//               Post a Pet
//             </Nav.Link>
//             {isLoggedIn ? (
//               <>
//                 <Nav.Link
//                   href="/myPosts"
//                   className={`nav-link-custom ${
//                     isLinkActive("/myPosts") ? "active" : ""
//                   }`}
//                   onClick={() => setShowOffcanvas(false)}
//                 >
//                   My Posts
//                 </Nav.Link>
//                 <Nav.Link
//                   href="/myProfile"
//                   className={`nav-link-custom ${
//                     isLinkActive("/myProfile") ? "active" : ""
//                   }`}
//                   onClick={() => setShowOffcanvas(false)}
//                 >
//                   My Profile
//                 </Nav.Link>
//                 <Nav.Link
//                   href="/"
//                   className="nav-link-custom"
//                   onClick={() => {
//                     handleLogout();
//                     setShowOffcanvas(false);
//                   }}
//                 >
//                   Logout
//                 </Nav.Link>
//               </>
//             ) : (
//               <Nav.Link
//                 href="/login"
//                 className={`nav-link-custom ${
//                   isLinkActive("/login") ? "active" : ""
//                 }`}
//                 onClick={() => setShowOffcanvas(false)}
//               >
//                 Login
//               </Nav.Link>
//             )}
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// export default NavigationBar;












import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NavBar.css";

export const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("furEverHome_user");
    navigate("/", { replace: true });
    setShowOffcanvas(false); // Close offcanvas after logout
  };

  const isLoggedIn = localStorage.getItem("furEverHome_user");

  // Function to determine if a link is active
  const isLinkActive = (href) => {
    // Check if the current pathname exactly matches the href
    return location.pathname === href;
  };

  return (
    <>
      <Navbar expand="false" className="navbar-custom mb-3">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="./images/Logo1.png"
              width="250"
              height="50"
              alt="Fur-Ever-Home Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand`}
            onClick={() => setShowOffcanvas(true)}
          />
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
        id="offcanvasNavbar-expand"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src="./images/Logo1.png"
              width="280"
              height="60"
              alt="Fur-Ever-Home Logo"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link
              href="/"
              className={`nav-link-custom ${
                isLinkActive("/") ? "active" : ""
              }`}
              onClick={() => setShowOffcanvas(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/availablePets"
              className={`nav-link-custom ${
                isLinkActive("/availablePets") ? "active" : ""
              }`}
              onClick={() => setShowOffcanvas(false)}
            >
              Available Pets
            </Nav.Link>
            <Nav.Link
              href="/postAPet"
              className={`nav-link-custom ${
                isLinkActive("/postAPet") ? "active" : ""
              }`}
              onClick={() => setShowOffcanvas(false)}
            >
              Post a Pet
            </Nav.Link>
            {isLoggedIn ? (
              <>
                <Nav.Link
                  href="/myPosts"
                  className={`nav-link-custom ${
                    isLinkActive("/myPosts") ? "active" : ""
                  }`}
                  onClick={() => setShowOffcanvas(false)}
                >
                  My Posts
                </Nav.Link>
                <Nav.Link
                  href="/myProfile"
                  className={`nav-link-custom ${
                    isLinkActive("/myProfile") ? "active" : ""
                  }`}
                  onClick={() => setShowOffcanvas(false)}
                >
                  My Profile
                </Nav.Link>
                <Nav.Link
                  href="/"
                  className="nav-link-custom"
                  onClick={() => {
                    handleLogout();
                    setShowOffcanvas(false);
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link
                href="/login"
                className={`nav-link-custom ${
                  isLinkActive("/login") ? "active" : ""
                }`}
                onClick={() => setShowOffcanvas(false)}
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavigationBar;
