// FooterLinks.js
import { useState, useEffect } from "react";
import {
  Col,
  Row,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooterLinks = styled.div`
  .footer-links {
    padding-block-start: 25px;
    border-block: 1px solid var(--color-grey-150);
  }

  .footer-item {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 10px;

      a {
        transition: all 400ms ease-in-out;
        font-size: 14px;
        @media only screen and (max-width: 1024px) {
          font-size: 13px;
        }
      }

      li {
        img {
          width: 80%;

          @media only screen and (max-width: 1024px) {
            width: 50%;
          }
        }
      }
    }

    li:hover a {
      color: var(--color-primary);
    }
  }

  .link-header {
    font-size: 16px;
    margin-bottom: 12px;
    padding-bottom: 25px;
    border-bottom: 1px solid var(--color-grey-150);
    color: var(--color-blue);
    font-weight: 700;
    @media only screen and (max-width: 1024px) {
      font-size: 14px;
    }
  }

  .nested-item {
    .link-header {
      padding-top: 15px;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    li,
    li a {
      font-size: 14px;
    }

    li:hover a {
      color: var(--color-primary);
    }
  }

  .accordion-button {
    color: var(--color-blue);
    font-size: 1rem;
    font-weight: 700;
    padding-inline-start: 0;
    @media only screen and (max-width: 1024px) {
      font-size: 14px;
    }
  }

  .accordion-item:first-of-type,
  .accordion-item {
    border: none;
  }

  .accordion-item:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-150);
  }

  .accordion-body {
    font-size: 14px;
    @media only screen and (max-width: 1024px) {
      font-size: 13px;
    }
  }

  .accordion-button:not(.collapsed) {
    background-color: var(--color-grey-0);
  }
`;
const FooterLinks = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [open, setOpen] = useState("0");

  const toggle = (id) => {
    open === id ? setOpen("") : setOpen(id);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const footerSections = [
    {
      title: "Shopping Categories",
      links: [
        "Smart Deals",
        "Electronics",
        "Fashion",
        "Home & Kitchen",
        "Beauty",
        "Toys",
        "Groceries",
      ],
    },
    {
      title: "Customer Service",
      links: ["Help Center", "Track Order", "Returns", "Shipping Info"],
    },
    { title: "About Us", links: ["Our Story", "Careers", "Press"] },
    { title: "Contact Us", links: ["Support", "Feedback", "Stores"] },
  ];

  return (
    <StyledFooterLinks>
      <div className="footer-links">
        {isMobile ? (
          <>
            <Accordion open={open} toggle={toggle} className="mb-5">
              {footerSections.map((section, idx) => (
                <AccordionItem key={idx}>
                  <AccordionHeader targetId={String(idx)}>
                    {section.title}
                  </AccordionHeader>
                  <AccordionBody accordionId={String(idx)}>
                    <ul>
                      {section.links.map((link, index) => (
                        <li key={index}>
                          <Link to="/">{link}</Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="footer-item footer-item--mobile">
              <h5 className={"link-header"}>Download App</h5>
              <ul>
                <li>
                  <img src="../../public/images/app-store.svg" alt="" />
                </li>
                <li>
                  <img src="../../public/images/app-store.svg" alt="" />
                </li>
              </ul>
            </div>
            <div className="nested-item">
              <h5 className={"link-header"}>Webstore Queries</h5>
              <ul>
                <li>Al Warqa-3, the Tripoli Street</li>
                <li>icon-messagewebstore@unioncoop.ae</li>
                <li>icon-telephone8008889</li>
              </ul>
            </div>
          </>
        ) : (
          <Container fluid>
            <Row className="gx-3">
              {footerSections.map((section, idx) => (
                <Col
                  xl={
                    section.title === "Shopping Categories" ||
                    section.title === "About Us"
                      ? 3
                      : 2
                  }
                  key={idx}
                >
                  <div className="footer-item">
                    <h5 className={"link-header"}>{section.title}</h5>
                    <ul>
                      {section.links.map((link, index) => (
                        <li key={index}>
                          <Link to="/">{link}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}

              <Col xl={2}>
                <div className="footer-item">
                  <h5 className={"link-header"}>Download App</h5>
                  <ul>
                    <li>
                      <img src="../../public/images/app-store.svg" alt="" />
                    </li>
                    <li>
                      <img src="../../public/images/app-store.svg" alt="" />
                    </li>
                  </ul>
                </div>
                <div className="nested-item">
                  <h5 className={"link-header"}>Webstore Queries</h5>
                  <ul>
                    <li>Al Warqa-3, the Tripoli Street</li>
                    <li>icon-messagewebstore@unioncoop.ae</li>
                    <li>icon-telephone8008889</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </StyledFooterLinks>
  );
};

export default FooterLinks;
