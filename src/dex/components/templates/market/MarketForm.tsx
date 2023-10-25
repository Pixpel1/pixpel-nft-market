import Input from "@dex/components/atoms/input/input";
import React, { FC, useState } from "react";
import ArrowDownIcon from "@public/icons/arrow-down-icon.svg";
import ConcordiumIcon from "@public/icons/concordium-icon.svg";
import EthereumIcon from "@public/icons/ethereum-icon.svg";
import Image from "next/image";
import Text from "@dex/components/atoms/text/text";
import Button from "@dex/components/atoms/button/Button";
import SwapIcon from "@public/icons/shuffle.svg";
import {
    Coin,
    Dropdown,
    DropdownButton,
    DropdownList,
    MaxGapRow,
    StyledCoinText,
    SwapLink,
} from "@dex/components/templates/transfer/Transfer.style";
import { TokenWithIcon } from "@dex/api-query/queries";
import { Components } from "@dex/api-query/__generated__/AxiosClient";

type SelectTokenProps = {
    isDeposit: boolean;
    isExpire?: boolean;
    left?: boolean;
    tokens: TokenWithIcon[] | undefined;
    onSelect(token: Components.Schemas.TokenMapItem): void;
    selected: Components.Schemas.TokenMapItem | undefined;
};

export const SelectToken: FC<SelectTokenProps> = ({ tokens, onSelect, selected, isDeposit, isExpire }) => {
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
                {selected && selectedIconUrl && !isExpire && (
                    <Image
                        src={selectedIconUrl}
                        alt={`${isDeposit ? selected.eth_name : selected.ccd_name} icon`}
                        height={23}
                        width={23}
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
                {isExpire
                    ? days.map((i, idx) => (
                          <Coin
                              onClick={() => {
                                  setOpen(false);
                              }}
                              key={idx}
                          >
                              <StyledCoinText fontWeight="light">
                                  {i} {i > 1 ? "day" : "days"}
                              </StyledCoinText>
                          </Coin>
                      ))
                    : sortedTokens?.map((tokenData) => {
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
                                      height={23}
                                      width={23}
                                  />
                                  <StyledCoinText fontWeight="light">{isDeposit ? eth_name : ccd_name}</StyledCoinText>
                              </Coin>
                          );
                      })}
            </DropdownList>
        </MaxGapRow>
    );
};

interface ValueProps {
    left: string;
    right: string;
    rightBlue?: boolean;
}

const Values = ({ left, right, rightBlue }: ValueProps) => {
    return (
        <div className="flex justify-between">
            <Text fontWeight="regular" fontColor="White" fontSize="14">
                {left}
            </Text>
            <Text
                fontWeight={rightBlue ? "bold" : "regular"}
                fontColor={rightBlue ? "#0095c8" : "White"}
                fontSize={rightBlue ? "24" : "14"}
            >
                {right}
            </Text>
        </div>
    );
};
export const dummyTokens = [
    {
        iconUrl: EthereumIcon,
        token: {
            ccd_name: "CCD",
            decimals: 1,
            eth_name: "Kava",
        },
    },
    {
        iconUrl: ConcordiumIcon,
        token: {
            ccd_name: "Kava",
            decimals: 1,
            eth_name: "CCD",
        },
    },
];

export const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
];

export const selectedDay = {
    ccd_name: "1 day",
    decimals: 1,
    eth_name: "1 day",
};

const MarketForm = () => {
    const [selectedTokens, setSelectedTokens] = useState(dummyTokens);
    return (
        <div className="flex justify-center">
            <div className="flex flex-col bg-app-black rounded-xl sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px] w-full md1:w-155">
                <div className="relative flex flex-col gap-12">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between text-sm mb-2">
                            <div className="font-normal text-gray-400">From</div>
                            <div className="font-normal text-gray-400">Balance: 2</div>
                        </div>
                        <div className="flex px-4 py-4  2xs:py-8 2xs:px-8 1xs:py-12 1xs:px-12 sm:py-4 sm:px-4 rounded-xl bg-app-black-button">
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
                            <Button onClick={() => console.log("hello")} className="!text-app-blue" variant="max">
                                Max
                            </Button>
                        </div>
                    </div>

                    <SwapLink>
                        <Image src={SwapIcon.src} alt="swap icon" width="24" height="24" />
                    </SwapLink>

                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between text-sm mb-2">
                            <div className="font-normal text-gray-400">To</div>
                            <div className="font-normal text-gray-400">Balance: 2</div>
                        </div>
                        <div className="flex items-center px-4 py-4 mb-4 2xs:py-8 2xs:px-8 1xs:py-12 1xs:px-12 sm:py-4 sm:px-4 rounded-xl bg-app-black-button">
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
                        </div>
                    </div>
                </div>
                <div className="mt-2 flex flex-col gap-3">
                    <Values left="Price" right="1 BTC = 31109.2 USDT" />
                    <Values left="Inverse Price" right="1 USDT = 31109.2 BTC" />
                    <Values left="You will recieve" right="1 BTC = 31109.2 USDT" rightBlue />
                </div>
                <div className="w-full h-0.5 my-2.5 bg-white/10" />
                <Text fontColor="DarkGrey">Please confirm conversion within the time</Text>
                <div className="my-5 bg-white/10 rounded-md p-5">
                    <Text fontColor="White" fontWeight="bold" fontSize="16">
                        1 AVA = 0.3371245 PIXP
                    </Text>
                </div>
                <div className="mt-2 flex flex-col gap-3">
                    <Values left="Pool Fee" right="0.01%" />
                    <Values left="Price Impact" right="0.23%" />
                    <Values left="Recieve at least" right="28.65558 PIXP.USDT" rightBlue />
                    <Text fontColor="DarkGrey" fontSize="14" fontWeight="regular" className="text-end">
                        (Slippage 15%)
                    </Text>
                    <Values left="Estimated NRG Fee" right="80.35691 CCD" rightBlue />
                </div>
                <Button
                    variant="rest"
                    onClick={() => console.log("hello")}
                    type="submit"
                    className="p-4 text-white h-16 mt-5 bg-app-blue text-lg"
                >
                    Confirm
                </Button>
            </div>
        </div>
    );
};

export default MarketForm;
