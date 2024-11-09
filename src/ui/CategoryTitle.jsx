import styled from "styled-components";

const StyledTitle = styled("div")`
  display: flex;
  gap: 14px;
  height: 150px;
  justify-content: space-between;
  align-items: center;
  background: var(--color-primary-light);
  color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  padding: 20px 30px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    height: 100px;
  }

  h3 {
    font-size: 22px;
    flex-grow: 1;
    text-align: center;

    @media only screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const StyledImageBox = styled("div")`
  width: 235px;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 100px;
  }

  &:before {
    content: "";
    position: absolute;
    background: var(--color-primary-lighter);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 200px;
    height: 200px;

    @media only screen and (max-width: 768px) {
      height: 100px;
      width: 100px;
    }
  }
`;

const CategoryTitle = ({ img, title }) => {
  return (
    <StyledTitle>
      <StyledImageBox>
        <img src="../../public/images/fresh-food_2.webp" alt="fruits" />
      </StyledImageBox>
      <h3>Fresh Food</h3>
    </StyledTitle>
  );
};

export default CategoryTitle;
