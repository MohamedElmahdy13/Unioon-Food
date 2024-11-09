import styled from "styled-components";
import CartButtons from "./CartButtons.jsx";

const StyledProductCard = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    
  }

  @media only screen and (min-width: 1025px) {
    height: 380px;
  }

  .product {
    border: 1px solid var(--color-primary);
    border-radius: var(--border-radius-lg);
    padding: 20px;
    transition: all 400ms ease-in-out;

    @media only screen and (min-width: 1025px) {
      position: absolute;
      inset: 0;
      z-index: 10;
      height: 340px;
    }
  }

  h4 {
    font-size: 13px;
    lineheight: 16px;
  }

  p {
    color: var(--color-red);
    font-weight: 400;
    font-size: 15px;
  }

  @media only screen and (min-width: 1025px) {
    .cart__buttons {
      height: 0;
      opacity: 0;
      visibility: hidden;
      transition: all 400ms ease-in-out;
    }

    &:hover .cart__buttons {
      height: auto;
      opacity: 1;
      visibility: visible;
    }

    &:hover .product {
      box-shadow: 0 40px 10px rgba(0, 0, 0, 0.26);
      height: 100%;
    }
  }
`;

const ProductCard = () => {
  return (
    <StyledProductCard>
      <div className="product">
        <img src="../../public/images/4003790703591_rd.webp" alt="" />
        <h4>Product Name hello world form ....</h4>
        <p>AED 30</p>
        <div className="cart__buttons">
          <CartButtons />
        </div>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
