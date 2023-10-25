import React from "react";
import Union from "@public/assets/images/Union.svg";
import Image from "next/image";

interface AddNFT {
    handleClick: () => void;
}

const AddNFT = ({ handleClick }: AddNFT) => {
    return (
        <div
            className="w-80 h-80 bg-app-black rounded-md flex justify-center items-center cursor-pointer"
            onClick={handleClick}
        >
            <Image src={Union} alt="add"></Image>
        </div>
    );
};

export default AddNFT;
