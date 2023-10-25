import { useRouter } from "next/router";
import React from "react";

interface CollectionsBanner {
    bannerImg: string;
}

const CollectionsBanner = ({ bannerImg }: CollectionsBanner) => {
    const router = useRouter();
    return (
        <div
            className="collectionBanner bg-no-repeat bg-cover h-88 -mt-[60px] 2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 grid pb-20"
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <div className="flex justify-between items-start relative pt-9">
                <div
                    className="group flex py-2 h-12 px-4 items-center bg-app-black-button hover:bg-app-primary rounded-md cursor-pointer"
                    onClick={() => router.back()}
                >
                    <svg
                        className="md:h-5 h-4 md:w-5 w-4 hover:fill-app-primary stroke-white"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16l-4-4m0 0l4-4m-4 4h18"
                        />
                    </svg>
                </div>

                <div />
            </div>
        </div>
    );
};

export default CollectionsBanner;

CollectionsBanner.defaultProps = {
    bannerImg: "",
};
