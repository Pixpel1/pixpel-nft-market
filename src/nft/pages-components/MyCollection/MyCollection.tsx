import React from "react";
import CollectionCard from "../../components/Developer/CollectionCard";
import { useRouter } from "next/router";
import { BsPlus } from "react-icons/bs";

const MyCollection = () => {
    const navigate = useRouter();
    return (
        <div className="flex pt-11 flex-col 2xl:px-40 xl:px-32 lg:px-24 md:px-16 sm:px-8 px-4 pb-20 gap-8 brightness-110">
            <div className="flex justify-between">
                <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold">
                    My Collection
                </div>
                <div
                    className="p-2 rounded-lg flex object-center w-max pt-1.5 border-t-4 bg-app-black-button hover:bg-transparent border hover:border-yellow-300 border-app-black cursor-pointer lg:text-xl sm:text-lg text-base"
                    onClick={() => navigate.push("/collection")}
                >
                    <BsPlus size={38} fill="yellow" />
                </div>
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
            </div>
        </div>
    );
};

export default MyCollection;
