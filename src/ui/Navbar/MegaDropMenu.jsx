import React, { useState } from "react";
import styled, { css } from "styled-components";
import { BiPlus, BiMinus } from "react-icons/bi";
import { theme } from "../../styles/theme.js";

const Container = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tabletWide}) {
      position: relative;

      &:hover .menu-wrapper {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}
`;

const CollapseButton = styled.button`
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  padding: 1rem 1.5rem;
  background: #fff;
  border: none;
  //box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 100%;
  text-align: start;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${theme.breakpoints.tabletWide}) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  ${({ theme, isVisible }) => css`
    @media (max-width: ${theme.breakpoints.tabletWide}) {
      display: ${isVisible ? "block" : "none"};
    }
  `}
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tabletWide}) {
      position: absolute;
      top: 100%;
      inset-inline-start: 0;
      width: 35rem;
      background: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      visibility: hidden;
      opacity: 0;
      transform: translateY(-20px);
      transition: all 0.3s ease;
      z-index: 10;
      max-height: 64.6rem;
      //overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: #d8d8d8 #fff;

      &:hover {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}
`;

const MenuButton = styled.button`
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  padding: 1rem 1.5rem;
  background: #fff;
  border: none;
  //box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 100%;
  text-align: start;
  display: none;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #f9f9f9;
    color: var(--color-primary, #0d9bbd);
  }

  @media (min-width: ${theme.breakpoints.tabletWide}) {
    display: flex;
  }
`;

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const MenuLink = styled.button`
  background: none;
  border: none;
  width: 100%;
  font-size: 1.4rem;
  color: #333;
  text-align: start;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: var(--color-primary, #0d9bbd);
    background: #f9f9f9;
  }
`;

const SubMenu = styled.div`
  padding-block: 1rem;
  background: #fafafa;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.05);
`;

const SubMenuTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  margin-bottom: 0.8rem;
`;

const SubMenuItem = styled.a`
  display: block;
  font-size: 1.3rem;
  color: #555;
  padding: 0.8rem 1rem;
  text-decoration: none;

  &:hover {
    color: var(--color-primary, #0d9bbd);
  }
`;

const SubSubMenu = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tabletWide}) {
      position: absolute;
      inset-inline-start: 100%;
      top: 0;
      height: 100%;
      width: 30rem;
      background: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      display: none;
      z-index: 10;
    }
  `}
`;

const SubSubMenuItem = styled.a`
  display: block;
  font-size: 1.3rem;
  color: #555;
  padding: 0.8rem 1.5rem;
  text-decoration: none;

  &:hover {
    color: var(--color-primary, #0d9bbd);
  }
`;

const SubMenuItemWithHover = styled.div`
  &:hover ${SubSubMenu} {
    display: block;
  }
`;

const MegaDropMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false); //
  const handleMenuClick = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };
  const toggleMenuVisibility = () => {
    setIsMenuVisible((prev) => !prev);
  };
  return (
    <Container>
      <MenuButton>All Categories</MenuButton>
      <CollapseButton onClick={toggleMenuVisibility}>
        All Categories {isMenuVisible ? <BiMinus /> : <BiPlus />}
      </CollapseButton>
      <MenuWrapper isVisible={isMenuVisible} className="menu-wrapper">
        <MenuList>
          <MenuItem>
            <MenuLink onClick={() => handleMenuClick("fresh-food")}>
              Fresh Food
              {activeMenu === "fresh-food" ? <BiMinus /> : <BiPlus />}
            </MenuLink>
            {activeMenu === "fresh-food" && (
              <SubMenu>
                <SubMenuTitle>Fruits & Vegetables</SubMenuTitle>
                <SubMenuItemWithHover>
                  <SubMenuItem href="#">Fruits</SubMenuItem>
                  <SubSubMenu>
                    <SubSubMenuItem href="#">Apples</SubSubMenuItem>
                    <SubSubMenuItem href="#">Bananas</SubSubMenuItem>
                    <SubSubMenuItem href="#">Berries</SubSubMenuItem>
                  </SubSubMenu>
                </SubMenuItemWithHover>
                <SubMenuItem href="#">Vegetables</SubMenuItem>
                <SubMenuItem href="#">Organic F & V</SubMenuItem>
                <SubMenuItem href="#">Leafy Greens</SubMenuItem>
                <SubMenuItem href="#">Fresh Salad & Chopped</SubMenuItem>
              </SubMenu>
            )}
          </MenuItem>

          <MenuItem>
            <MenuLink onClick={() => handleMenuClick("beverages")}>
              Beverages
              {activeMenu === "beverages" ? <BiMinus /> : <BiPlus />}
            </MenuLink>
          </MenuItem>
        </MenuList>
      </MenuWrapper>
    </Container>
  );
};

export default MegaDropMenu;
