import React from "react";
import Image from "next/image";
import collectionBanner from "@public/assets/images/collections/create_collection_banner.png";

const index = () => {
    // const [nftCollections, setNftClicked] = useState<NftClicked[]>(new Array(49).fill({ nftId: 0, nftChecked: false }));
    return (
        <div className="collections flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 ">
                {new Array(12).fill(null).map((item, i) => {
                    return (
                        <div
                            key={i}
                            className="flex flex-col singleCollection bg-app-black border-transparent rounded-lg"
                        >
                            <div className="flex">
                                <Image src={collectionBanner} alt="collection_banner" />
                            </div>
                            <div className="flex justify-center">
                                <button className="text-lg font-semibold text-white bg-app-primary hover:bg-app-blue-hover uppercase py-2 px-4 rounded-[10px] relative bottom-6">
                                    + Info
                                </button>
                            </div>
                            <div className="flex flex-col mx-5 pb-8">
                                <div className="flex justify-center border-b border-solid border-b-app-black-button mb-6">
                                    <p className="text-xl font-bold uppercase my-2">CATEGORY</p>
                                </div>
                                <div className="flex flex-col space-y-5">
                                    <button className="bg-app-black-button hover:bg-app-black-duration w-full py-5 text-lg font-semibold rounded-xl">
                                        Crypto Bots
                                    </button>
                                    <button className="bg-app-primary hover:bg-app-blue-hover w-full py-5 text-lg font-semibold rounded-xl">
                                        500 items
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default index;
