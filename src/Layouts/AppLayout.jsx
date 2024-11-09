import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer.jsx";

const AppLayout = () => {
  return (
    <>
      {/*Navbor */}

      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
