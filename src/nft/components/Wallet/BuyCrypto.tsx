import React, { ReactNode, useState } from "react";
import TokenButton from "../Button/TokenButton";
import { fiatList } from "./dataList";
import Sell from "../Crypto/P2P/Sell";
import Buy from "../Crypto/P2P/Buy";

const BuyCrypto = () => {
    const [modeSelected, setModeSelected] = useState(0);
    const [buysellSelected, setBuysellSelected] = useState(1);
    const [buyCryptoComponent, setBuyCryptoComponent] = useState<ReactNode>(<Sell />);
    let temp: ReactNode;
    const buysellclassName = "flex gap-3";
    const handleModeClick = (idx: number) => () => {
        setModeSelected(idx);
    };
    const handleBuyClick = (idx: number) => () => {
        setBuysellSelected(idx);
        switch (idx) {
            case 0:
                temp = <Buy />;
                break;
            case 1:
                temp = <Sell />;
                break;
            default:
                break;
        }
        setBuyCryptoComponent(temp);
    };
    return (
        <div>
            <div className="text-xl mb-4">Buy Crypto</div>
            <div className="flex justify-between mb-5">
                <div className="flex gap-3 ">
                    {fiatList.map((mode, idx) => {
                        return (
                            <TokenButton
                                key={idx}
                                title={mode.title}
                                selected={modeSelected === idx}
                                handleClick={handleModeClick(idx)}
                            />
                        );
                    })}
                </div>
                <div className={buysellclassName + (modeSelected === 2 ? " hidden" : " ")}>
                    {fiatList.map((menu, idx) => {
                        return (
                            <TokenButton
                                key={idx}
                                title={menu.title}
                                selected={buysellSelected === idx}
                                handleClick={handleBuyClick(idx)}
                            />
                        );
                    })}
                </div>
            </div>
            {buyCryptoComponent}
        </div>
    );
};

export default BuyCrypto;
