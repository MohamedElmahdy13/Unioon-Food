// AccordionComponent.js
import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Row,
  Col,
} from "reactstrap";
import styled from "styled-components";
import Form from "./Form";
import Button from "./Button";
import FormRow from "./FormRow";
import Input from "./Input";
import { Textarea } from "./Textarea";
import StarRating from "./StarRating";

// Define a styled component with customizable styles based on props

const StyledAccordion = styled(Accordion)`
  border: none;

  .accordion-item {
    border: none;
  }
`;

const StyledAccordionHeader = styled(AccordionHeader)`
  background-color: ${({ variant }) =>
    variant === "primary" ? "var(--color-primary)" : "var(--color-grey-0)"};
  padding: 1rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
  &.header-active {
    background-color: var(--color-grey-0);
  }

  & .accordion-button {
    background-color: var(--color-grey-0);
    font-size: 1.4rem;
    border-bottom: 1px solid var(--color-primary);

    &.collapsed {
      background-color: ${({ variant }) =>
        variant === "primary" ? "var(--color-primary)" : "var(--color-grey-0)"};

      color: ${({ variant }) =>
        variant === "primary" ? "white" : "var(--color-dark)"};
    }
    &:focus {
      box-shadow: none;
    }
    &:not(.collapsed) {
      background-color: transparent;
    }
  }
`;

const StyledAccordionBody = styled(AccordionBody)`
  padding: 1rem;
  background-color: ${({ variant }) =>
    variant === "primary" ? "var(--color-light)" : "white"};
  color: var(--color-dark);
  font-size: 1.2rem;
  border: none;
  .specs {
    display: flex;
    align-items: center;
    li span:first-child {
      min-width: 9rem;
      display: inline-block;
      font-weight: 700;
      text-transform: capitalize;
    }
  }
`;

const AccordionComponent = ({ variant = "primary" }) => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    setActiveTab((prevTab) => (prevTab === tab ? null : tab));
  };

  const handleRatingChange = (newRating) => {
    console.log("Rating changed to:", newRating);
  };

  return (
    <StyledAccordion open={activeTab} toggle={toggleTab}>
      <AccordionItem>
        <StyledAccordionHeader
          targetId="1"
          variant={variant}
          className={`${activeTab === "1" ? "header-active" : null}`}
        >
          Product Specification
        </StyledAccordionHeader>
        <StyledAccordionBody accordionId="1" variant={variant}>
          <Row>
            <Col sm="12">
              <p className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                numquam iste quaerat in consequuntur eveniet suscipit quibusdam,
                nemo, tenetur sit, eos minima nihil optio? Odit molestias quidem
                aperiam numquam aut.
              </p>
            </Col>
          </Row>
        </StyledAccordionBody>
      </AccordionItem>
      <AccordionItem>
        <StyledAccordionHeader
          targetId="2"
          variant={variant}
          className={`${activeTab === "2" ? "header-active" : null}`}
        >
          More Information
        </StyledAccordionHeader>
        <StyledAccordionBody accordionId="2" variant={variant}>
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
        </StyledAccordionBody>
      </AccordionItem>
      <AccordionItem>
        <StyledAccordionHeader
          targetId="3"
          variant={variant}
          className={`${activeTab === "3" ? "header-active" : null}`}
        >
          Rating And Reviews
        </StyledAccordionHeader>
        <StyledAccordionBody accordionId="3" variant={variant}>
          <Row>
            <Col sm="12">
              <div className="content">
                <Form>
                  <Row className="g-3">
                    <Col xl={12}>
                      <p>
                        You’re reviewing:
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
        </StyledAccordionBody>
      </AccordionItem>
    </StyledAccordion>
  );
};

export default AccordionComponent;
