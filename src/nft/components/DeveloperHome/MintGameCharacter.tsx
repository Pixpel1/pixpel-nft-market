import React from "react";
import Image from "next/image";

function MintGameCharacter() {
    return (
        <div className="relative max-lg:pb-[50px]">
            <div className="flex flex-col items-center justify-center pt-[79px] pb-[300px] sliding-background-developer relative">
                <h1 className="title banner__title flex text-center relative font-semibold">
                    Design and Mint
                    <br />
                    Your Game Characters
                    <Image
                        src={"/assets/images/home/Players/starlb.svg"}
                        alt=""
                        width={33}
                        height={33}
                        className="absolute right-[-8px] top-[40px]"
                    />
                    <Image
                        src={"/assets/images/home/Players/starlbt.svg"}
                        alt=""
                        width={59}
                        height={59}
                        className="absolute right-[15px] top-[-7px]"
                    />
                    <Image
                        src={"/assets/images/home/Players/starlb.svg"}
                        alt=""
                        width={41}
                        height={41}
                        className="absolute left-[-91px] bottom-[23px]"
                    />
                    <Image
                        src={"/assets/images/home/Players/starlbt.svg"}
                        alt=""
                        width={84}
                        height={84}
                        className="absolute left-[-70px] bottom-[-48px]"
                    />
                </h1>

                <p className="text-[#fff] text-xl max-w-[590px] text-center leading-normal mt-[30px]">
                    Our Marketplace is the world´s first and largest NFT market for independent creators worldwide
                </p>
                <button className="text-[18px] text-[#FFFFFF] bg-[#0196C9] hover:bg-[#50D0FB] rounded-[10px] mt-[27px] px-[100px] max-sm:px-[50px] py-[25px]">
                    Start Creating
                </button>
            </div>
            {/* <Image
                src={"/assets/images/developerhome/img1.png"}
                alt=""
                width={230}
                height={230}
                className="w-[230px] h-[230px] absolute top-[-62px] right-[220px] max-xl1:hidden"
            />
            <Image
                src={"/assets/images/developerhome/img2.png"}
                alt=""
                width={268}
                height={268}
                className="w-[268px] h-[268px] absolute left-0 top-[-54px] max-xl1:hidden"
            />
            <Image
                src={"/assets/images/developerhome/img3.png"}
                alt=""
                width={203}
                height={203}
                className="w-[203px] h-[203px] absolute top-[59px] left-[290px] max-xl1:hidden"
            />
            <Image
                src={"/assets/images/developerhome/img4.png"}
                alt=""
                width={173}
                height={173}
                className="w-[173px] h-[173px] absolute top-[173px] right-[173px] max-xl1:hidden"
            />
            <Image
                src={"/assets/images/developerhome/img5.png"}
                alt=""
                width={165}
                height={165}
                className="w-[165px] h-[165px] absolute top-[271px] left-[142px] max-xl1:hidden"
            />
            <Image
                src={"/assets/images/developerhome/img6.png"}
                alt=""
                width={141}
                height={141}
                className="absolute top-[32px] right-0 max-xl1:hidden"
            /> */}
        </div>
    );
}

export default MintGameCharacter;
