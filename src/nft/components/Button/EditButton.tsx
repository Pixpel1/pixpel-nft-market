import React from "react";

interface EditButton {
    title: string;
}

const EditButton = (props: EditButton) => {
    return (
        <div className="bg-app-black rounded-md w-auto h-10 mx-2 py-2 hover:bg-[#37404C] cursor-pointer">
            <div className="gap-2 px-6 justify-center items-center">
                <button>{props.title}</button>
            </div>
        </div>
    );
};
export default EditButton;
