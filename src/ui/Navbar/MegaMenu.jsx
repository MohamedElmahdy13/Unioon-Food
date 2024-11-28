import React from "react";
import styled, { css } from "styled-components";

const StyledMegaMenu = styled.div`
  padding-inline-start: 1rem;
  ${({ theme, isVisible }) => css`
    @media (max-width: ${theme.breakpoints.tabletWide}) {
      display: ${isVisible ? "block" : "none"};
    }
  `}
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tabletWide}) {
      position: absolute; /* Relative to the NavListItem */
      width: 80%;
      transition: 400ms ease-in-out;
      top: 100%; /* Align directly below the NavListItem */
      left: 50%; /* Align to the start of the NavListItem */
      background: var(--color-grey-0);
      z-index: 99;
      padding: 1.4rem 2.4rem;
      border-end-start-radius: 0.8rem;
      border-end-end-radius: 0.8rem;
      box-shadow: var(--shadow-lg);

      /* Initially hidden */
      opacity: 0;
      visibility: hidden;
      transform: translateY(15%) translateX(-50%);

      /* Hovering over MegaMenu keeps it visible */
      &:hover {
        opacity: 1;
        visibility: visible;
        transform: translateY(15%) translateX(-50%);
      }
    }
  `}
`;

const MegaMenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const MegaMenuListSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const MegaMenuTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
`;

const MegaMenuList = styled.ul`
  display: flex;
  gap: 0.8rem;
  font-size: 1.3rem;
  flex-direction: column;
`;

const MegaMenu = ({ isVisible }) => {
  return (
    <StyledMegaMenu isVisible={isVisible} className="mega-menu">
      <MegaMenuContainer>
        <MegaMenuListSection>
          <MegaMenuTitle>Categories</MegaMenuTitle>
          <MegaMenuList>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
            <li>Category 4</li>
            <li>Category 5</li>
          </MegaMenuList>
        </MegaMenuListSection>
      </MegaMenuContainer>
    </StyledMegaMenu>
  );
};

export default MegaMenu;
