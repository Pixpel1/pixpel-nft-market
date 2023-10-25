import React, { useState } from "react";
import DeveloperStartAccountOverview from "./StartAccount/DeveloperStartAccountOverview";
import TokenButton from "../Button/TokenButton";
import { tokenList, tokencoinList, fiatList } from "./dataList";
import { useAppContext } from "@nft/contexts/AppContext";
import CoinTable from "./StartAccount/CoinTable";
import WithdrawModal from "./Modal/WithdrawModal";
import TransferModal from "./Modal/TransferModal";
import { useRouter } from "next/router";

const DeveloperStartAccount = () => {
    const context = useAppContext();
    const [showModal, setShowModal] = useState(false);
    const [showTransferModal, setShowTransferModal] = useState(false);
    const [selectedType, setSelectedType] = useState(1);
    const navigate = useRouter();
    const handleFiatClick = (idx: number) => async () => {
        switch (idx) {
            case 0:
                context.setSelectedIndex?.(1);
                break;
            case 1:
                setShowModal(true);
                break;
            default:
                break;
        }
    };
    const handleTokenCoinClick = (idx: number) => async () => {
        switch (idx) {
            case 0:
                context.setSelectedIndex?.(1);
                break;
            case 1:
                navigate.push("/withdraw");
                break;
            case 3:
                setShowTransferModal(true);
                break;
            case 4:
                navigate.push("/swap-master");
                break;
            default:
                break;
        }
    };
    const handleClick = (idx: number) => () => {
        setSelectedType(idx);
    };

    return (
        <>
            <div className="flex flex-col">
                <DeveloperStartAccountOverview selected={selectedType} />
                <div className="flex gap-4 mt-6">
                    {tokenList.map((menu, idx) => {
                        return (
                            <TokenButton
                                key={idx}
                                title={menu.title}
                                selected={selectedType === idx}
                                handleClick={handleClick(idx)}
                            />
                        );
                    })}
                </div>
                <div className="flex gap-4 mt-6 mb-5 xs:flex-row flex-col">
                    {selectedType === 0
                        ? fiatList.map((menu, idx) => {
                              return (
                                  <TokenButton
                                      key={idx}
                                      title={menu.title}
                                      handleClick={handleFiatClick(idx)}
                                      selected={false}
                                  />
                              );
                          })
                        : tokencoinList.map((menu, idx) => {
                              return (
                                  <TokenButton
                                      key={idx}
                                      title={menu.title}
                                      handleClick={handleTokenCoinClick(idx)}
                                      selected={false}
                                  />
                              );
                          })}
                </div>
                <CoinTable idx={selectedType} />
            </div>
            {<WithdrawModal showModal={showModal} setShowModal={setShowModal} />}
            {<TransferModal showModal={showTransferModal} setShowModal={setShowTransferModal} />}
        </>
    );
};

export default DeveloperStartAccount;
