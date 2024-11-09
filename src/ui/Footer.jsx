import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FooterSection from "./FooterSection.jsx";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 30px;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-blue);
        padding: 30px 15px;
        @media only screen and (max-width: 1024px) {
            flex-direction: column;
            gap: 20px;
            }
        }

    .header-left {
        display: flex;
        align-items: center;
        flex-basis: 50%;
        @media only screen and (max-width: 1024px) {
            width: 100%;
            justify-content: center;
            }

        input {
            padding: 10px;
            border-start-start-radius: 5px;
            border-end-start-radius: 5px;
            border-color: transparent;
            display: inline-block;
            width: 80%;
            @media only screen and (max-width: 786px) {
                font-size: 13px;
                }
            }

        input:focus-visible {
            outline: none;
            }

        button {
            border: 2px solid var(--color-primary);
            background: var(--color-primary);
            color: var(--color-grey-0);
            height: 100%;
            margin-inline-start: -2px;
            padding: 10px 14px;
            border-start-end-radius: 5px;
            border-end-end-radius: 5px;

            @media only screen and (max-width: 786px) {
                font-size: 13px;
                }
            }
        }

    .header-right {
        flex-basis: 50%;

        ul {
            display: flex;
            gap: 24px;
            justify-content: flex-end;
            @media only screen and (max-width: 786px) {
                font-size: 13px;
                }

            li:not(:first-child) {
                color: var(--color-grey-0);
                }

            li:first-child {
                color: var(--color-primary-light);
                }
            }
        }

    .footer-content {
        padding: 30px 15px;
        }

    .description {
        display: flex;
        flex-direction: column;
        gap: 25px;
        font-size: 14px;
        padding-bottom: 35px;
        }


    }

.footer-apps img {
    width: 80%;
    }

.copyright {
    padding-top: 30px;
    font-size: 14px;
    }
`;

const Footer = () => {
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

  const renderFooterLinks = () => {
    const footerCategories = [
      "Smart Deals",
      "Electronics",
      "Fashion",
      "Home & Kitchen",
      "Beauty",
      "Toys",
      "Groceries",
    ];

    return footerCategories.map((category, index) => (
      <li key={index}>
        <Link to="/">{category}</Link>
      </li>
    ));
  };

  return (
    <StyledFooter>
      <div className="header">
        <div className="header-left">
          <input
            type="text"
            name="email"
            placeholder={"Enter Your Email Address"}
          />
          <button>Subscribe</button>
        </div>
        <div className="header-right">
          <ul>
            <li>For Other Queries</li>
            <li>
              <a href="mailto:someone@example.com">info@unioncoop.ae</a>
            </li>
            <li>
              <a href="tel:123-456-7890">880888</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-content">
        <div className="description">
          <p>
            On May 24, 1982, the Ministerial Resolution No. 31/2 by the Ministry
            of Labour and Social Affairs laid the foundation of Union Coop,
            leading to the creation of what came to be the largest consumer
            cooperative in the UAE. Union Coop’s main object is to transform the
            community through excellence, with dedication to improving the
            economic and social well-being of its members and the local
            community it serves. Upholding global retail standards, Union Coop
            strives to set a benchmark in the industry.
          </p>{" "}
          <p>
            With operations spread through 27 branches and seven malls (Al Warqa
            City Mall, Etihad Mall, Al Barsha Mall, Al Barsha South Mall, Nad Al
            Hamar Center, Al Nahda and Motor City). Union Coop has also launched
            two grocery chains: Mini Coop and Coop, a new concept, thereby
            making it the first consumer cooperative to include a smart shopping
            concept in many of its branches in the MENA region.
          </p>{" "}
          <p>
            Union Coop actively participates in price stabilization efforts by
            running promotional campaigns, providing genuine value offers, and
            organizing annual prize giveaways worth tens of millions. Its
            outlets boast a diverse product selection spanning food,
            electronics, hardware, and household appliances.
          </p>
          {/* Additional paragraphs omitted for brevity */}
        </div>

        <FooterSection />

        <div className="copyright">
          © 2024 UNION COOP. All Rights Reserved.
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
