import React from "react";
import NFT from "@public/assets/images/home/main__bg.jpg";
import Image from "next/image";
import { useRouter } from "next/router";

const CollectionCard = () => {
    const router = useRouter();
    return (
        <div className="bg-app-black rounded-md pb-5">
            <div className="brightness-125">
                <Image src={NFT} alt="NFT" className="rounded-md brightness-200" />
            </div>
            <div className="relative flex justify-center bottom-6">
                <div className="bg-app-blue cursor-pointer hover:bg-[#50D0FB] flex justify-center items-center px-6 py-2 w-max rounded-md">
                    + Info
                </div>
            </div>
            <div
                onClick={() =>
                    router.push(
                        {
                            pathname: `/nft-market/nftlanding`,
                            query: {
                                singleData: `%7B%22id%22%3A2%2C%22img%22%3A%7B%22src%22%3A%22%2F_next%2Fstatic%2Fmedia%2Fnft-2.f6e9076d.png%22%2C%22height%22%3A293%2C%22width%22%3A293%2C%22blurDataURL%22%3A%22%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fnft-2.f6e9076d.png%26w%3D8%26q%3D70%22%2C%22blurWidth%22%3A8%2C%22blurHeight%22%3A8%7D%7D`,
                            },
                        },
                        `/nft-market/nftlanding`
                    )
                }
                className="bg-app-black-button my-3 mx-5 flex items-center justify-center py-5 rounded-md hover:bg-app-blue cursor-pointer"
            >
                The Archer
            </div>
            <div className="bg-app-black-button my-3 mx-5 flex items-center justify-center py-5 rounded-md hover:bg-app-blue cursor-pointer">
                Archer Character
            </div>
            <div className="bg-app-black-button my-3 mx-5 flex items-center justify-center py-5 rounded-md hover:bg-app-blue cursor-pointer">
                1000 items
            </div>
        </div>
    );
};

export default CollectionCard;
