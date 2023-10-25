import React from "react";
import Arrow from "@public/assets/images/arrow.svg";
import ArrowW from "@public/assets/images/arrowWhite.svg";
import Image from "next/image";

const Logout = () => {
    return (
        <div className="flex bg-app-black-button justify-center rounded-md cursor-pointer h-max gap-3 hover:bg-app-red">
            <div className="group uppercase flex  text-app-red font-medium text-lg  hover:text-[#FFFFFF] px-8 py-2.5 ">
                Log Out <Image src={Arrow} alt="arrow" className="ml-[4px] group-hover:hidden block" />{" "}
                <Image src={ArrowW} alt="arrow" className="ml-[4px] group-hover:block hidden" />
            </div>
        </div>
    );
};
export default Logout;
