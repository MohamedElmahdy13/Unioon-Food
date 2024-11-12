import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  gap: 1rem 2.4rem;
  padding: 1.1rem 0;
  font-size: 1.4rem;
  line-height: 20px;
  font-weight: 600;
  color: var(--color-text);

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:has(button) {
    ${(props) =>
      props.type === "buttons" &&
      css`
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
      `}
  }

  & input,
  & textarea {
    ${(props) => props.isValid && `border: 1px solid var(--color-red)`}
  }
  /* & input,
  & textarea {
    ${(props) => props.isValid === undefined && `border: 1px solid green`}
  } */

  @media (max-width: 577px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.p`
  font-size: 1.4rem;
  color: var(--color-red-700);
  grid-column: 2 / -1;
  text-align: start;
`;
function FormRow({ label, error, children, type }) {
  return (
    <StyledFormRow type={type} isValid={error}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
