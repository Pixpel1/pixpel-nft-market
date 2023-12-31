import React, { useState } from "react";
import Button from "@nft/components/Button/Button";
import CryptoCard from "./CryptoCard";
import FlatCard from "./FlatCard";

interface buttonList {
    id: number;
    title: string;
    buttonStyle: string;
}
const buttonList: buttonList[] = [
    {
        id: 1,
        title: "CRYPTO",
        buttonStyle: " 1xs:h-14 w-32 1xs:px-0 px-3 h-10",
    },
    {
        id: 2,
        title: "FLAT",
        buttonStyle: " 1xs:h-14 w-24 1xs:px-0 px-3 h-10",
    },
];

const Withdraw = () => {
    const [withdrawState, setWithdrawState] = useState<string | undefined>("CRYPTO");
    const [selected, setSelected] = useState<number | undefined>(1);

    const handleClick = (button: buttonList) => {
        setWithdrawState(button.title);
        setSelected(button.id);
    };
    return (
        <>
            <div
                className="flex pt-11 flex-col justify-center items-center py-5 md:px-0"
                style={{ fontFamily: "Poppins" }}
            >
                <div className="flex mb-5">
                    <div className="text-3xl font-semibold my-3 1xs:text-5xl 2xs:text-4xl">Withdraw Portal</div>
                </div>
                <div className="flex flex-row justify-center w-full gap-5 px-40 mb-12">
                    {buttonList.map((button, idx) => {
                        return (
                            <Button
                                key={idx}
                                title={button.title}
                                selected={selected === button.id}
                                buttonStyle={button.buttonStyle}
                                onClick={() => {
                                    handleClick(button);
                                }}
                                fontStyle={""}
                                classes={""}
                            />
                        );
                    })}
                </div>
                {withdrawState === "CRYPTO" ? <CryptoCard /> : null}
                {withdrawState === "FLAT" ? <FlatCard /> : null}
            </div>
        </>
    );
};
export default Withdraw;
