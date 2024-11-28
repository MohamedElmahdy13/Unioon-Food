import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const StyledSearchInput = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 1.1rem 4rem;
    border: 1px solid var(--color-primary);
    border-radius: 0.8rem;
    font-size: 1.4rem;
    color: var(--color-primary);

    &::placeholder {
      color: var(--color-primary);
      opacity: 0.7; /* Slightly lighter for a placeholder effect */
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 4px var(--color-primary);
    }
  }
`;

const StyledSearchButton = styled(IoSearch)`
  position: absolute;
  inset-inline-end: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-primary);
  font-size: 1.8rem;
  cursor: pointer;
`;

const SearchInput = () => {
  return (
    <StyledSearchInput>
      <StyledSearchButton />
      <input type="search" placeholder="Search" />
    </StyledSearchInput>
  );
};

export default SearchInput;
