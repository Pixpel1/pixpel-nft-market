import React from "react";
import ImageDropDownButton from "@nft/components/DropDown/ImageDropDownButton";
import { Button } from "@nft/components";
import BankCard from "./BankCard";
import BankTransfer from "./BankTransfer";
import { useAppContext } from "@nft/contexts/AppContext";
import BNB from "@public/assets/images/UserHome/bnb.png";
import { StaticImageData } from "next/image";

interface currencyList {
    id: number;
    title: string;
    url: string | StaticImageData;
}

const currencyList: currencyList[] = [
    {
        id: 1,
        title: "USD American Dollar",
        url: BNB,
    },
    {
        id: 2,
        title: "USD American Dollar",
        url: BNB,
    },
    {
        id: 3,
        title: "USD American Dollar",
        url: BNB,
    },
];

function DepositFiat() {
    const context = useAppContext();
    const handleClick = (buttonId: number) => {
        context.setDepositState?.(buttonId);
    };
    return (
        <div className="flex flex-col mt-[116px] w-full lg:px-24 md:px-10  px-5 items-center">
            <div className="flex flex-col justify-center w-full gap-10 text-lg md:flex-row">
                <div className="flex flex-col gap-4 xl:w-[520px] w-full">
                    <div>Select Currencey</div>
                    <div className="">
                        <ImageDropDownButton
                            initialContent={currencyList[0]}
                            contentList={currencyList}
                            backgroundColor={" bg-app-black-button "}
                            fontSize={""}
                            textColor={""}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4 xl:w-[520px] w-full">
                    <div>Deposit with:</div>
                    <div className="flex flex-col gap-5 2xs:flex-row">
                        <div className="flex flex-col items-center w-full gap-1 2xs:w-1/2">
                            <Button
                                title={"Bank Card"}
                                selected={context.depositState === 1}
                                onClick={() => {
                                    handleClick(1);
                                }}
                                buttonStyle="w-full h-16 "
                                fontStyle=" text-base font-medium"
                                classes={""}
                            />
                            <div className="text-sm font-normal text-gray-500">2% transfer fee</div>
                        </div>
                        <Button
                            title={"Bank Transfer"}
                            selected={context.depositState === 2}
                            onClick={() => {
                                handleClick(2);
                            }}
                            buttonStyle=" 2xs:w-1/2 w-full h-16 "
                            fontStyle=" text-base font-medium"
                            classes={""}
                        />
                    </div>
                </div>
            </div>
            {context.depositState === 1 ? <BankCard /> : null}
            {context.depositState === 2 ? <BankTransfer /> : null}
        </div>
    );
}

export default DepositFiat;
