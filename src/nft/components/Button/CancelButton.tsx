import React from "react";
interface CancelButton {
    title: string;
}
const CancelButton = (props: CancelButton) => {
    return (
        <div className="bg-app-red hover:bg-[#FE8091] rounded-md cursor-pointer active:bg-violet-700">
            <p className="flex items-center h-max w-max font-medium text-base py-1 px-6 justify-center">
                {props.title}
            </p>
        </div>
    );
};
export default CancelButton;
