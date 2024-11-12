// import { useState, useEffect } from "react";
// import {
//   Nav,
//   NavItem,
//   NavLink,
//   Row,
//   TabContent,
//   TabPane,
//   Col,
//   Accordion,
//   AccordionBody,
//   AccordionHeader,
//   AccordionItem,
// } from "reactstrap";
// import styled from "styled-components";
// import Form from "./Form";
// import FormRow from "./FormRow";
// import Input from "./Input";
// import { Textarea } from "./Textarea";
// import StarRating from "./StarRating";
// import Button from "./Button";

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState("1");
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleTab = (tab) => {
//     if (activeTab !== tab) {
//       setActiveTab(tab);
//     }
//   };

//   if (isMobile) {
//     return (
//       <StyledNavTabs>
//         <Accordion open={activeTab} toggle={toggleTab}>
//           <AccordionItem>
//             <AccordionHeader targetId="1">
//               Product Specification
//             </AccordionHeader>
//             <AccordionBody accordionId="1">
//               <p className="content">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
//                 numquam iste quaerat in consequuntur eveniet suscipit quibusdam,
//                 nemo, tenetur sit, eos minima nihil optio? Odit molestias quidem
//                 aperiam numquam aut.
//               </p>
//             </AccordionBody>
//           </AccordionItem>
//           <AccordionItem>
//             <AccordionHeader targetId="2">More Information</AccordionHeader>
//             <AccordionBody accordionId="2">
//               <div className="content">
//                 <ul className="specs">
//                   <li>
//                     <span>title</span>
//                     <span>value</span>
//                   </li>
//                 </ul>
//               </div>
//             </AccordionBody>
//           </AccordionItem>
//           <AccordionItem>
//             <AccordionHeader targetId="3">Rating And Reviews</AccordionHeader>
//             <AccordionBody accordionId="3">
//               <div className="content">
//                 <Form>
//                   <Row className="g-3">
//                     <Col xl={12}>
//                       <p>
//                         You re reviewing:
//                         <strong> Alsafi Mozzarella Cheese - 900g</strong>
//                       </p>
//                     </Col>
//                     <Col xl={12}>
//                       <StarRating
//                         totalStars={5}
//                         onRatingChange={handleRatingChange}
//                       />
//                     </Col>
//                     <Col xl={6}>
//                       <FormRow type={"text"} label={"Nickname"}>
//                         <Input />
//                       </FormRow>
//                     </Col>
//                     <Col xl={6}>
//                       <FormRow type={"text"} label={"Summary"}>
//                         <Input />
//                       </FormRow>
//                     </Col>
//                     <Col xl={12}>
//                       <FormRow label={"Review"}>
//                         <Textarea />
//                       </FormRow>
//                     </Col>
//                     <Col sm={12} className="pt-3">
//                       <Button variation={"secondary"}>SUBMIT REVIEW</Button>
//                     </Col>
//                   </Row>
//                 </Form>
//               </div>
//             </AccordionBody>
//           </AccordionItem>
//         </Accordion>
//       </StyledNavTabs>
//     );
//   }

// export default Tabs;
// TabsComponent.js
import { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";
import styled from "styled-components";
import Form from "./Form";
import StarRating from "./StarRating";
import FormRow from "./FormRow";
import Input from "./Input";
import { Textarea } from "./Textarea";
import Button from "./Button";

const StyledNavTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 1rem;
  font-size: 14px;

  .navs-container {
    width: 100%;
  }

  .nav-tabs {
    border-color: var(--color-primary);
  }

  .nav-link {
    cursor: pointer;
    background-color: var(--color-primary);
    color: white;
    padding: 1rem 1.4rem;
    border-radius: 5px 5px 0 0;
    margin-right: 0.2rem;
    transition:
      background-color 0.3s,
      color 0.3s;

    &.active {
      background-color: white;
      color: var(--color-primary);
      border: 1px solid var(--color-primary);
      border-bottom: 2px solid white;
      position: relative;
      top: 2px;
    }
  }

  .content {
    padding: 2rem 1.4rem;
    font-weight: 400;

    .specs {
      li {
        display: flex;
        align-items: center;
        gap: 10px;

        span:first-child {
          font-weight: 700;
          min-width: 100px;
          display: inline-block;
          text-transform: capitalize;
        }
      }
    }
  }
`;

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    setActiveTab((prevTab) => (prevTab === tab ? null : tab));
  };

  const handleRatingChange = (newRating) => {
    console.log("Rating changed to:", newRating);
  };

  return (
    <StyledNavTabs>
      <div className="navs-container">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab === "1" ? "active" : ""}
              onClick={() => toggleTab("1")}
            >
              Product Specification
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "2" ? "active" : ""}
              onClick={() => toggleTab("2")}
            >
              More Information
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "3" ? "active" : ""}
              onClick={() => toggleTab("3")}
            >
              Rating And Reviews
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <p className="content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                  numquam iste quaerat in consequuntur eveniet suscipit
                  quibusdam, nemo, tenetur sit, eos minima nihil optio? Odit
                  molestias quidem aperiam numquam aut.
                </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <div className="content">
                  <ul className="specs">
                    <li>
                      <span>title</span>
                      <span>value</span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <div className="content">
                  <Form>
                    <Row className="g-3">
                      <Col xl={12}>
                        <p>
                          You re reviewing:
                          <strong> Alsafi Mozzarella Cheese - 900g</strong>
                        </p>
                      </Col>
                      <Col xl={12}>
                        <StarRating
                          totalStars={5}
                          onRatingChange={handleRatingChange}
                        />
                      </Col>
                      <Col xl={6}>
                        <FormRow type={"text"} label={"Nickname"}>
                          <Input />
                        </FormRow>
                      </Col>
                      <Col xl={6}>
                        <FormRow type={"text"} label={"Summary"}>
                          <Input />
                        </FormRow>
                      </Col>
                      <Col xl={12}>
                        <FormRow label={"Review"}>
                          <Textarea />
                        </FormRow>
                      </Col>
                      <Col sm={12} className="py-2">
                        <Button variation={"secondary"}>SUBMIT REVIEW</Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </StyledNavTabs>
  );
};

export default TabsComponent;
