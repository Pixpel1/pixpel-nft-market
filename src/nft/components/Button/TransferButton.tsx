import React, { useState } from "react";
import TransferModal from "../Wallet/Modal/TransferModal";

const Transfer = () => {
    const [showModal, setShowModal] = useState<boolean | undefined>(false);
    return (
        <>
            <div
                className="flex justify-center items-center py-3 bg-app-blue hover:bg-[#50D0FB] rounded-md hover:cursor-pointer w-full"
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Transfer
            </div>
            {<TransferModal showModal={showModal} setShowModal={setShowModal} />}
        </>
    );
};

export default Transfer;
