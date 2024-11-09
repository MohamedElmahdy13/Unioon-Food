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

    @media only screen and (max-width: 768px) {
      padding: 4px 14px;
      font-size: 12px;
    }
  }

  button:first-child {
    border-radius: 30px 0 0 30px;
  }

  button:last-child {
    border-radius: 0 23px 23px 0;
  }

  p {
    background: var(--color-grey-50);
    padding: 8px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 40px;
    @media only screen and (max-width: 768px) {
      padding: 4px 12px;
      font-size: 12px;
    }
  }
`;
const CartButtons = () => {
  return (
    <StyledCartButtons>
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
