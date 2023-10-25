import Link from "next/link";
import React, { MutableRefObject } from "react";
import { IconContext } from "react-icons";
import { RiLinkedinFill } from "react-icons/ri";
import JuanVivas from "@launchpad/assets/team/juan.png";
import Mariana from "@launchpad/assets/team/mariana.png";
import Qammar from "@launchpad/assets/team/qammar.png";
import Image from "next/image";

interface PixpelTeam {
    scrollToRef: MutableRefObject<HTMLDivElement>;
}

const PixpelTeam = ({ scrollToRef }: PixpelTeam) => {
    return (
        <div
            className="2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col py-24 pr-5 bg-app-black"
            ref={scrollToRef}
        >
            <h3 className="text-3xl  lg:text-[40px] mb-8 font-bold uppercase mx-auto">PIXPEL STUDIOS</h3>
            <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-0 gap-x-16 items-center">
                <div className="flex">
                    <p className="text-base  sm:text-lg text-app-black-duration font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis placerat nunc at mollis.
                        Aliquam porta malesuada imperdiet. Etiam malesuada finibus ipsum, quis porttitor nulla. Ut magna
                        augue, interdum at sem at, sodales volutpat libero. Nullam sed dui et erat congue ullamcorper.
                        Quisque egestas dolor eu odio sagittis, eu tincidunt leo feugiat. Duis posuere urna non tempor
                        consequat. Nunc tellus libero, pulvinar eu elit id, luctus fermentum nisi. Vestibulum fringilla
                        justo molestie, hendrerit ex sed, bibendum nulla. Phasellus hendrerit nulla in enim imperdiet
                        posuere. Phasellus at tellus at lorem dapibus porttitor.
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="text-base  sm:text-lg text-app-black-duration font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis placerat nunc at mollis.
                        Aliquam porta malesuada imperdiet. Etiam malesuada finibus ipsum, quis porttitor nulla. Ut magna
                        augue, interdum at sem at, sodales volutpat libero. Nullam sed dui et erat congue ullamcorper.
                        Quisque egestas dolor eu odio sagittis, eu tincidunt leo feugiat. Duis posuere urna non tempor
                        consequat. Nunc tellus libero, pulvinar eu elit id, luctus fermentum nisi. Vestibulum fringilla
                        justo molestie, hendrerit ex sed, bibendum nulla. Phasellus hendrerit nulla in enim imperdiet
                        posuere. Phasellus at tellus at lorem dapibus porttitor.
                    </p>
                </div>
            </div>
            <div className="flex flex-col my-14">
                <h3 className="text-3xl  lg:text-[40px] mb-8 font-bold uppercase mx-auto">Team</h3>
                <div className="grid">
                    <div className="flex flex-wrap gap-8">
                        <div className="flex shrink-0 grow basis-[content] justify-center">
                            <div className="flex flex-col text-center justify-center">
                                <Image src={JuanVivas} alt="Co-Founder & Ceo" />
                                <h3 className="text-base sm:text-xl text-app-black-duration mt-6 mb-3 font-medium">
                                    Co-Founder & C.E.O.
                                </h3>
                                <div className="flex justify-center items-center gap-x-2 ">
                                    <h2 className="text-xl sm:text-2xl font-medium">Juan Vivas</h2>
                                    <Link
                                        href="https://www.linkedin.com/in/juanvivaslovera/"
                                        className="bg-black border-2 border-white rounded-full"
                                    >
                                        <IconContext.Provider
                                            value={{
                                                className: " m-2",
                                            }}
                                        >
                                            <RiLinkedinFill />
                                        </IconContext.Provider>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex shrink-0 grow basis-[content] justify-center">
                            <div className="flex flex-col text-center justify-center">
                                <Image src={Mariana} alt="Co-Founder & Ceo" />
                                <h3 className="text-base sm:text-xl text-app-black-duration mt-6 mb-3 font-medium">
                                    C.D.O
                                </h3>
                                <div className="flex justify-center items-center gap-x-2">
                                    <h2 className="text-xl sm:text-2xl font-medium">Mariana Rojas</h2>
                                    <Link
                                        href="https://www.linkedin.com/in/mariana-rojas-538b8b60/"
                                        className="bg-black border-2 border-white rounded-full"
                                    >
                                        <IconContext.Provider
                                            value={{
                                                className: " m-2",
                                            }}
                                        >
                                            <RiLinkedinFill />
                                        </IconContext.Provider>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex shrink-0 grow basis-[content] justify-center">
                            <div className="flex flex-col text-center justify-center">
                                <Image src={Qammar} alt="Co-Founder & Ceo" />
                                <h3 className="text-base sm:text-xl text-app-black-duration mt-6 mb-3 font-medium">
                                    C.T.O
                                </h3>
                                <div className="flex justify-center items-center gap-x-2">
                                    <h2 className="text-xl sm:text-2xl font-medium">Qammar Zaman</h2>
                                    <Link
                                        href="https://www.linkedin.com/in/meetqammar/"
                                        className="bg-black border-2 border-white rounded-full"
                                    >
                                        <IconContext.Provider
                                            value={{
                                                className: " m-2",
                                            }}
                                        >
                                            <RiLinkedinFill />
                                        </IconContext.Provider>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PixpelTeam;
