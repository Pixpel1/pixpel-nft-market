import React, { useState } from "react";
import { SelectToken, dummyTokens, selectedDay } from "../market/MarketForm";
import Image from "next/image";
import SwapIcon from "@public/icons/shuffle.svg";
import { SwapLink } from "@dex/components/templates/transfer/Transfer.style";
import Input from "@dex/components/atoms/input/input";
import Button from "@dex/components/atoms/button/Button";

const SwapForm = () => {
    const [token, setToken] = useState(dummyTokens[0].token);
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className={`flex flex-col rounded-md w-full 2xl:w-155 bg-app-black sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px]`}
        >
            <div className="relative">
                <div>
                    <div className="flex flex-col justify-between items-center text-lg 1xs:flex-row">
                        <div className="font-semibold text-lg">From</div>
                        <div className="font-normal text-xs text-gray-400">Spot wallet available 0 USDT</div>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-4  2xs:py-8 2xs:px-8 1xs:py-12 1xs:px-12 sm:py-4 sm:px-4 rounded-xl bg-app-black-button">
                        <Input
                            valid
                            defaultValue={7328859.9832}
                            className="text-white  text-base font-medium placeholder:text-app-black"
                            placeholder="--"
                            type="number"
                        />
                        <Button onClick={() => console.log("hello")} className="!text-app-blue" variant="max">
                            Max
                        </Button>
                        <SelectToken isDeposit tokens={dummyTokens} selected={token} onSelect={setToken} />
                    </div>
                </div>
                <div className="flex mt-3 items-center gap-5">
                    <div>
                        <div className="font-semibold text-lg">Price</div>
                        <div className="flex items-center px-4 py-4 w-full  2xs:py-8 2xs:px-8 1xs:py-12 1xs:px-12 sm:py-4 sm:px-4 rounded-xl bg-app-black-button">
                            <Input
                                valid
                                defaultValue={7328859.9832}
                                className="text-white w-[70%] text-base font-medium placeholder:text-app-black"
                                placeholder="--"
                                type="number"
                            />
                            <SelectToken isDeposit tokens={dummyTokens} selected={token} onSelect={setToken} />
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold text-lg">Expires in</div>
                        <div className="px-4 py-4  2xs:py-8 2xs:px-8 1xs:py-12 1xs:px-12 sm:py-4 sm:px-4 min-w-[150px] w-full rounded-xl bg-app-black-button">
                            <SelectToken
                                isExpire
                                isDeposit
                                tokens={dummyTokens}
                                selected={selectedDay}
                                onSelect={setToken}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full h-1 absolute top-[62%] bg-app-black-gray"></div>
                <SwapLink className="-ml-6 mt-3 !rotate-90">
                    <Image src={SwapIcon.src} alt="swap icon" width="24" height="24" />
                </SwapLink>
                <div>
                    <div className="flex flex-col mt-24 justify-between text-lg 1xs:flex-row">
                        <div className="font-semibold">To</div>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-4  2xs:py-8 2xs:px-8 1xs:py-12 1xs:px-12 sm:py-4 sm:px-4 rounded-xl bg-app-black-button">
                        <Input
                            valid
                            defaultValue={7328859.9832}
                            className="text-white w-[80%] text-base font-medium placeholder:text-app-black"
                            placeholder="--"
                            type="number"
                        />
                        <SelectToken isDeposit tokens={dummyTokens} selected={token} onSelect={setToken} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-5 text-sm">
                <div className="flex flex-row justify-between">
                    <div>Price</div>
                    <div>1 PIXP = 50 PIXP</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div>Inverse Price</div>
                    <div>1 BC = 123 PIXP</div>
                </div>
            </div>
            <button type="submit" className="p-4 h-16 mt-5 bg-app-blue text-lg disabled:bg-app-black-button">
                Place Order
            </button>
        </form>
    );
};

export default SwapForm;
