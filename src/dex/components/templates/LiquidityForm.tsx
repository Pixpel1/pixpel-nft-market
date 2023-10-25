import Input from "@dex/components/atoms/input/input";
import React, { FC, useState } from "react";
import ArrowDownIcon from "@public/icons/arrow-down-icon.svg";
import ConcordiumIcon from "@public/icons/concordium-icon.svg";
import EthereumIcon from "@public/icons/ethereum-icon.svg";
import Image from "next/image";
import Text from "@dex/components/atoms/text/text";
import Button from "@dex/components/atoms/button/Button";
import {
    Coin,
    Dropdown,
    DropdownButton,
    DropdownList,
    MaxGapRow,
    StyledCoinText,
} from "@dex/components/templates/transfer/Transfer.style";
import { TokenWithIcon } from "@dex/api-query/queries";
import { Components } from "@dex/api-query/__generated__/AxiosClient";
import { dummyTokens } from "./market/MarketForm";

type SelectTokenProps = {
    isDeposit: boolean;
    tokens: TokenWithIcon[] | undefined;
    onSelect(token: Components.Schemas.TokenMapItem): void;
    selected: Components.Schemas.TokenMapItem | undefined;
};

export const SelectToken: FC<SelectTokenProps> = ({ tokens, onSelect, selected, isDeposit }) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((o) => !o);
    const fallbackIconUrl: string = isDeposit ? EthereumIcon.src : ConcordiumIcon.src;
    const selectedIconUrl = selected
        ? tokens?.filter(({ token }) => token.eth_name === selected?.eth_name)[0]?.iconUrl ?? fallbackIconUrl
        : undefined;

    const sortedTokens = tokens?.slice().sort(({ token: a }, { token: b }) => {
        const isLess = isDeposit ? a.eth_name < b.eth_name : a.ccd_name < b.ccd_name;
        return isLess ? -1 : 1;
    });

    return (
        <MaxGapRow>
            <DropdownButton onClick={toggle}>
                {selected && selectedIconUrl && (
                    <Image
                        src={selectedIconUrl}
                        alt={`${isDeposit ? selected.eth_name : selected.ccd_name} icon`}
                        height="23.13"
                        width="23.13"
                    />
                )}
                <Text fontWeight="light" fontColor="White" style={{ paddingLeft: selectedIconUrl ? 7 : undefined }}>
                    {selected ? (isDeposit ? selected.eth_name : selected.ccd_name) : "Select Token"}
                </Text>
                <Dropdown>
                    <Image src={ArrowDownIcon.src} alt="dropdown icon" height="12" width="12" />
                </Dropdown>
            </DropdownButton>
            <DropdownList open={open}>
                {sortedTokens?.map((tokenData) => {
                    const {
                        token: { ccd_name, ccd_contract, eth_name, eth_address },
                        iconUrl,
                    } = tokenData;

                    return (
                        <Coin
                            onClick={() => {
                                onSelect(tokenData.token);
                                setOpen(false);
                            }}
                            key={
                                isDeposit
                                    ? `${eth_name + eth_address}`
                                    : `${ccd_name + ccd_contract?.index + ccd_contract?.subindex}`
                            }
                        >
                            <Image
                                src={iconUrl ?? fallbackIconUrl}
                                alt={`${isDeposit ? eth_name : ccd_name} icon`}
                                height="23.13"
                                width="23.13"
                            />
                            <StyledCoinText fontWeight="light">{isDeposit ? eth_name : ccd_name}</StyledCoinText>
                        </Coin>
                    );
                })}
            </DropdownList>
        </MaxGapRow>
    );
};

