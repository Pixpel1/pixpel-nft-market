import React from "react";
import { verificationList } from "@nft/pages-components/Profile/datalist";
import EnableButton from "../../Button/EnableButton";

const TwoMethodSecurity = () => {
    return (
        <div className="flex flex-col bg-app-black rounded-lg px-6 py-8 overflow-x-auto">
            <div className="flex gap-4 items-center">
                <div className="bg-app-green rounded-full w-3 h-3 flex-none"></div>
                <div className="text-lg font-semibold">Two method security log-in</div>
            </div>
            <div className="text-base mt-4 font-medium mb-2">Phone number</div>
            <div className="flex justify-between flex-col xs:flex-row gap-4">
                <div className="flex items-center justify-center w-auto text-sm px-8 bg-app-black-button h-10 rounded-md">
                    {verificationList.phone}
                </div>
                <EnableButton className="bg-app-green hover:bg-app-green-hover text-sm font-medium" title="Enable" />
            </div>
            <div className="text-base font-medium mt-10 mb-2">Gmail verification</div>
            <div className="flex justify-between xs:flex-row flex-col gap-4">
                <div className="flex items-center justify-center w-auto text-sm px-8 bg-app-black-button h-10 rounded-md">
                    {verificationList.gmail}
                </div>
                <EnableButton className="bg-app-green hover:bg-app-green-hover text-sm font-medium" title="Enable" />
            </div>
        </div>
    );
};

export default TwoMethodSecurity;
