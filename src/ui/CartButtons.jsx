import styled from "styled-components";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const StyledCartButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    background: var(--color-red);
    color: var(--color-grey-0);
    padding: 8px 15px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    /* Apply smaller padding and font size on smaller screens */
    @media only screen and (max-width: 768px) {
      padding: 4px 14px;
      font-size: 12px;
    }
  }

  button:first-child {
    //border-radius: 30px 0 0 30px;
    border-start-start-radius: 3rem;
    border-end-start-radius: 3rem;
  }

  button:last-child {
    border-start-end-radius: 3rem;
    border-end-end-radius: 3rem;
  }

  p {
    background: var(--color-grey-50);
    padding: 8px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 40px;
    font-size: 14px;

    /* Apply larger padding if size is lg */
    ${({ size }) =>
      size === "lg" &&
      `
        padding: 14px 50px;
        font-size: 16px;
      `} /* Override padding and font size for smaller screens */ @media only screen and (
        max-width: 768px) {
      padding: ${({ size }) => (size === "lg" ? "13px 24px" : "4px 12px")};
      font-size: 12px;
    }
  }
`;

const CartButtons = ({ size }) => {
  return (
    <StyledCartButtons size={size}>
      <button>
        <BsPlus />
      </button>
      <p>0</p>
      <button>
        <BiMinus />
      </button>
    </StyledCartButtons>
  );
};

export default CartButtons;
