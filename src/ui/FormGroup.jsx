import styled from "styled-components";

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  align-items: center;

  & div:first-child {
    padding: 1.5rem 0;
  }
  & div:last-child {
    padding: 1.5rem 0;
  }

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`;
