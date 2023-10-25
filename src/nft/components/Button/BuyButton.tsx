import React, { useState } from "react";
import BuyModal from "../Wallet/Modal/BuyModal";

interface BuyButton {
    title: string;
}
const BuyButton = (props: BuyButton) => {
    const [showModal, setShowModal] = useState<boolean | undefined>(false);
    return (
        <>
            <div className="bg-app-green rounded-md cursor-pointer hover:bg-app-green-hover w-32">
                <div
                    className="flex items-center gap-2 h-10 px-4 justify-center"
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    {props.title}
                </div>
            </div>
            {<BuyModal showModal={showModal} setShowModal={setShowModal} />}
        </>
    );
};

export default BuyButton;
