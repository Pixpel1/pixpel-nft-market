import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { IoArrowBack } from "react-icons/io5";

type Props = {
    children?: ReactNode;
    heading?: string;
};

const Layout = ({ children, heading }: Props) => {
    const router = useRouter();
    const tabs = [
        {
            text: "Market",
            link: "/dex/market",
        },
        {
            text: "Limit",
            link: "/dex/limit",
        },
        {
            text: "Liquidity",
            link: "/dex/liquidity",
        },
        {
            text: "Pool",
            link: "/dex/pool",
        },
        {
            text: "Bridge",
            link: "/dex/bridge",
        },
    ];
    return (
        <div>
            <div className="flex mb-32 pt-11 flex-col gap-4 my-4">
                <div className="flex px-16 items-center justify-between">
                    <div onClick={() => router.back()} className="p-4 cursor-pointer bg-[#37404C] rounded-md">
                        <IoArrowBack size={24} />
                    </div>
                    <h1 className="text-center font-medium text-3xl">{heading || "Swap Master"}</h1>
                    <div></div>
                </div>
                {!heading && (
                    <div className="flex justify-center gap-5">
                        {tabs.map((i, idx) => (
                            <Link
                                href={i.link}
                                className={
                                    "font-semibold text-lg font-poppins px-8 py-4 rounded " +
                                    (router.pathname.includes(i.link) ? "bg-[#0095c8]" : "bg-[#29313C]")
                                }
                                key={idx}
                            >
                                {i.text}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            {children}
        </div>
    );
};

export default Layout;
