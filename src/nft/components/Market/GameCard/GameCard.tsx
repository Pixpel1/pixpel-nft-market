import React, { useState } from "react";
import GameCardModal from "@nft/components/CardModal/GameCardModal";
import { ADD_CART } from "@nft/actions/type";
import cart from "@public/assets/images/shopping-cart.svg";
import help from "@public/assets/images/help.svg";
import saveLater from "@public/assets/images/save_later.svg";
import { useRouter } from "next/router";
import Image, { StaticImageData } from "next/image";
import { useAppDispatch } from "@nft/hooks";

interface CollectionCardType {
    data: { id: string | number; img: StaticImageData | string } | null;
}

const GameCard = ({ data }: CollectionCardType) => {
    const dispatch = useAppDispatch();
    const navigate = useRouter();
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="flex flex-col px-5 py-4 bg-app-black rounded gap-2">
                <div className="flex gap-2">
                    <div
                        className="group bg-app-black-button flex rounded text-gray-400 text-sm font-medium px-2 py-1 cursor-pointer gap-1 items-center hover:bg-app-blue"
                        onClick={() => dispatch({ type: ADD_CART, payload: data })}
                    >
                        <Image src={cart} alt="cart" className="h-5 w-5 filter group-hover:brightness-200" />
                    </div>
                    <div className="group bg-app-black-button flex rounded text-gray-400 text-sm font-medium px-2 py-1 cursor-pointer gap-1 items-center  hover:bg-app-blue">
                        <Image
                            src={saveLater}
                            alt="save for later"
                            className="h-5 w-5 filter brightness-100 group-hover:brightness-200"
                        />
                    </div>
                    <div className="flex w-full justify-end">
                        <div
                            className="group bg-app-black-button flex rounded px-2 text-sm font-medium text-gray-400 py-1 cursor-pointer gap-1 items-center hover:bg-app-blue"
                            onClick={() => setShowModal(true)}
                        >
                            <Image src={help} alt="help" className="filter group-hover:brightness-200" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    {data?.img && (
                        <Image
                            src={data.img}
                            alt="Game"
                            className="cursor-pointer w-70 h-50"
                            onClick={() => navigate.push(`/gamelobby/${data.id}`)}
                        />
                    )}
                </div>
                <div className="flex justify-between">
                    <div className="font-semibold">BOXES OPENED</div>
                    <div className="text-app-blue font-semibold">4K</div>
                </div>
                <div className="flex justify-between">
                    <div className="font-semibold">BOXES LEFT</div>
                    <div className="text-app-blue font-semibold">10K</div>
                </div>
                <div className="flex justify-between">
                    <div className="font-semibold">MYSTERY BOX PRICE</div>
                    <div className="text-app-blue font-semibold">10K</div>
                </div>
            </div>
            {<GameCardModal showModal={showModal} setShowModal={setShowModal} data={data} />}
        </>
    );
};
export default GameCard;
