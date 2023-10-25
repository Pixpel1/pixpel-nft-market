/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { detectConcordiumProvider } from "@concordium/browser-wallet-api-helpers";
import { getAllRockets } from "@launchpad/helpers/requests/getAllRockets";
import { message } from "antd";
import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
// import { IconContext } from "react-icons";

interface AppContext {
    rockets: any[];
    loading: boolean;
    rocket: {
        cancel: boolean;
        cis2_amount: number;
        launchpad_id: string;
        cis2_price: number;
        cliff_duration: number;
        id: string;
        doc_id: string;
        cliff_period: string;
        description: string;
        dev_paid: number;
        discord_url: string;
        end_time: string;
        fb_url: string;
        github_url: string;
        hard_cap: number;
        holders: {
            length: number;
            wallet: string;
        };
        address: string;
        amount: number;
        instagram_url: string;
        invest_amount: number;
        live: boolean;
        live_pause_count: number;
        logo_url: string;
        maximum_invest: number;
        minimum_invest: number;
        owner: string;
        pause_start: string;
        pause_until: string;
        reddit_url: string;
        soft_cap: number;
        start_time: string;
        telegram_url: string;
        title: string;
        token_release_data: {
            id: number;
            per_cycle_release: number;
            release_time: string;
        }[];
        total_tx: number;
        twitter_url: string;
        website_url: string;
    };
    lockupDetail: any;
    account: string;
    getLaunchpadById: (val: number | string) => any;
    setLockupDetail: Dispatch<SetStateAction<any>>;
    handleKeyDown: (url: any) => any;
    getRockets: () => any;
}

export const AppContext = createContext<AppContext>({} as AppContext);

interface AppContextProvider {
    children: ReactNode;
}
export const AppContextProvider = ({ children }: AppContextProvider) => {
    const [rockets, setRockets] = useState<AppContext["rocket"][]>([]);
    const [rocket, setRocket] = useState<any>([]);
    const [lockupDetail, setLockupDetail] = useState([]);
    const [loading, setLoading] = useState(false);
    const [account, setAccount] = useState("");

    const [messageApi, contextHolder] = message.useMessage();

    const handleKeyDown = (event: any) => {
        // Allow only numeric keys (0-9)
        if (
            !(
                event.key === "Backspace" ||
                event.key === "Delete" ||
                event.key === "Tab" ||
                event.key === "Enter" ||
                (event.key >= "0" && event.key <= "9")
            )
        ) {
            event.preventDefault();
        }
    };

    const getRockets = async () => {
        try {
            setLoading(true);

            const data = await getAllRockets();
            if (!data)
                return messageApi.open({
                    type: "error",
                    content: "Please connect to the wallet",
                    duration: 10,
                });

            // const filteredData = data.filter((item) => {
            //     const endTime = dayjs(item.end_time);
            //     const currentTime = dayjs();
            //     const hardCap = item.hard_cap;
            //     const investAmount = item.invest_amount;
            //     return endTime.isAfter(currentTime) && hardCap !== investAmount;
            // });

            setRockets(data);
        } catch (err) {
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    };

    const getLaunchpadById = (id: string | number) => {
        // eslint-disable-next-line
        const filterLaunchpad = rockets.filter((rocket: AppContext["rocket"]) => Number(rocket.id) === Number(id));
        setRocket(filterLaunchpad);
    };

    const getAcount = async () => {
        const provider = await detectConcordiumProvider();
        const account = await provider.getMostRecentlySelectedAccount();
        setAccount(account || "");
    };

    useEffect(() => {
        getRockets();
        // eslint-disable-next-line
    }, [account]);

    useEffect(() => {
        getAcount();
    }, []);

    return (
        <>
            {contextHolder}
            <AppContext.Provider
                value={{
                    rockets,
                    loading,
                    rocket,
                    lockupDetail,
                    account,
                    getLaunchpadById,
                    setLockupDetail,
                    handleKeyDown,
                    getRockets,
                }}
            >
                {children}
            </AppContext.Provider>
        </>
    );
};

export default AppContextProvider;

export const useAppContext: () => AppContext = () => useContext(AppContext);
