import React from "react";
import { StyledButton } from "./Button.style";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "connect" | "max" | "rest";
    bg?: string;
    onClick: () => void;
}

const Button = ({ children, variant, disabled, onClick, bg, ...rest }: Props): JSX.Element => {
    return (
        <StyledButton variant={variant} bg={bg} disabled={disabled} onClick={onClick} {...rest}>
            {children}
        </StyledButton>
    );
};

export default Button;
