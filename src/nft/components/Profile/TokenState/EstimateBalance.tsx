import React, { useEffect, useState } from "react";
import { TokenList, NFTList, StakingList, SpotList, FiatList } from "./tokenAmount";

interface EstimateBalance {
    id: number;
}
interface templist {
    title1: string;
    title2: string;
}

const EstimateBalance = (props: EstimateBalance) => {
    const [tempList, SetTempList] = useState<templist>({
        title1: "",
        title2: "",
    });

    const Change = (id: number) => {
        let temp: templist;
        switch (id) {
            case 0:
                temp = SpotList;
                return temp;
            case 1:
                temp = FiatList;
                return temp;
            case 2:
                temp = TokenList;
                return temp;
            case 3:
                temp = NFTList;
                return temp;
            case 4:
                temp = StakingList;
                return temp;
            default:
                return {
                    title1: "",
                    title2: "",
                };
        }
    };
    useEffect(() => {
        SetTempList(Change(props.id));
    }, [props.id]);

    return (
        <div className="flex flex-col my-auto">
            <div className="text-app-black-duration pt-2 text-base">Estimate Balance</div>
            <div className="font-semibold text-3xl">{tempList.title1}</div>
            <div className="text-app-black-duration pt-10 text-base">Estimate Balance</div>
            <div className="font-semibold my-1 text-3xl">{tempList.title2}</div>
        </div>
    );
};

export default EstimateBalance;
