import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const StyledSearchInput = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 0.5rem 2.5rem 0.5rem 1rem; /* Adjust for search icon spacing */
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    font-size: 1rem;
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
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-primary);
  font-size: 1.2rem;
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
