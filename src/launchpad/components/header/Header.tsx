import React, { useState } from "react";
import Logo from "@launchpad/assets/logo/logo.png";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <header className="flex absolute w-full justify-between items-center h-24 header-bg top-0 px-8 md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48 z-20">
                <Link href="/launchpad/" rel="PIXPEL">
                    <Image src={Logo} alt="logo" className="w-40" title="logo" />
                </Link>
                <div className="hidden md:flex gap-4 border items-center justify-center border-app-blue rounded-full px-4 py-2px">
                    <div className="items-center text-white cursor-pointer hover:text-app-green">
                        <Link href="/launchpad/">Home</Link>
                    </div>
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <Link
                                href="/launchpad/launchpad/playerside"
                                className="
                  flex justify-between items-center text-sm2 w-full hover:text-app-green"
                            >
                                LaunchPad
                            </Link>
                            {navbarOpen && (
                                <div className="absolute flex flex-row-reverse justify-end bg-white w-32 mt-1 rounded-b-xl">
                                    <ul>
                                        <li onClick={() => setNavbarOpen(!navbarOpen)}>
                                            <Link
                                                href="https://docsend.com/view/p26a9bvfpqf52ddi"
                                                target="_blank"
                                                className="block py-2 px-2 hover:text-app-green"
                                                rel="noreferrer"
                                            >
                                                White Paper
                                            </Link>
                                        </li>
                                        <li onClick={() => setNavbarOpen(!navbarOpen)}>
                                            <Link
                                                href="https://docsend.com/view/q83qhhu6h66ckvgk"
                                                target="_blank"
                                                className="block py-2 px-2 hover:text-app-green"
                                                rel="noreferrer"
                                            >
                                                Check Deck
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;
