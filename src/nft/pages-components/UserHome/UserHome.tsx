import ButtonMar from "@nft/components/Button/ButtonMar";
import NFTintro from "@nft/components/Image/NFTintro";
import StakingDetail from "@nft/components/Image/StakingDetail";
// import MarketChart from "@nft/components/MarketChart/MarketChart";

import nft1 from "@public/assets/images/NFT/nft-1.png";
import nft2 from "@public/assets/images/NFT/nft-2.png";
import nft3 from "@public/assets/images/NFT/nft-3.png";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { tokenTrend } from "./dataList";

// const sizeChart = {
//     maxHeight: 51,
//     maxWidth: 124,
//     marginLeft: "auto",
// };

const UserHome = () => {
    const navigate = useRouter();

    const handleBuyClick = () => {
        navigate.push("/nft-market").catch((e: unknown) => {
            console.log(e);
        });
    };

    const handlePlayClick = () => {
        navigate.push("/game-market").catch((e: unknown) => {
            console.log(e);
        });
    };

    const handleTradeClick = () => {
        navigate.push("/exchange").catch((e: unknown) => {
            console.log(e);
        });
    };

    const handleStakeClick = () => {
        navigate.push("/stakingportfolio").catch((e: unknown) => {
            console.log(e);
        });
    };

    return (
        <div className="pt-28 pb-40 max-lg:pt-4 flex flex-col bg-cover bg-[url('/assets/images/UserHome/bgmainc.jpg')] relative ">
            {/* play your favorite game */}
            <div className="flex flex-col items-center max-sm:px-10 pt-[144px] pb-[647px] max-sm:pb-[340px] relative sliding-background">
                <div className="text-6xl font-semibold mb-8 relative">
                    <h1 className="flex text-center relative max-lg:text-[36px] max-lg:leading-normal">
                        Play your favorite game
                        <Image
                            src={"/assets/images/home/Players/starlb.svg"}
                            alt=""
                            width={15}
                            height={15}
                            className="absolute right-[-23px] top-[37px]"
                        />
                        <Image
                            src={"/assets/images/home/Players/starlbt.svg"}
                            alt=""
                            width={33}
                            height={33}
                            className="absolute right-[-49px] top-[49px]"
                        />
                        <Image
                            src={"/assets/images/home/Players/starlb.svg"}
                            alt=""
                            width={15}
                            height={15}
                            className="absolute left-[-58px] bottom-[8px]"
                        />
                        <Image
                            src={"/assets/images/home/Players/starlbt.svg"}
                            alt=""
                            width={33}
                            height={33}
                            className="absolute left-[-50px] bottom-[-22px]"
                        />
                    </h1>
                </div>
                <div className="text-white text-base max-w-[683px] flex text-center mb-10 max-xs:text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt volutpat ligula sed
                    dignissim. Cras sagittis, purus at tempor sollicitudin, lacus mauris accumsan erat, quis posuere leo
                    mi sed lectus.
                </div>
                <div className="flex justify-center">
                    <ButtonMar title="Play Now" handleClick={handlePlayClick} />
                </div>
                {/* images */}
                {/* <Image
                    src={"/assets/images/developerhome/followimg1.png"}
                    alt=""
                    width={264}
                    height={264}
                    className="rounded-[100%] max-w-[264] max-h-[264px] absolute left-[80px] top-0 max-2xl1:hidden"
                />
                <Image
                    src={"/assets/images/developerhome/img4.png"}
                    alt=""
                    width={165}
                    height={250}
                    className="max-w-[250] max-h-[250px] absolute left-[-254px] top-[126px] max-2xl1:hidden"
                />
                <Image
                    src={"/assets/images/UserHome/playfav5.png"}
                    alt=""
                    width={165}
                    height={250}
                    className="max-w-[250] max-h-[250px] absolute right-[-134px] top-[93px] max-2xl1:hidden"
                />
                <Image
                    src={"/assets/images/UserHome/playfav6.png"}
                    alt=""
                    width={191}
                    height={191}
                    className="max-w-[191] max-h-[191px] absolute right-[54px] top-[0px] max-2xl1:hidden"
                /> */}
                {/* <div className="flex justify-between gap-x-4 relative w-full mt-[82px]">
                    <Image
                        src={"/assets/images/UserHome/playfav1.png"}
                        alt=""
                        width={455}
                        height={455}
                        className="rounded-[100%] max-w-[455px] max-h-[455px] relative left-[-140px] top-[-50px] max-2xl1:hidden"
                    />
                    <Image
                        src={"/assets/images/UserHome/playfav2.png"}
                        alt=""
                        width={455}
                        height={455}
                        className="rounded-[100%] max-w-[455px] max-h-[455px] max-2xl1:hidden"
                    />
                    <Image
                        src={"/assets/images/UserHome/playfav3.png"}
                        alt=""
                        width={455}
                        height={455}
                        className="rounded-[100%] max-w-[455px] max-h-[455px] relative right-[-140px] top-[-20px] max-2xl1:hidden"
                    />
                    <Image
                        src={"/assets/images/developerhome/followimg4.png"}
                        alt=""
                        width={136}
                        height={136}
                        className="rounded-[100%] max-w-[136px] max-h-[136px] absolute left-[389px] max-2xl1:hidden"
                    />
                    <Image
                        src={"/assets/images/UserHome/playfav4.png"}
                        alt=""
                        width={250}
                        height={250}
                        className="rounded-[100%] max-w-[250px] max-h-[250px] absolute right-[272px] top-[-155px] max-2xl1:hidden"
                    />
                </div> */}
            </div>
            <div className="px-16 max-lg:px-8">
                {/* recent nfts */}
                <div className="mt-[127px] max-lg:mt-4">
                    <div className="flex justify-center items-end mb-[78px] max-lg:mb-4">
                        <div className="text-6xl max-sm:text-[36px] font-semibold">Recent NFTs</div>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-between mb-32 max-lg:mb-4 max-lg:justify-center">
                        <NFTintro image={nft1} name="Mustang" bid="2 PIX" />
                        <NFTintro image={nft2} name="Mustang" bid="2 PIX" />
                        <NFTintro image={nft3} name="Mustang" bid="2 PIX" />
                        <NFTintro image={nft1} name="Mustang" bid="2 PIX" />
                        <NFTintro image={nft2} name="Mustang" bid="2 PIX" />
                    </div>
                    <div className="flex justify-center">
                        <ButtonMar title="Buy Now" handleClick={handleBuyClick} />
                    </div>
                </div>

                {/* Staking */}
                <div className="mt-[153px] max-lg:mt-8">
                    <div className="flex justify-center items-end mb-[78px] max-lg:mb-8">
                        <div className="text-6xl font-medium">Staking</div>
                    </div>
                    <div className="flex flex-wrap gap-5 justify-between mb-[87px] max-lg:mb-8">
                        <StakingDetail locked={true} />
                        <StakingDetail locked={false} />
                        <StakingDetail locked={true} />
                    </div>
                    <div className="flex justify-center">
                        <ButtonMar title="Stake Now" handleClick={handleStakeClick} />
                    </div>
                </div>

                <div className="mt-[111px] mb-[87px] max-lg:mt-4 max-lg:mb-4">
                    <hr className="bg-[linear-gradient(270deg,rgba(123,97,255,0.76)_0%,#FFF_52.08%,rgba(123,97,255,0.76) 100%)] border border-[1px solid]" />
                </div>

                {/* trend token */}
                <div>
                    <div className="flex justify-center items-end mb-10">
                        <div className="text-6xl font-medium">Token trend</div>
                    </div>
                    <div className="overflow-x-auto relative w-full bg-[#1F263094] rounded-[37px] pt-[71px] px-[70px] pb-[89px]">
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <td className="text-white px-6 w-1/3">Name</td>
                                    <td className="text-white px-6 w-1/3">Last Price</td>
                                    <td className="text-white px-6 w-1/4">24h Change</td>
                                    <td className="text-white px-6 w-1/4 whitespace-nowrap block ml-6">Market Cap</td>
                                </tr>
                            </thead>
                            <tbody className="px-4">
                                {tokenTrend.map((token, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td className="py-5 px-6">
                                                <div className="flex items-center gap-2">
                                                    <Image
                                                        src={token.image as StaticImageData}
                                                        alt={token.symbol as string}
                                                        width={40}
                                                        height={40}
                                                        className="w-[40px] h-[40px]"
                                                    />
                                                    <div className="text-lg font-semibold">{token.symbol}</div>
                                                    <div className="text-base font-medium">{token.name}</div>
                                                </div>
                                            </td>
                                            <td className="px-6">
                                                <div className="flex items-center text-lg font-medium">
                                                    {token.Price}
                                                </div>
                                            </td>
                                            {token?.Change ? (
                                                token.Change > 0 ? (
                                                    <td className="px-6">
                                                        <div className="flex items-center text-lg font-medium text-app-green">
                                                            +{token.Change}%
                                                        </div>
                                                    </td>
                                                ) : (
                                                    <td className="px-6">
                                                        <div className="flex items-center text-lg font-medium text-app-red">
                                                            {token.Change}%
                                                        </div>
                                                    </td>
                                                )
                                            ) : (
                                                <td className="px-6">
                                                    <div className="flex items-center text-lg font-medium text-app-red">
                                                        {token.Change}%
                                                    </div>
                                                </td>
                                            )}
                                            <td className="px-6">
                                                <div className="flex items-center">
                                                    <Image alt="" src={token.martketcap} width={124} height={51} />
                                                    {/* <MarketChart
                                                isGrowth={token?.Change ? token?.Change > 0 : false}
                                                data={[0.2, 0.5, 1, 0.1, 5, 0.5, 3, 2, 1]}
                                                sizeChart={sizeChart}
                                            /> */}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center mt-[127px] max-lg:mt-4">
                        <ButtonMar title="Trade Now" handleClick={handleTradeClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
