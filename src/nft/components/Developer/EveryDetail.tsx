import React from "react";

interface EveryDetail {
    type: string;
    content: string;
}

const EveryDetail = ({ type, content }: EveryDetail) => {
    return (
        <div className="bg-app-black-button flex justify-between rounded-xl py-7 px-5 text-lg">
            <div>{type}</div>
            <div className="text-app-blue">{content}</div>
        </div>
    );
};

export default EveryDetail;
