import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import Link from "next/link";
import { useAuth } from "../services/context";
import { useRouter } from "next/router";

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    console.log("handleToggle");
    setIsOpen(!isOpen);
  };

  return (
    <MDBNavbar color="special-color" expand="md" dark>
      <MDBNavbarBrand>
        <strong>IMMO WEB</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={handleToggle} />
      <MDBCollapse id="vanbarCollapse" navbar isOpen={isOpen}>
        <MDBNavbarNav left>
          <MDBNavItem active={router.pathname == "/"}>
            <Link href="/" passHref>
              <div className="nav-link">
                <MDBIcon icon="home" className="mr-1" />
                Home
              </div>
            </Link>
          </MDBNavItem>
          <MDBNavItem active={router.pathname == "/properties"}>
            <Link href="/properties" passHref>
              <div className="nav-link">
                <MDBIcon icon="home" className="mr-1" />
                Liste des biens
              </div>
            </Link>
          </MDBNavItem>
          {isAuthenticated && user.role === "admin" && (
            <MDBNavItem active={router.pathname == "/list"}>
              <Link href="/list" passHref>
                <div className="nav-link">
                  <MDBIcon icon="admin" className="mr-1" />
                  Dashboard
                </div>
              </Link>
            </MDBNavItem>
          )}
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem active={router.pathname == "/contact"}>
            <Link href="/contact" passHref>
              <div className="nav-link">
                <MDBIcon icon="map-marker-alt" className="mr-1" />
                Contact
              </div>
            </Link>
          </MDBNavItem>
          {isAuthenticated && (
            <>
              <MDBNavItem>
                <div className="nav-link">
                  <span>Bonjour {user.username}</span>
                </div>
              </MDBNavItem>
              <MDBNavItem>
                <div className="nav-link" onClick={logout}>
                  <MDBIcon icon="power-off" className="mr-1" />
                  Déconnexion
                </div>
              </MDBNavItem>
            </>
          )}
          {!isAuthenticated && (
            <MDBNavItem active={router.pathname == "/login"}>
              <Link href="/login" passHref>
                <div className="nav-link">
                  <MDBIcon icon="user-alt" className="mr-1" />
                  Connexion
                </div>
              </Link>
            </MDBNavItem>
          )}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Header;
