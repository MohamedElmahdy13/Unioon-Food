import styled, { css } from "styled-components";
import { useState } from "react";
import SearchInput from "./SearchInput.jsx";

// Styled Components
const NavbarContainer = styled.nav`
  width: 100%;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  position: relative;
  padding-inline-start: 1.6rem;
  padding-block: 1.6rem;
  border-top: 0.9rem solid var(--color-primary);
`;

const NavbarFirstRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 2rem;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  img {
    max-height: 50px;
  }
`;

const SearchContainer = styled.div`
  flex-basis: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 1rem 0;
  }
`;

const NavbarSecondRow = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--color-grey-0);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const NavItem = styled.li`
  position: relative;
  padding: 1rem;
  width: 100%;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: auto;
    text-align: left;

    &:hover > ul {
      display: block;
      opacity: 1;
      visibility: visible;
    }
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-text);
  transition: all 400ms ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.4rem;

  &:hover {
    color: var(--color-primary);
  }
`;

const DropdownMenu = styled.ul`
  display: block; /* Default to block for mobile */
  opacity: 1;
  visibility: visible;
  position: static;
  background-color: var(--color-grey-0);
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem;
  transition: all 400ms ease-in-out;
  border-radius: 4px;

  a {
    font-size: 1.3rem;
    font-weight: 400;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block; /* Always show dropdown in mobile */
    opacity: 1;
    visibility: visible;
    font-size: 1.2rem;
    padding-inline-start: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 250px;
    display: none; /* Hidden by default on larger screens */
    opacity: 0;
    visibility: hidden;
  }
`;

const DropdownItem = styled.li`
  padding: 0.5rem 0;
  width: 100%;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }

  &:hover {
    background-color: var(--color-grey-light);
  }
`;

const MobileToggle = styled.div`
  display: block;
  cursor: pointer;
  padding: 0.5rem;
  background-color: var(--color-primary);
  color: var(--color-grey-0);
  border-radius: 4px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const DropdownToggleIcon = styled.span`
  transition: transform 0.3s ease;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(180deg);
    `};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

// Dropdown Component
const NavItemWithDropdown = ({ title, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <NavItem>
      <NavLink href="#" onClick={toggleDropdown}>
        {title}
        {window.innerWidth < 768 && (
          <DropdownToggleIcon $isOpen={isDropdownOpen}>▼</DropdownToggleIcon>
        )}
      </NavLink>
      <DropdownMenu>{children}</DropdownMenu>
    </NavItem>
  );
};

// Main Navbar Component
const ResponsiveNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer>
      {/* First Row */}
      <NavbarFirstRow>
        <Logo>
          <img src="../../public/images/logo.svg" alt="Logo" />
        </Logo>

        <SearchContainer>
          <SearchInput />
        </SearchContainer>

        <MobileToggle onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </MobileToggle>
      </NavbarFirstRow>

      {/* Second Row */}
      <NavbarSecondRow $isOpen={isMobileMenuOpen}>
        <NavMenu>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>

          <NavItemWithDropdown title="Services">
            <DropdownItem>
              <NavLink href="/service1">Service 1</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink href="/service2">Service 2</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink href="/service3">Service 3</NavLink>
            </DropdownItem>
          </NavItemWithDropdown>

          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
        </NavMenu>
      </NavbarSecondRow>
    </NavbarContainer>
  );
};

export default ResponsiveNavbar;
