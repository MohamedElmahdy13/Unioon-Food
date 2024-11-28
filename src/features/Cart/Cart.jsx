import { useState } from "react";
import { BsCart4 } from "react-icons/bs";

import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import styled from "styled-components";

const StyledCart = styled.div`
  button {
    border: none;
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  .icon {
    font-size: 3rem;
    transition: all 400ms ease-in-out;

    &:hover {
      color: var(--color-primary);
    }
  }
`;
const Cart = () => {
  // State to control the visibility of the Offcanvas
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the Offcanvas
  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledCart>
      {/* Button to open the Offcanvas */}
      <button onClick={toggleOffcanvas}>
        <BsCart4 className="icon" />
      </button>

      {/* Offcanvas component */}
      <Offcanvas isOpen={isOpen} toggle={toggleOffcanvas} direction="end">
        <OffcanvasHeader toggle={toggleOffcanvas}>
          Offcanvas Header
        </OffcanvasHeader>
        <OffcanvasBody>
          <strong>This is the Offcanvas body.</strong>
        </OffcanvasBody>
      </Offcanvas>
    </StyledCart>
  );
};

export default Cart;
