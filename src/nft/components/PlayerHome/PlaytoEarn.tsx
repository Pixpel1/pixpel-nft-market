import React from "react";
import ButtonMar from "../Button/ButtonMar";
import Image from "next/image";

function PlaytoEarn() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="title banner__title flex text-center relative font-semibold">
                    Play 2 Earn,
                    <br /> Safe and Fun
                    <Image
                        src={"/assets/images/home/Players/starlb.svg"}
                        alt=""
                        width={33}
                        height={33}
                        className="absolute right-[-78px] top-[49px]"
                    />
                    <Image
                        src={"/assets/images/home/Players/starlbt.svg"}
                        alt=""
                        width={55}
                        height={55}
                        className="absolute right-[-59px] top-[7px]"
                    />
                    <Image
                        src={"/assets/images/home/Players/starlb.svg"}
                        alt=""
                        width={33}
                        height={33}
                        className="absolute left-[-43px] bottom-[63px]"
                    />
                    <Image
                        src={"/assets/images/home/Players/starlbt.svg"}
                        alt=""
                        width={55}
                        height={55}
                        className="absolute left-[-84px] bottom-[15px]"
                    />
                </h1>

                <p className="text-[#fff] max-xs:text-[12px] max-w-[826px] leading-normal mt-[30px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt volutpat ligula sed
                    dignissim. Cras sagittis, purus at tempor sollicitudin, lacus mauris accumsan erat, quis posuere leo
                    mi sed lectus.
                </p>
            </div>
            <div className="flex justify-center mt-[64px] max-sm:mt-4">
                <form className="flex banner__form max-sm:flex-col max-sm:gap-y-2">
                    <input
                        type="text"
                        className="banner__input !bg-[#fff] placeholder:text-black font-medium text-black"
                        placeholder="Enter Email / Phone number"
                    />
                    <ButtonMar
                        isBold
                        title="Join"
                        handleClick={function (): void {
                            // alert("Function not implemented.");
                            console.log("Function not implemented.");
                        }}
                    />
                </form>
            </div>
        </div>
    );
}

export default PlaytoEarn;
