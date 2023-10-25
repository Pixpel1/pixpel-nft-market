import React, { useEffect, useState } from "react";
import { Form, Progress, Statistic, Switch, Tooltip, message } from "antd";
import { CustomSwitch } from "@launchpad/components/styledComponents/CustomSwitch";
import CalenderTick from "@launchpad/assets/icons/calendar_tick.png";
import TransactionHistory from "@launchpad/components/Modal/TransactionHistory";
import CancelFunding from "@launchpad/components/Modal/CancelFunding";
import { is_live } from "@launchpad/contracts/rocket";
import { contract_methods } from "@launchpad/contracts/constant";
import { microCcdToCcdString } from "@launchpad/helpers/amount";
import calculate_progress from "@launchpad/helpers/calculate_progress";
import dayjs from "dayjs";
import { getSelectedRocket } from "@launchpad/helpers/requests/getSelectedRocket";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@launchpad/config/config";
import Image from "next/image";
const { Countdown } = Statistic;

interface Rocket {
    borderRight: boolean;
    rocket: {
        cancel: boolean;
        cis2_amount: number;
        cis2_price: number;
        launchpad_id: string;
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
    finalized: boolean;
}

const Rocket = (props: Rocket) => {
    const [showModal, setShowModal] = useState(false);
    const [isLive, setIsLive] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const handleCanclePopup = () => {
        setShowCancelModal(true);
    };

    const [messageApi, contextHolder] = message.useMessage();

    const {
        live,
        soft_cap,
        hard_cap,
        end_time,
        cancel,
        holders,
        total_tx,
        invest_amount,
        pause_until,
        id,
        pause_start,
        live_pause_count,
        cis2_price,
        cis2_amount,
        doc_id,
        title,
    } = props.rocket;

    const onChange = (checked: boolean) => {
        if (live_pause_count > 3) {
            messageApi.open({
                type: "error",
                content: `You can't pause launchpad more than 3 times`,
            });
        } else {
            const now = new Date().toISOString().toString();
            if (now < pause_until.toString()) {
                const a = dayjs(pause_start);
                const add_12_hour = a.add(12, "h");
                messageApi.open({
                    type: "error",
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    content: `You can't turn live launchpad until, ${add_12_hour}`,
                });
            } else {
                const param = {
                    id: Number(doc_id),
                    is_live: checked,
                };
                console.log(param, contract_methods, id, doc_id);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const result: any = is_live(param, contract_methods.Live_PAUSE);
                if (result?.summary.transactionType === "failed") {
                    messageApi.open({
                        type: "error",
                        content: "Transaction Failed",
                    });
                } else {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const getCurrentRocket: any = getSelectedRocket(doc_id as string);
                    const rocketData = { ...getCurrentRocket };
                    console.log(rocketData);
                    delete rocketData.id;

                    if (rocketData.live) {
                        const now = new Date();
                        rocketData.pause_start = new Date().toISOString();
                        rocketData.pause_until = new Date(now.setDate(now.getDate() + 2)).toISOString();
                        rocketData.live_pause_count += 1;
                    } else {
                        rocketData.pause_start = new Date().toISOString();
                        rocketData.pause_until = new Date().toISOString();
                    }
                    rocketData.live = !rocketData.live;

                    const rocketRef = collection(db, "rockets");

                    setDoc(doc(rocketRef, getCurrentRocket?.id), rocketData);

                    messageApi.open({
                        type: "success",
                        content: "Transaction Success",
                    });
                    setIsLive(checked);
                }
            }
        }
    };

    useEffect(() => {
        setIsLive(live);
        // eslint-disable-next-line
    }, [props.rocket]);

    return (
        <div
            className={
                "flex flex-col  max-w-screen-1xs " +
                (props?.borderRight
                    ? "relative after:border-r after:border-app-gray-gray_5 after:absolute after:-right-4 2xl:after:-right-12 after:h-full"
                    : "")
            }
        >
            {contextHolder}
            <div className="flex flex-wrap bg-app-black-select py-6 justify-center px-32 text-center rounded-tl-2xl rounded-tr-2xl border-b-2 border-app-gray-gray_5">
                <h2 className="text-4xl whitespace-nowrap mx-auto  font-semibold uppercase">{title}</h2>
            </div>
            <div className="flex flex-col bg-app-black-button rounded-bl-2xl rounded-br-2xl px-5 pt-5">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold">Soft - Hard</h3>
                    </div>
                    <div className="flex">
                        <p
                            className={
                                "px-4 py-1 rounded-sm inline-flex items-center text-base font-medium " +
                                (cancel
                                    ? "text-app-black bg-app-black-duration"
                                    : props.finalized
                                    ? "bg-app-yellow-finalized"
                                    : live
                                    ? "text-black bg-app-green"
                                    : "text-black bg-app-orange")
                            }
                        >
                            <span className={"bg-white w-1 h-1 mr-2 rounded-full"}></span>{" "}
                            {cancel ? "Cancelled" : props.finalized ? "Finalized" : live ? "Live" : "Paused"}
                        </p>
                    </div>
                </div>
                <div className="flex -mt-2 mb-1">
                    <p className="text-base font-medium text-app-blue">
                        {microCcdToCcdString(soft_cap)} PIXP - {microCcdToCcdString(hard_cap)} CCD
                    </p>
                </div>
                <div className="flex">
                    <Progress
                        percent={cancel ? 0 : Number(calculate_progress(invest_amount, hard_cap).toFixed(2))}
                        size={[-1, 18]}
                        className="relative fundingProgress mr-0 mb-1"
                    />
                </div>
                <div className="flex justify-between mb-4">
                    <div className="flex flex-col">
                        <p className="text-sm font-semibold text-app-black-duration">
                            {" "}
                            {(Number(microCcdToCcdString(invest_amount)) * Number(cis2_price)).toFixed(2)} PIXP ={" "}
                            {Number(microCcdToCcdString(invest_amount)).toFixed(2)} CCD
                        </p>
                        <p className="text-sm font-semibold text-app-black-duration">Tokens Sold</p>
                    </div>
                    <div className="flex flex-col text-right">
                        <p className="text-sm font-semibold text-app-black-duration">
                            {cis2_amount} PIXP = {Number(cis2_amount) / Number(cis2_price)} CCD
                        </p>
                        <p className="text-sm font-semibold text-app-black-duration">Tokens Offered</p>
                    </div>
                </div>
                <div className="flex justify-between py-4 border-b border-t border-app-black-duration">
                    <div className="flex flex-col space-y-1">
                        <p className="text-base font-medium">
                            No. Of Investors: <span className="text-app-blue">{holders.length}</span>
                        </p>
                        <p className="text-base font-medium">
                            Used Wallets: <span className="text-app-blue">{holders.wallet}</span>
                        </p>
                        <p className="text-base font-medium">
                            Transactions: <span className="text-app-blue">{total_tx}</span>
                        </p>
                        <p className="text-base font-medium">
                            Most Used Coins: <span className="text-app-blue">CCD</span>
                        </p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        {cancel ? (
                            ""
                        ) : (
                            <>
                                <CustomSwitch checkedColor="" uncheckedColor="#FF5F17">
                                    <Form.Item name="switch" valuePropName="checked" noStyle>
                                        <Switch style={{ display: "none" }} />
                                        <Switch
                                            checked={isLive}
                                            onChange={onChange}
                                            checkedChildren="Live"
                                            unCheckedChildren="Paused"
                                            className="pixp_switch rocket_switch"
                                        />
                                    </Form.Item>
                                </CustomSwitch>
                                <button
                                    disabled={cancel}
                                    className="bg-app-red hover:bg-app-red-hover py-1 uppercase rounded-lg text-base font-semibold"
                                    onClick={handleCanclePopup}
                                >
                                    {cancel ? "Canceled" : "Cancel"}
                                </button>
                            </>
                        )}

                        <button className="bg-app-blue-details hover:bg-app-blue-hover  py-1 uppercase rounded-lg text-base font-semibold px-2 mt-auto">
                            Details
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-center py-6">
                    <div className="flex flex-col">
                        <p className="text-base font-semibold">Remaining Time:</p>
                        <p className="text-base font-semibold">
                            <Countdown
                                value={cancel ? 0 : end_time}
                                className="font-medum text-xs 1xs:text-sm 2xl1:text-base"
                                format="D:HH:mm:ss"
                                valueStyle={{
                                    fontSize: "16px",
                                }}
                            />
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <Tooltip
                            placement="left"
                            title="Transaction History"
                            color="white"
                            overlayInnerStyle={{ color: "black" }}
                        >
                            <button
                                className="p-2 bg-app-black-duration hover:bg-app-blue rounded-full"
                                onClick={() => {
                                    setShowModal(true);
                                }}
                            >
                                <Image src={CalenderTick} alt="transaction_history" />
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <TransactionHistory showModal={showModal} setShowModal={setShowModal} />
            <CancelFunding showModal={showCancelModal} setShowModal={setShowCancelModal} id={id} />
        </div>
    );
};

export default Rocket;
