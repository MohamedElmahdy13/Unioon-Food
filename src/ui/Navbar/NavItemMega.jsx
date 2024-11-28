import styled, { css } from "styled-components";
import MegaMenu from "./MegaMenu.jsx";
import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi"; // Import MegaMenu component

const NavListItem = styled.li`
  padding: 0 1rem;
  width: 100%;
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tabletWide}) {
      width: auto;
      &:hover .mega-menu {
        /* Show MegaMenu when NavListItem is hovered */
        opacity: 1;
        visibility: visible;
        transform: translateY(0%) translateX(-50%);
      }
    }
  `}
`;

const NavLink = styled.a`
  color: var(--color-text);
  padding: 1.4rem 0;
  display: none;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tabletWide}) {
      position: relative;
      width: auto;
      display: block;
      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        background-color: var(--color-primary);
        width: 100%;
        height: 0.6rem;
        left: 0;
        bottom: 0;
        opacity: 0;
        visibility: hidden;
        transition: all 400ms ease-in-out;
      }

      &:hover::after {
        opacity: 1;
        visibility: visible;
      }
    }
  `}
`;

const NavLinkWrapper = styled.div`
  display: none;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tabletWide}) {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: space-between;
      cursor: pointer;
      width: 100%;
    }
  `}
`;

const NavLinkMobile = styled.a`
  color: var(--color-text);
  display: inline-block;
  padding: 1.4rem 0;
  width: 100%;
`;
const NavListItemWithMegaMenu = ({ children }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); //
  const toggleMenuVisibility = () => {
    setIsMenuVisible((prev) => !prev);
  };
  return (
    <NavListItem>
      <NavLink href="#">{children} </NavLink>
      <NavLinkWrapper>
        <NavLinkMobile href="#" onClick={toggleMenuVisibility}>
          {children}
        </NavLinkMobile>
        {isMenuVisible ? <BiMinus /> : <BiPlus />}
      </NavLinkWrapper>
      <MegaMenu isVisible={isMenuVisible} />
    </NavListItem>
  );
};

export default NavListItemWithMegaMenu;
