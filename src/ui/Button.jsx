import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    ${({ theme }) => css`
      @media (max-width: ${theme.breakpoints.tabletSmall}) {
        font-size: 1rem;
      }
    `}
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;

    ${({ theme }) => css`
      @media (max-width: ${theme.breakpoints.tabletSmall}) {
        font-size: 1rem;
        padding: 0.8rem 1.2rem;
      }
    `}
  `,
  large: css`
    font-size: 1.6rem;
    padding: 0.9rem 3rem;
    font-weight: 500;
    min-width: 15rem;

    ${({ theme }) => css`
      @media (max-width: ${theme.breakpoints.tabletSmall}) {
        font-size: 1.3rem;
        padding: 0.9rem 1.9rem;
      }
    `}
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-primary);
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-text);

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-grey-0);
    }
  `,
  danger: css`
    color: var(--color-grey-0);
    background-color: var(--color-red);

    &:hover {
      background-color: var(--color-primary);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  transition: all 400ms ease-in-out;
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]};
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
