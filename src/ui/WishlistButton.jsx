import styled from "styled-components";
import { BiSolidHeart } from "react-icons/bi";

const StyledButton = styled.button`
  border: 2px solid #000;
  border-radius: 10px;
  padding: 10px 27px;
  font-weight: 400;
  font-size: 1.1rem;
  text-transform: uppercase;
  color: #000;
  background-color: #fff;
  line-height: 20px;
  transition: all 400ms ease-in-out;
  display: flex;
  align-items: center;
  gap: 13px;

  @media screen and (max-width: 786px) {
    padding: 8px 16px;
    font-size: 0.8rem;
  }

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    border-color: var(--color-primary);
  }
`;

function WishlistButton() {
  return (
    <StyledButton>
      <span>
        <BiSolidHeart />
      </span>
      <span>add to wishlist</span>
    </StyledButton>
  );
}

export default WishlistButton;
