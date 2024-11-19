import styled from "styled-components";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import SearchInput from "./SearchInput.jsx";

// Styled Navbar
const StyledNavbar = styled(Navbar)`
  background-color: var(--color-grey-0);
  padding: 1rem 2rem;
  position: relative;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.15);

  .navbar-brand {
    color: var(--color-primary);
    font-size: 1.5rem;
    font-weight: bold;
  }

  .nav-link {
    color: var(--color-primary);
    margin: 0 0.5rem;
    border-bottom: 2px solid transparent;

    &:hover,
    &.active {
      border-bottom: 2px solid var(--color-primary);
    }
  }
`;

// Styled Nav Item with hover behavior
const StyledNavItem = styled(NavItem)`
  &:hover .dropdown-menu,
  .dropdown-menu:hover {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
`;

// Styled Dropdown Menu
const StyledDropdownMenu = styled.div`
  position: absolute;
  left: 50%;
  top: 100%;
  width: 80%;
  background-color: var(--color-grey-0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  z-index: 9;
  display: block;
  transform: translateX(-50%) translateY(-10px);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.15);

  .dropdown-item {
    color: #000;
    padding: 0.5rem 1rem;

    &:hover {
      color: var(--color-primary);
      background-color: #0d6efd;
    }
  }

  .dropdown-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    h5 {
      font-size: 1.6rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      a {
        font-size: 1.3rem;
      }
    }
  }
`;
const StyledNavbarContainer = styled.div`
  background-color: var(--color-grey-0);
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.15);
`;

// First Row
const StyledNavbarFirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  .navbar-brand {
    img {
      max-height: 50px;
    }
  }

  .search-bar {
    flex: 1;
    margin-left: 2rem;

    input {
      width: 100%;
      padding: 0.5rem 1rem;
      border: 1px solid var(--color-grey-300);
      border-radius: 4px;
      font-size: 1rem;

      &:focus {
        outline: none;
        border-color: var(--color-primary);
      }
    }
  }
`;

// Second Row
const StyledNavbarSecondRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
`;
// Styled Navbar Toggler
const StyledToggler = styled(NavbarToggler)`
  border: none;
  color: var(--color-primary);
  background: tomato;

  &:focus {
    outline: none;
  }

  // Hide toggle on large screens
  @media (min-width: 768px) {
    display: none;
  }
`;

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggle = () => setIsOpen(!isOpen);

  const handleMouseEnter = (menuName) => setActiveMenu(menuName);
  const handleMouseLeave = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    }
  };

  return (
    <StyledNavbarContainer>
      {/* First Row */}
      <StyledNavbarFirstRow>
        <NavbarBrand href="/">
          <img src="../../public/images/logo.svg" alt="logo" />
        </NavbarBrand>
        <div className="search-bar">
          <SearchInput />
        </div>
        <StyledToggler onClick={toggle} />
      </StyledNavbarFirstRow>

      {/* Second Row */}
      <Collapse isOpen={isOpen} navbar>
        <StyledNavbarSecondRow>
          <Nav navbar>
            <StyledNavItem>
              <NavLink
                href="/"
                className={activeMenu === "home" ? "active" : ""}
              >
                Home
              </NavLink>
            </StyledNavItem>
            <StyledNavItem>
              <NavLink
                href="/about"
                className={activeMenu === "about" ? "active" : ""}
              >
                About
              </NavLink>
            </StyledNavItem>
            <StyledNavItem
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={() => handleMouseLeave("services")}
            >
              <NavLink
                href="/services"
                className={activeMenu === "services" ? "active" : ""}
              >
                Services
              </NavLink>
              <StyledDropdownMenu className="dropdown-menu">
                <div className="dropdown-wrapper">
                  {[...Array(5)].map((_, idx) => (
                    <div className="dropdown-section" key={idx}>
                      <h5>Title {idx + 1}</h5>
                      <ul>
                        {[...Array(4)].map((_, itemIdx) => (
                          <li key={itemIdx}>
                            <a href="">Item {itemIdx + 1}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </StyledDropdownMenu>
            </StyledNavItem>
            <StyledNavItem>
              <NavLink
                href="/contact"
                className={activeMenu === "contact" ? "active" : ""}
              >
                Contact
              </NavLink>
            </StyledNavItem>
          </Nav>
        </StyledNavbarSecondRow>
      </Collapse>
    </StyledNavbarContainer>
  );
};

export default ResponsiveNavbar;
