import React from "react";

interface YearCard {
    cardData: {
        year: string | number;
        cards: {
            title: string;
            month: string;
            tokens: string;
        }[];
    }[];
}

const YearCard = ({ cardData }: YearCard) => {
    return cardData.map((data, index) => {
        const innerCards = data.cards;
        return (
            <div key={index} className="flex flex-col text-center">
                <h3 className="text-[30px] font-semibold mb-10">{data.year}</h3>
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4  place-items-center gap-16 2xl1:gap-24`}
                >
                    {innerCards.map((card, i) => {
                        return (
                            <div key={i} className={innerCards.length < 2 ? "" : ``}>
                                <div className="flex flex-col mx-auto items-center bg-app-black-select px-16 py-6 justify-center rounded-lg">
                                    <div className="flex w-full justify-center border-b border-b-white">
                                        <h3 className="text-[28px] font-medium pb-2">{card.title}</h3>
                                    </div>
                                    <h4 className="text-app-blue uppercase text-[25px] mt-3 font-medium relative after:contents-[*] after:absolute after:w-10 after:h-0.5 after:-bottom-2 after:inset-x-0 after:mx-auto after:bg-app-blue">
                                        {card.month}
                                    </h4>
                                    <div className="flex mt-5">
                                        <h4 className="text-[25px] uppercase font-medium">
                                            Tokens: <span className="text-app-blue">{card.tokens}</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {cardData.length === index + 1 ? (
                    ""
                ) : (
                    <>
                        <hr className="border-app-gray-gray_5 mt-10" />
                    </>
                )}
            </div>
        );
    });
};

export default YearCard;
