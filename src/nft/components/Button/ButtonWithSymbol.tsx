import React from "react";

interface ButtonWithSymbol {
    title: string;
    fontStyle: string;
    buttonStyle: string;
    selected: boolean;
    onClick: () => void;
}

const ButtonWithSymbol = (props: ButtonWithSymbol) => {
    return (
        <div
            className={
                props.buttonStyle +
                " flex flex-row items-center justify-start gap-5 rounded-md cursor-pointer hover:bg-app-blue" +
                (props.selected ? " bg-app-blue" : " bg-app-black-button")
            }
            onClick={props.onClick}
        >
            <div className={"h-5 w-5 " + (props.selected ? "bg-white/20 rounded-full" : "bg-app-black-select")}></div>
            <div className={props.fontStyle}>{props.title}</div>
        </div>
    );
};

export default ButtonWithSymbol;
