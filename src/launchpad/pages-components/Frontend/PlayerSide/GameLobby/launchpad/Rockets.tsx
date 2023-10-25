/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingOutlined } from "@ant-design/icons";
import { db } from "@launchpad/config/config";
import { useAppContext } from "@launchpad/context/AppContext";
import { contract_methods } from "@launchpad/contracts/constant";
import { vest } from "@launchpad/contracts/rocket";
import { microCcdToCcdString } from "@launchpad/helpers/amount";
import calculate_progress from "@launchpad/helpers/calculate_progress";
import { minMaxInvest } from "@launchpad/helpers/minMaxInvest";
import { getHolderById } from "@launchpad/helpers/requests/getHoldersById";
import { getSelectedRocket } from "@launchpad/helpers/requests/getSelectedRocket";
import { Form, InputNumber, Progress, Spin, Statistic, message } from "antd";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
        rev={undefined}
    />
);

const { Countdown } = Statistic;

const Rockets = () => {
    const [tokenValue, setTokenValue] = useState("");
    const [ccdAmount, setCcdamount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [rocket, setRocket] = useState<any>();
    const [reloadData, setReloadData] = useState(true);

    const { account, getRockets } = useAppContext();
    console.log(tokenValue);
    const params = useRouter().query;
    const [form] = Form.useForm();
    const [buyToken, setBuyToken] = useState(false);

    const handleChange = (e: number | null) => {
        console.log(e);
        setTokenValue(`${e}`);
        setCcdamount(e || 0);
    };

    const handlePixpAmountValidation = (rule: any, value: string, callback: (val?: string) => void) => {
        const pixpAmount = parseInt(value);
        const amount: any = pixpAmount / rocket?.cis2_price;
        const remainingInvestAmount = getRemainingInvestAmount();
        if (
            amount &&
            (remainingInvestAmount < microCcdToCcdString(minMaxInvest(rocket)?.min as number)
                ? amount <= remainingInvestAmount
                : amount >= microCcdToCcdString(minMaxInvest(rocket)?.min as number) &&
                  amount <= microCcdToCcdString(minMaxInvest(rocket)?.max as number)) &&
            rocket.invest_amount !== rocket.hard_cap
        ) {
            callback();
            setBuyToken(true);
        } else {
            callback(``);
            setBuyToken(false);
        }
    };

    const invest = async () => {
        try {
            setLoading(true);

            if (rocket) {
                const amount = Number(ccdAmount / rocket.cis2_price);
                const To_CCD = Math.round(amount * 1e6);

                const maximumLimit = microCcdToCcdString(minMaxInvest(rocket)?.max as number);
                const minimumLimit = microCcdToCcdString(minMaxInvest(rocket)?.min as number);

                const findHolder = rocket.holders.find((item: { address: string }) => item.address === account); // find the existing holder
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                const totalInvestment = findHolder ? findHolder.amount + To_CCD : To_CCD; // check if the holder already exist or not

                // holder total investment must not be maximum of limit of indivdual holder maximum limit
                if (totalInvestment > Number(rocket.maximum_invest)) {
                    return messageApi.open({
                        type: "error",
                        content: `Your total invest in this launchpad exceeded`,
                        duration: 10,
                    });
                }

                if (
                    typeof maximumLimit === "number" &&
                    typeof minimumLimit === "number" &&
                    amount <= maximumLimit &&
                    amount >= minimumLimit
                ) {
                    const invested_amount = Number(rocket.invest_amount);
                    const hardcap = Number(rocket.hard_cap);

                    if (hardcap < invested_amount + amount) {
                        messageApi.open({
                            type: "error",
                            content: `invested amount must less or equal than ${microCcdToCcdString(
                                hardcap - invested_amount
                            )} `,
                            duration: 10,
                        });
                        setLoading(false);
                        return;
                    } else {
                        const param = {
                            launchpad_id: Number(params.id),
                            token_amount: ccdAmount,
                        };
                        const result: any = await vest(param, contract_methods.VEST, To_CCD);
                        if (!result) {
                            messageApi.open({
                                type: "error",
                                content: `Transaction failed due to wrong param`,
                                duration: 10,
                            });
                        }
                        if (result?.summary.transactionType === "failed") {
                            messageApi.open({
                                type: "error",
                                content: `Transaction failed`,
                                duration: 10,
                            });
                        } else {
                            await updateHolderInDB();
                            messageApi.open({
                                type: "success",
                                content: `Transaction success`,
                                duration: 10,
                            });
                        }
                    }
                } else {
                    messageApi.open({
                        type: "error",
                        content: `Transaction failed`,
                        duration: 10,
                    });
                    setLoading(false);
                }
            } else {
                messageApi.open({
                    type: "error",
                    content: `Invested amount must match the condition of min & max invest amount`,
                    duration: 15,
                });
                setLoading(false);
                return;
            }
        } catch (err) {
            console.log(err.message);
        } finally {
            setLoading(false);
            getRockets();
            setReloadData(true);
        }
    };

    const updateHolderInDB = async () => {
        try {
            const getCurrentHolder = await getHolderById(params.id as string, account);
            const getCUrrentRocket: any = await getSelectedRocket(params.id as string);

            console.log(getCurrentHolder, getCUrrentRocket);
            const data = { ...getCurrentHolder };
            const rocketData = { ...getCUrrentRocket };
            data.claimable_token += Number(ccdAmount);

            const ref = collection(db, "holders");
            const rocketRef = collection(db, "rockets");
            delete rocketData.id;

            const amount = Number(ccdAmount / rocketData.cis2_price);
            const findHolder = getCUrrentRocket?.holders.find((item: { address: string }) => item.address === account);

            // add new holder in db if holder not exist
            if (getCUrrentRocket?.holders.length < 1 || !findHolder) {
                console.log("ll");
                const holder = {
                    address: account,
                    amount: Number(amount * 1e6),
                };
                rocketData.holders = [...rocketData.holders, holder];
                rocketData.invest_amount += Number(amount * 1e6);
                rocketData.total_tx += 1;

                await setDoc(doc(rocketRef, getCUrrentRocket.id), rocketData);

                const newHolder = {
                    address: account,
                    claimable_token: ccdAmount,
                    cycle_completed: 0,
                    launchpad_id: rocket.id,
                    vested_date: new Date().toISOString(),
                };

                await addDoc(collection(db, "holders"), newHolder);
                return;
            }

            const findHolderIdx = getCUrrentRocket.holders.findIndex(
                (item: { address: string }) => item.address === account
            );
            console.log(findHolderIdx);
            if (findHolderIdx !== -1) {
                rocketData.invest_amount += Number(amount * 1e6);
                rocketData.holders[findHolderIdx].amount += Number(amount * 1e6);
                rocketData.total_tx += 1;

                await setDoc(doc(rocketRef, getCUrrentRocket.id), rocketData);
            }

            delete data.doc_id;

            await setDoc(doc(ref, getCurrentHolder.doc_id), data);
        } catch (err) {
            console.log(err.message);
        }
    };

    const getRocketData = async () => {
        const findRocketByID = await getSelectedRocket(params.id as string);
        setRocket(findRocketByID);
        setReloadData(false);
    };

    useEffect(() => {
        if (reloadData) {
            getRocketData();
        }
        //eslint-disable-next-line
    }, [reloadData]);

    if (!rocket) return <Spin size="large" />;

    const { invest_amount, hard_cap, end_time, cancel, soft_cap, cis2_price } = rocket;
    const getRemainingInvestAmount = () => {
        const remainingInvestAmount = microCcdToCcdString(rocket.hard_cap - rocket.invest_amount);
        return remainingInvestAmount;
    };
    return (
        <>
            {contextHolder}
            {/* <button onClick={updateHolderInDB} >add</button> */}
            <div className="flex max-1xs:flex-col max-1xs:space-y-4 justify-between mt-28 mb-4">
                <h3 className="text-3xl  lg:text-4xl font-bold uppercase mr-auto">Rockets</h3>
                <p className="bg-app-black-button flex items-center gap-2 px-4 py-2 text-base  1xs:text-lg font-medium rounded-md">
                    Finishes in:
                    <Countdown
                        value={rocket.length > 0 ? end_time : new Date()}
                        className="font-medum text-xs 1xs:text-sm 2xl1:text-base"
                        format="D:HH:mm:ss"
                        valueStyle={{
                            fontSize: "16px",
                        }}
                    />
                </p>
            </div>
            <div className="grid mt-14">
                <div className="flex flex-wrap max-preferencemd:gap-y-8 max-preferencemd:justify-center justify-between items-center">
                    <div className="flex flex-col basis-[content]">
                        <h3 className="text-3xl font-semibold uppercase">1 CCD = {cis2_price} PIXP</h3>
                        <p className="uppercase text-base font-medium">
                            SALE TYPE: <span className="text-app-blue">PUBLIC</span>
                        </p>
                    </div>

                    <div className="flex flex-col max-1xs:shrink 1xs:basis-[content]">
                        <h3 className="text-3xl font-medium mx-auto uppercase mb-4">Buy Tokens</h3>
                        <div className="flex max-1xs:flex-col max-1xs:space-y-4  items-center justify-center buy-pixp-tokens">
                            {loading ? (
                                <Spin indicator={antIcon} />
                            ) : (
                                <>
                                    <Form form={form} className="flex">
                                        <div className="flex text-lg font-semibold  px-4 py-2 rounded-xl items-center relative">
                                            <Form.Item
                                                name="pixp_amount"
                                                className="pr-14 bg-app-black-button rounded-xl mb-0"
                                                rules={[{ required: true }, { validator: handlePixpAmountValidation }]}
                                            >
                                                <InputNumber
                                                    value={ccdAmount || 0}
                                                    onChange={handleChange}
                                                    controls={false}
                                                    placeholder="100 PIXP"
                                                    className="text-lg bg-app-black-button outline-none border-0 !border-e-0 !border-[unset] !shadow-none focus:border-0 focus:shadow-none hover:border-0 hover:shadow-none text-white w-full h-11 flex items-center rounded-xl"
                                                />
                                            </Form.Item>

                                            <span className="flex relative -ml-14">PIXP</span>
                                        </div>
                                        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                                        <button
                                            disabled={loading}
                                            onClick={invest}
                                            className={
                                                "text-lg  font-bold text-black px-6 py-1 rounded-xl ml-2 my-[10px] " +
                                                (!buyToken
                                                    ? "pointer-events-none bg-app-black-duration"
                                                    : " bg-app-yellow hover:bg-app-yellow-hover")
                                            }
                                        >
                                            Buy
                                        </button>
                                    </Form>
                                </>
                            )}
                        </div>

                        <div className="flex flex-col shrink grow-0 border border-app-gray-gray_5 p-2 text-center mt-2 mx-10">
                            {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
                            <p className="text-base font-medium uppercase mx-auto">
                                {" "}
                                Preview :{" "}
                                <span className="text-app-blue font-semibold">{`${
                                    ccdAmount ? ccdAmount : cis2_price
                                } PIXP = ${
                                    ccdAmount ? Number(ccdAmount / cis2_price).toFixed(1) : "1"
                                } CCD`}</span>{" "}
                            </p>
                            {getRemainingInvestAmount() < microCcdToCcdString(minMaxInvest(rocket)?.min as number) && (
                                <p className="text-[12px] text-red-500 uppercase mx-auto">
                                    {" "}
                                    Only {getRemainingInvestAmount()} CCD Remains
                                </p>
                            )}
                        </div>
                        <div className="flex justify-center mt-2">
                            <p className="text-[14px] font-medium text-app-black-duration">{`Max Amount ${microCcdToCcdString(
                                minMaxInvest(rocket)?.max as number
                            )} CCD - Min Amount ${microCcdToCcdString(minMaxInvest(rocket)?.min as number)} CCD`}</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-1xs:shrink 1xs:basis-[content]">
                        <div className="flex justify-between">
                            <p>{microCcdToCcdString(soft_cap)} CCD</p>
                            <Progress
                                percent={cancel ? 0 : calculate_progress(invest_amount, hard_cap)}
                                size={[-1, 18]}
                                className="relative fundingProgress mx-2 h-8 mb-1 max-w-full w-60"
                            />
                            <p>{microCcdToCcdString(hard_cap)} CCD</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rockets;
