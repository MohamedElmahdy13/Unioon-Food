import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  //background: var(--color-grey-50);
  font-size: 13px;
  padding: 1rem;

  p {
    margin: 0;
    font-weight: 700;
  }
`;
const NavTabs = ({}) => {
  return (
    <StyledNavTabs>
      <Link to="/">Home</Link>
      <span> > </span>
      <p>Cart</p>
    </StyledNavTabs>
  );
};

export default NavTabs;
