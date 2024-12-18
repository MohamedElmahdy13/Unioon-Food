import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) => (!props.type ? (props.type = "regular") : props.type)}
  ${(props) =>
    props.type !== "modal" &&
    css`
      /* padding: 2.4rem 0; */

      /* Box */
      background-color: var(--color-grey-0);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}

  /* overflow: hidden; */
  font-size: 1.4rem;
  padding: 0rem 0.3rem;
`;

export default Form;
