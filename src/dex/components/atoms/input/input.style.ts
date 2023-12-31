import theme from "@dex/theme/theme";
import styled from "styled-components";

type InputProps = {
    valid: boolean;
};

export const StyledInput = styled.input<InputProps>`
    border: none;
    outline: none;
    font-family: Roboto;
    background: transparent;
    font-size: 25px;
    font-weight: regular;
    color: ${(props) => (props.valid ? theme.colors.White : theme.colors.Red)};
    letter-spacing: 0px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    &[type="number"] {
        -moz-appearance: textfield;
    }
`;
