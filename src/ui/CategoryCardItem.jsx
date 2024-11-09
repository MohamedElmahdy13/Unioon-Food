import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 8px;
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-primary);
  text-align: center;

  h4 {
    @media only screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const CategoryCardItem = ({ item }) => {
  return (
    <StyledItem>
      <img src="../../public/images/1-fruits-and-veg.webp" alt="" />
      <h4>Fruits</h4>
    </StyledItem>
  );
};

export default CategoryCardItem;
