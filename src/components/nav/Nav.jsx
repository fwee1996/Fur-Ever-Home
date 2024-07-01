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
  const isLoggedIn = localStorage.getItem("furEverHome_user"); // Changed: Moved isLoggedIn declaration here.
// isLoggedIn checks if there is a user session (localStorage.getItem("furEverHome_user")).


//removes the user session from localStorage and redirects the user to /. It also ensures the Offcanvas menu closes when the user logs out.
  const handleLogout = () => {
    localStorage.removeItem("furEverHome_user");
    navigate("/", { replace: true });
    setShowOffcanvas(false); // Close offcanvas after logout
  };

  // Function to determine if a link is active and should be highlighted based on the current location.pathname.
  const isLinkActive = (href) => {
    // Check if the current pathname exactly matches the href
    return location.pathname === href; // Added: Explanation of what this function does
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


          {/* The Navbar component renders either a "Logout" link or a "Login" link based on the isLoggedIn state. */}
          <div className="navbar-login">
            {isLoggedIn ? (
              <Nav.Link
                href="/"
                className="nav-link-custom"
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link
                href="/login"
                className={`nav-link-custom ${
                  isLinkActive("/login") ? "active" : ""
                }`}
              >
                Login
              </Nav.Link>
            )}
          </div>

        {/* The Offcanvas menu toggles based on the showOffcanvas state and displays appropriate links. */}
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
