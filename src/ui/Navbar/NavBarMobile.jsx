import { useState } from "react";
import {
  Offcanvas,
  OffcanvasBody,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  Row,
  TabContent,
  Col,
} from "reactstrap";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import MenuAccordions from "./MenuAccordions.jsx";

// Styled Components
const StyledBurger = styled.button`
  background: transparent;
  border: none;
  color: var(--color-primary);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledOffcanvas = styled(Offcanvas)`
  width: 85% !important; /* Set the width to 85% of the screen */
  max-width: 85%; /* Prevent exceeding the specified width */
  background-color: var(
    --color-grey-0
  ); /* Optional background for customization */
  border-right: 1px solid var(--color-grey-200); /* Optional border for a clean look */

  @media (min-width: 768px) {
    width: 400px; /* Set a specific width for larger screens if desired */
  }
`;
const StyledOffcanvasBody = styled(OffcanvasBody)`
  padding: 0;
`;

const StyledNav = styled(Nav)`
  display: flex;
  padding: 0;
`;

const StyledNavItem = styled(NavItem)`
  flex: 1 1 50%; /* Each item takes 50% of the width */
  text-align: center;
  padding: 0 !important;
`;

const StyledNavLink = styled(NavLink)`
  color: var(--color-grey-100); /* Grey text */
  padding: 1rem 1.5rem;
  cursor: pointer;
  border: none !important;
  color: var(--color-grey-100);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;

  .profile-icon {
    font-size: 2rem;
    color: inherit;
  }

  &.active {
    color: var(--color-grey-0) !important; /* Cyan text */
    background-color: var(--color-primary) !important; /* Grey background */
  }

  &:hover {
    color: var(--color-primary);
  }
`;

const StyledTabPane = styled(TabPane)`
  padding: 1rem;

  h4 {
    color: var(--color-secondary);
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    flex-basis: 100%;
  }

  a {
    padding: 1rem 0;
    display: block;
    border-bottom: 1px solid var(--color-grey-100);
    transition: all 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <StyledBurger onClick={toggleOffcanvas}>
        <AiOutlineMenu />
      </StyledBurger>
      <StyledOffcanvas scrollable isOpen={isOpen} toggle={toggleOffcanvas}>
        <StyledOffcanvasBody>
          <StyledNav tabs>
            <StyledNavItem>
              <StyledNavLink
                className={activeTab === "1" ? "active" : ""}
                onClick={() => toggleTab("1")}
              >
                <AiOutlineMenu className="profile-icon" />
                Menu
              </StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLink
                className={activeTab === "2" ? "active" : ""}
                onClick={() => toggleTab("2")}
              >
                <BiSolidUserCircle className={"profile-icon"} />
                Login & Register
              </StyledNavLink>
            </StyledNavItem>
          </StyledNav>
          <TabContent activeTab={activeTab}>
            <StyledTabPane tabId="1">
              <Row>
                <Col sm="12">
                  <MenuAccordions />
                </Col>
              </Row>
            </StyledTabPane>
            <StyledTabPane tabId="2">
              <Row>
                <Col sm="12">
                  <StyledList>
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">My Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Sign in</a>
                    </li>
                  </StyledList>
                </Col>
              </Row>
            </StyledTabPane>
          </TabContent>
        </StyledOffcanvasBody>
      </StyledOffcanvas>
    </div>
  );
};

export default NavBarMobile;
