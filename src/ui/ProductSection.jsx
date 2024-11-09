import styled from "styled-components";
import ProductList from "./ProductList.jsx";

const StyledProductSection = styled.section`
  padding-block: 40px;
  padding-inline: 15px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const StyledProductSectionTitle = styled.h2`
  font-size: 20px;
  display: flex;
  gap: 57px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }

  span:last-child {
    color: var(--color-primary);
  }
`;
const ProductSection = () => {
  return (
    <StyledProductSection>
      <StyledProductSectionTitle>
        <span>Top Products</span>
        <span>Most Popular Products</span>
      </StyledProductSectionTitle>
      <ProductList />
    </StyledProductSection>
  );
};

export default ProductSection;
