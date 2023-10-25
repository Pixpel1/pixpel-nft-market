import React from "react";

interface Button {
    title: string;
    fontStyle: string;
    buttonStyle: string;
    onClick: () => void;
    selected: boolean;
    children?: string | React.ReactNode;
    classes: string;
}
const Button = (props: Button) => {
    return (
        <div
            className={
                props.buttonStyle +
                " flex items-center justify-center rounded-md cursor-pointer hover:bg-app-blue" +
                (props.selected ? " bg-app-blue" : " bg-app-black-button")
            }
            onClick={props.onClick}
        >
            <div className={props.fontStyle}>
                {props.title}
                {props.children}
            </div>
        </div>
    );
};

export default Button;
