import Image, { StaticImageData } from "next/image";
import React from "react";

interface data {
    img: StaticImageData | string;
    name?: string;
    symbol?: string;
    lastprice?: string;
    change: string;
    martketcap: StaticImageData | string;
}

function PopularCrypto() {
    return (
        <>
            <div className="flex flex-col px-[30px] mt-[110px] max-2xl1:px-0 max-sm:mt-4">
                <div className="flex justify-center">
                    <p className="flex text-[#FFFFFF] text-center text-[77px] max-sm:text-[24px] max-lg:text-[36px] font-semibold">
                        Popular Crytocurrencies
                    </p>
                </div>

                <div className="bg-[#1F263094] rounded-[37px] px-[70px] py-[80px] mt-[85px] max-sm:mt-4 max-sm:px-0 max-sm:py-0">
                    <div className="flex flex-col ">
                        <div className="overflow-x-auto scroll sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-3 lg:px-4">
                                <table className="max-w-[125rem] w-screen text-left text-sm font-light">
                                    <thead className="font-medium">
                                        <tr className="font-semibold">
                                            <th
                                                scope="col"
                                                className="px-6 py-4 text-[16px] max-sm:text-[14px] text-[#FFFFFF]"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-4 text-[16px] max-sm:text-[14px] text-[#FFFFFF]"
                                            >
                                                Last Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-4 text-[16px] max-sm:text-[14px] text-[#FFFFFF]"
                                            >
                                                24h Change
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 block ml-6 py-4 text-[16px] max-sm:text-[14px] text-[#FFFFFF]"
                                            >
                                                Market Cap
                                            </th>
                                        </tr>
                                    </thead>
                                    {data.map((item, idx) => (
                                        <tbody key={idx}>
                                            <tr className="">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    <div className="flex items-center">
                                                        <Image
                                                            alt=""
                                                            src={item.img}
                                                            width={40}
                                                            height={40}
                                                            className="w-[40px] h-[40px]"
                                                        />
                                                        <p className="text-[18px] max-sm:text-[16px] text-[#FFFFFF] font-semibold ml-[15px]">
                                                            {item.symbol}
                                                        </p>
                                                        <p className="text-[16px] max-sm:text-[14px] text-[#717A8B] font-medium ml-[5px]">
                                                            {item.name}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap font-medium px-6 py-4 text-[18px] max-sm:text-[16px] text-[#FFFFFF]">
                                                    {item.lastprice}
                                                </td>
                                                <td
                                                    className={`whitespace-nowrap px-6 py-4 text-[18px] font-medium ${
                                                        item.change.startsWith("+")
                                                            ? "text-[#2EBD85]"
                                                            : item.change.startsWith("-")
                                                            ? "text-[#F6465D]"
                                                            : "text-[#fff]"
                                                    }`}
                                                >
                                                    {item.change}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <Image alt="" src={item.martketcap} width={124} height={51} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopularCrypto;

const data: data[] = [
    {
        img: "/assets/images/UserHome/pixp.png",
        name: "PIXPEL",
        symbol: "PIXP",
        lastprice: "$45 832,04000",
        change: "-0.73%",
        martketcap: "/assets/images/home/Players/redgraph.svg",
    },
    {
        img: "/assets/images/UserHome/btc.png",
        name: "Bitcoin",
        symbol: "BTC",
        lastprice: "$3 453,74000",
        change: "-0.84%",
        martketcap: "/assets/images/home/Players/redgraph.svg",
    },
    {
        img: "/assets/images/UserHome/usdc.png",
        name: "USD Coin",
        symbol: "USDC",
        lastprice: "$1,00000",
        change: "-0.009%",
        martketcap: "/assets/images/home/Players/redgraph.svg",
    },
    {
        img: "/assets/images/UserHome/eth.png",
        name: "Etherium",
        symbol: "ETH",
        lastprice: "$442,70000",
        change: "+2.41%",
        martketcap: "/assets/images/home/Players/greengraph.svg",
    },
    {
        img: "/assets/images/UserHome/xrp.png",
        name: "Ripple",
        symbol: "XRP",
        lastprice: "$0,99990",
        change: "+1.99%",
        martketcap: "/assets/images/home/Players/greengraph.svg",
    },
    {
        img: "/assets/images/UserHome/luna.png",
        name: "Terra",
        symbol: "LUNA",
        lastprice: "$134,56000",
        change: "-98.39%",
        martketcap: "/assets/images/home/Players/redgraph.svg",
    },
    {
        img: "/assets/images/UserHome/avax.png",
        name: "Avalanche",
        symbol: "AVAX",
        lastprice: "$1,20000",
        change: "+1 200.02%",
        martketcap: "/assets/images/home/Players/greengraph.svg",
    },
];
