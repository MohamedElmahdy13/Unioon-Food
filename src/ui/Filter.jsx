import styled from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;

  label {
    transition: all 400ms ease-in-out;
    font-size: 13px;
    cursor: pointer;
  }

  &:hover label {
    color: var(--color-primary);
  }
`;
const Filter = ({ item }) => {
  return (
    <StyledFilter>
      <input type="checkbox" />
      <label>{item}</label>
    </StyledFilter>
  );
};

export default Filter;
