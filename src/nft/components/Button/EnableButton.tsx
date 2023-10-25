import React from "react";

interface EnableButton {
    title: string;
    className?: string;
    type?: "submit" | "button";
}

const EnableButton = (props: EnableButton) => {
    return (
        <button
            type={props.type || "button"}
            className={
                "flex px-6 justify-center items-center rounded-md py-2 cursor-pointer " +
                (props.className ? `${props.className}` : "bg-app-blue hover:bg-[#50D0FB]")
            }
        >
            {props.title}
        </button>
    );
};
export default EnableButton;
