import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer.jsx";
import styled from "styled-components";
import MainHeader from "../ui/Navbar/MainHeader.jsx";

const StyledMain = styled.main`
  padding-block: 35px;
`;
const AppLayout = () => {
  return (
    <>
      {/*Navbor */}
      <header>
        <MainHeader />
      </header>
      <StyledMain>
        <Outlet></Outlet>
      </StyledMain>
      <Footer />
    </>
  );
};

export default AppLayout;
