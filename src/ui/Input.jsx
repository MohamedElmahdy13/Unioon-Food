import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #a2a9ad;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);

  /* ${(props) => props.isValid && `border: 1px solid var(--color-red-700)`} */
`;

export default Input;
