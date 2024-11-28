import styled from "styled-components";
import NavListItemWithMegaMenu from "./NavItemMega.jsx";
import MegaDropMenu from "./MegaDropMenu.jsx";

const NavRow = styled.nav`
  display: flex;
  gap: 1.4rem;
  align-items: center;
`;

const NavLink = styled.a`
  color: var(--color-text);
  position: relative;
  display: inline-block;
  padding: 1.4rem 1rem;
  font-weight: 500;
  font-size: 1.4rem;

  &.delivery-method {
    background: #e9fcfe;

    &:hover {
      background: var(--color-primary);
      color: var(--color-grey-0);
    }
  }

  &:not(.delivery-method)::after {
    content: "";
    display: inline-block;
    position: absolute;
    background-color: var(--color-primary);
    width: 100%;
    height: 0.6rem;
    left: 0;
    bottom: 0;
    opacity: 0; /* Initially invisible */
    visibility: hidden; /* Prevent interaction */
    transition: all 400ms ease-in-out;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  width: 100%;
  position: relative;
`;

const NavListItem = styled.li`
  //position: relative;

  &:hover a::after,
  &:hover .mega-menu,
  .mega-menu:hover {
    opacity: 1;
    visibility: visible;
  }
`;

const MainNavbar = () => {
  return (
    <NavRow>
      <NavList>
        <NavListItem>
          <MegaDropMenu />
        </NavListItem>
        <NavListItem>
          <NavLink className={"delivery-method"} href="#">
            Express delivery
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink className={"delivery-method"} href="#">
            Click and collect
          </NavLink>
        </NavListItem>{" "}
        <NavListItem>
          <NavLink href="#">Home</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#">About</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#">Contact</NavLink>
        </NavListItem>{" "}
        <NavListItemWithMegaMenu>Pages</NavListItemWithMegaMenu>
        <NavListItemWithMegaMenu>Services</NavListItemWithMegaMenu>
      </NavList>
    </NavRow>
  );
};

export default MainNavbar;
