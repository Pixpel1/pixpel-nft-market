import React from "react";

interface NFTDetailType {
    title: string;
    content: string;
    color: string;
}

const NFTDetail = ({ title, content, color }: NFTDetailType) => {
    return (
        <div className="flex flex-col gap-3 w-1/3">
            <div>{title}</div>
            <div className={"bg-app-black flex justify-center items-center text-lg py-6 rounded-lg " + color}>
                {content}
            </div>
        </div>
    );
};

export default NFTDetail;
