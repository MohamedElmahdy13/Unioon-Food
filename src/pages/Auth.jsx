import { Outlet } from "react-router-dom";
import { styled, css } from "styled-components";

const StyledAuth = styled.section`
  padding: 9.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledAuthContainer = styled.div`
  padding: 2rem 5rem 8.4rem;
  border: 1px solid #00c7d4;
  border-radius: 5rem 0;
  max-width: 800px;
  width: 100%;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tabletSmall}) {
      padding: 4rem 1.3rem;
    }
  `}
`;

function Auth() {
  return (
    <StyledAuth>
      <StyledAuthContainer>
        <Outlet></Outlet>
      </StyledAuthContainer>
    </StyledAuth>
  );
}

export default Auth;
