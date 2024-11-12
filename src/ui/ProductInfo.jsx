import styled from "styled-components";
import { StyledTitle } from "./headers";
import CartButtons from "./CartButtons";
import WishlistButton from "./WishlistButton";

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 13px;

  .tag {
    display: inline-block;
    margin-right: 15px;
    text-transform: uppercase;
    vertical-align: top;
    color: #57ad64;
    font-size: 13px;
    line-height: 19px;
    background: #e0edde;
    padding: 4px 14px 3px;
    border-radius: 13px;
    text-transform: capitalize;
    font-weight: 600;
    width: fit-content;
  }

  .see-review {
    border: none;
    background-color: transparent;
    color: var(--color-blue);
    text-align: start;
  }

  .price-seperator {
    padding-block: 1rem;
    border-block: 1px solid var(--color-grey-50);
  }
  .price {
    color: red;
    font-size: 1.4rem;
    font-weight: 700;
  }
  .product-footer {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

function ProductInfo({ info }) {
  return (
    <StyledProduct>
      <StyledTitle>Al Ain Farms Full Cream Fresh Milk - 2 L</StyledTitle>
      <div className="tag">in Stock</div>
      <button className="see-review">
        Be the first to review this product
      </button>

      <p className="price-seperator">All prices are including VAT</p>

      <div className="price">
        <p>AED 30</p>
        <p className="vat-info"></p>
      </div>

      <div className="product-footer">
        <CartButtons size="lg" />
        <WishlistButton />
      </div>
    </StyledProduct>
  );
}

export default ProductInfo;
