import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer.jsx";
import styled from "styled-components";

const StyledMain = styled.main`
  padding-block: 35px;
`;
const AppLayout = () => {
  return (
    <>
      {/*Navbor */}

      <StyledMain>
        <Outlet></Outlet>
      </StyledMain>
      <Footer />
    </>
  );
};

export default AppLayout;