const LiquidityForm = () => {
    const [selectedTokens, setSelectedTokens] = useState(dummyTokens);
    return (
        <div className="flex justify-center">
            <div className="flex flex-col bg-app-black rounded-xl sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px] w-full md1:w-155">
                <div className="flex justify-center">
                    <div className="text-xl font-semibold">Add liquidity</div>
                </div>
                <div className="flex justify-center mt-2 mb-6">
                    <div className="text-sm font-medium text-slate-500">Add liquidity to recieve LP token</div>
                </div>
                <div className="flex flex-col px-4 py-4 mb-8 2xs:py-8 2xs:px-8 1xs:py-12 1xs:px-12 sm:py-8 sm:px-16 rounded-xl bg-app-black-button">
                    <div className="flex justify-center mb-4">
                        <div className="text-base font-semibold">You are the first liquidity provider.</div>
                    </div>
                    <div className="flex justify-center mb-3">
                        <div className="text-sm font-normal text-slate-500">
                            The ratio of tokens you add will set the price of this pool
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-sm font-normal text-slate-500">
                            Once you are happy with the rate clock supply to review
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex px-4 py-4 mb-2 2xs:py-8 2xs:px-8 1xs:py-12 1xs:px-12 sm:py-4 sm:px-4 rounded-xl bg-app-black-button">
                        <SelectToken
                            tokens={dummyTokens}
                            selected={selectedTokens[0].token}
                            isDeposit
                            onSelect={(token) => {
                                const selectedToken = dummyTokens.filter((i) => i.token === token)[0];
                                const newTokens = selectedTokens.map((i, idx) => (idx !== 0 ? i : selectedToken));
                                setSelectedTokens(newTokens);
                            }}
                        />

                        <div className="border-l-2 mx-4 border-solid border-white/10"></div>
                        <Input
                            valid
                            defaultValue={7328859.9832}
                            className="text-white  text-base font-medium placeholder:text-app-black"
                            placeholder="--"
                            type="number"
                        />
                    </div>
                    <div className="flex flex-row justify-end text-sm mb-4">
                        <div className="font-normal text-gray-400">Balance: 2</div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex items-center px-4 py-4 mb-2 2xs:py-8 2xs:px-8 1xs:py-12 1xs:px-12 sm:py-4 sm:px-4 rounded-xl bg-app-black-button">
                        <SelectToken
                            tokens={dummyTokens}
                            selected={selectedTokens[1].token}
                            isDeposit
                            onSelect={(token) => {
                                const selectedToken = dummyTokens.filter((i) => i.token === token)[0];
                                const newTokens = selectedTokens.map((i, idx) => (idx !== 1 ? i : selectedToken));
                                setSelectedTokens(newTokens);
                            }}
                        />
                        <div className="h-full w-0.5 mx-5 bg-white/10"></div>
                        <Input
                            valid
                            className="text-white  text-base font-medium placeholder:text-app-black"
                            placeholder="--"
                            type="number"
                        />
                        <Button onClick={() => console.log("hello")} className="!text-app-blue" variant="max">
                            Max
                        </Button>
                    </div>
                    <div className="flex flex-row justify-end text-sm mb-4">
                        <div className="font-normal text-gray-400">Balance: 2</div>
                    </div>
                </div>
                <div className="flex flex-col py-4 mt-6 mb-8 xs:py-8 rounded-xl bg-app-black-button">
                    <div className="flex justify-center pb-5 mb-4 border-b-2 border-gray-500">
                        <div className="text-xs font-medium 2xs:text-base">Initial prices and pool share</div>
                    </div>
                    <div className="flex flex-col text-lg font-medium 2xs:text-xs 2xs:justify-around 2xs:flex-row 1xs:text-base">
                        <div className="flex flex-col items-center">
                            <div className="flex flex-row justify-center">
                                <div>123</div>
                            </div>
                            <div>
                                <span title={"PIXP"}>PIXP</span> per&nbsp;
                                <span title={"bnb"}>bnb</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-row justify-center">
                                <div>321</div>
                            </div>
                            <div>
                                <span title={"Eth"}>{"Eth"}</span> per&nbsp;
                                <span title={"Eth"}>{"Eth"}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-row justify-center">
                                <div>50%</div>
                            </div>
                            <div>Share of Pool</div>
                        </div>
                    </div>
                </div>
                <Button
                    variant="rest"
                    onClick={() => console.log("hello")}
                    type="submit"
                    className="p-4 text-white h-16 mt-5 bg-app-blue text-lg"
                >
                    Supply
                </Button>
            </div>
        </div>
    );
};

export default LiquidityForm;
