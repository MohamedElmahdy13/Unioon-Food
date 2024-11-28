import styled, { css } from "styled-components";
import SearchInput from "../SearchInput.jsx";
import MainNavbar from "./MainNavbar.jsx";
import DropDowns from "../DropDowns.jsx";
import Cart from "../../features/Cart/Cart.jsx";
import Language from "../Language.jsx";
import useWindowWidth from "../../hooks/useWidthScreen.js";
import { AiOutlineMenu } from "react-icons/ai";
import NavBarMobile from "./NavBarMobile.jsx";

const StyledMainHeader = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 2.4rem;
  background-color: var(--color-grey-0);
  border-top: 0.6rem solid var(--color-primary);
  position: relative;
`;

const Logo = styled.img`
  width: 75px;
  height: 70px;
  object-fit: cover;
  order: 2;
`;
const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.4rem;
  padding: 1.4rem 3.4rem;
  width: 100%; /* Ensure FirstRow takes full width */
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tabletWide}) {
      box-shadow: var(--shadow-lg);
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: flex-start;

      .cart {
        order: 3;
        flex-basis: auto;
        flex-grow: 1;
        text-align: end;
      }
    }
  `}
`;

const SearchItem = styled.div`
  flex-basis: 60%;
  max-width: 60%; /* Optional: Prevent overflowing */
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tabletWide}) {
      flex-basis: 100%;
      max-width: 100%; /* Optional: Prevent overflowing */
      order: 4;
    }
  `}
`;

const SecondRow = styled.div`
  padding: 1.4rem 3.4rem;
  padding-bottom: 0;
  box-shadow: var(--shadow-lg);
  position: relative;
`;

const MainHeader = () => {
  const width = useWindowWidth();

  return (
    <StyledMainHeader className={"main-header"}>
      <FirstRow>
        {width < 1024 && <NavBarMobile />}
        <a href="/public">
          <Logo src="../../public/images/logo.svg" alt="logo" />
        </a>
        <SearchItem>
          <SearchInput />
        </SearchItem>

        {width > 1024 && (
          <>
            <DropDowns />
            <Language />
          </>
        )}
        <div className="cart">
          <Cart />
        </div>
      </FirstRow>
      {width > 1024 && (
        <SecondRow>
          <MainNavbar />
        </SecondRow>
      )}
    </StyledMainHeader>
  );
};

export default MainHeader;
