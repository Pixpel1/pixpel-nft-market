import styled from "styled-components";

export const StyledButton = styled.button<{
    variant: "primary" | "secondary" | "connect" | "max" | "rest";
    bg?: string;
}>`
    width: ${({ variant }) => (variant === "connect" ? "94px" : variant === "max" ? "38px" : "100%")};
    height: ${({ variant }) =>
        variant === "connect" ? "26px" : variant === "max" ? "24px" : variant !== "rest" && "40px"};
    min-height: ${({ variant }) =>
        variant === "connect" ? "26px" : variant === "max" ? "24px" : variant !== "rest" && "40px"};
    border: ${({ variant }) =>
        variant === "primary" || variant === "connect" || variant === "max" || variant === "rest"
            ? "none"
            : "1px solid #000"};
    border-radius: ${({ variant }) => (variant === "max" ? "20px" : "6px")};
    background: ${({ variant, bg }) =>
        bg
            ? bg
            : variant === "primary"
            ? `#0095C8`
            : variant === "connect" || variant === "rest"
            ? `#0095C8`
            : "transparent"};
    color: ${({ variant }) => (variant === "max" ? "grey" : `white`)};
    cursor: pointer;
    transition: all 0.2s;
    overflow: hidden;

    ${({ variant }) =>
        variant === "connect" &&
        `
    font-size: 10px; color: white;
    font-weight: 300;
    box-shadow: 0px 3px 6px #0000001c;
    font-family: Roboto;
    `}

    ${({ variant }) =>
        variant === "max" &&
        `
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
    `}

  ${({ disabled }) =>
        disabled &&
        `
    color: #ffffff80;
    background-color: #0095C880;
    cursor: not-allowed;
  `}
`;
