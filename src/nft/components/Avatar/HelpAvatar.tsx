import React from "react";

interface HelpAvatar {
    title: string;
}

const HelpAvatar = (props: HelpAvatar) => {
    return (
        <div className="bg-app-black group hover:bg-app-blue cursor-pointer flex flex-col px-5 pt-5 pb-10 items-center rounded-lg gap-3">
            <div className="bg-app-black-button group-hover:bg-app-blue-hover w-full max-w-70 h-44 rounded-md"></div>
            <div className="text-lg">{props.title}</div>
        </div>
    );
};

export default HelpAvatar;
