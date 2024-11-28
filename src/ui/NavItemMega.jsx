import styled from "styled-components";
import MegaMenu from "./MegaMenu"; // Import MegaMenu component

const NavListItem = styled.li`
  &:hover .mega-menu {
    /* Show MegaMenu when NavListItem is hovered */
    opacity: 1;
    visibility: visible;
    transform: translateY(0%) translateX(-50%);
  }
`;

const NavLink = styled.a`
  color: var(--color-text);
  display: inline-block;
  padding: 1.4rem 0;
  position: relative;

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
`;

const NavListItemWithMegaMenu = ({ children }) => {
  return (
    <NavListItem>
      <NavLink href="#">{children}</NavLink>
      <MegaMenu /> {/* Include MegaMenu as a child of NavListItem */}
    </NavListItem>
  );
};

export default NavListItemWithMegaMenu;
