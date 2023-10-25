/* eslint-disable @typescript-eslint/no-explicit-any */
import RocketOne from "@launchpad/assets/developer/icons/rocket_1.png";
import RocketOneHover from "@launchpad/assets/developer/icons/rocket_1_hover.png";
import RocketTwo from "@launchpad/assets/developer/icons/rocket_2.png";
import RocketTwoHover from "@launchpad/assets/developer/icons/rocket_2_hover.png";
import RocketThree from "@launchpad/assets/developer/icons/rocket_3.png";
import RocketThreeHover from "@launchpad/assets/developer/icons/rocket_3_hover.png";
import { addIcon, iconEquals, iconRefresh } from "@launchpad/assets/icons";
import ConfirmLaunchPad from "@launchpad/components/Modal/ConfirmLaunchPad";
import HeaderWithPillsDev from "@launchpad/components/header/HeaderWithPills/HeaderWithPillsDev";
import { CustomSwitch } from "@launchpad/components/styledComponents/CustomSwitch";
import { useAppContext } from "@launchpad/context/AppContext";
import { balance_of, operator_of, update_operator } from "@launchpad/contracts/cis2";
import { LAUNCHPAD_INDEX, cis2_contract_methods, contract_methods } from "@launchpad/contracts/constant";
import { buy } from "@launchpad/contracts/dex";
import { create_rocket, view } from "@launchpad/contracts/rocket";
import { Form, Steps, Switch, message } from "antd";
import dayjs, { duration } from "dayjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RxCheckCircled } from "react-icons/rx";
import StepOne from "./Forms/StepOne";
import StepTwo from "./Forms/StepTwo";
import StepThree from "./Forms/StepThree";
import { CreateRocket } from "./style/style";
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "@launchpad/config/config";
const { Step } = Steps;

const CreateRockets = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [balance, setBalance] = useState(1);
    const [loadings, setLoadings] = useState(false);
    const [previewClicked, setPreviewClicked] = useState(false);
    const appContext = useAppContext();
    const { account, getRockets } = appContext;
    function renderIcon(iconName: ReactNode, size: string, color: string, classNames: string) {
        return (
            <IconContext.Provider value={{ color: color, size: size, className: classNames }}>
                <div>{iconName}</div>
            </IconContext.Provider>
        );
    }
    const [messageApi, contextHolder] = message.useMessage();

    const [vestingReleases, setvestingReleases] = useState<any>([]);
    const [totalFee, setTotalFee] = useState(3000);
    const [rocketFee, setRocketFee] = useState(1000);
    const [securityDeposit, setSecurityDeposit] = useState(1000);

    const [form]: any = Form.useForm();
    const stepOneRef = useRef<any>(null);
    const stepTwoRef = useRef<any>(null);
    const stepThreeRef = useRef<any>(null);
    const [whiteListValue, setWhiteListValue] = useState(0);

    const navigate = useRouter();
    const scrollToNextStep = (step: number) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const nextStepRef: any = document.getElementById(`step${step}`);
        nextStepRef.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const stepOneValidate = async (step: number) => {
        try {
            const fieldsToValidate = getFieldsToValidate(step);
            await form.validateFields(fieldsToValidate);

            if (form.getFieldError(fieldsToValidate).length === 0) {
                stepOneRef.current.src = RocketOneHover;
            }
        } catch (error) {
            setCurrentStep(step);
            if (step === 1) {
                stepOneRef.current.src = RocketOne;
                stepTwoRef.current.src = RocketTwo;
                stepThreeRef.current.src = RocketThree;
            }
            if (step === 2) {
                stepTwoRef.current.src = RocketTwo;
                stepThreeRef.current.src = RocketThree;
            }
            if (step === 3) {
                stepThreeRef.current.src = RocketThree;
            }
            console.log("Validation error:", error.message);
        }
    };

    const handleSwitchChangeStepOne = async (step: number) => {
        if (step === 2) {
            setCurrentStep(step - 1);
        }
        if (step === 1) {
            try {
                const fieldsToValidate = getFieldsToValidate(currentStep);
                await form.validateFields(fieldsToValidate);

                if (form.getFieldError(fieldsToValidate).length === 0) {
                    setCurrentStep(step + 1);
                    scrollToNextStep(step + 1);
                    stepOneRef.current.src = RocketOneHover;
                }
            } catch (error) {
                console.log("Validation error:", error);
            }
        }
    };

    const handleSwitchChangeStepTwo = async (step: number) => {
        if (step > 2) {
            setCurrentStep(step - 1);
        }
        if (!previewClicked) {
            messageApi.open({
                type: "error",
                content: "Please check Vesting Preview",
                duration: 10,
            });
            return;
        }
        if (step > 1 && step < 3) {
            try {
                const fieldsToValidate = getFieldsToValidate(currentStep);
                await form.validateFields(fieldsToValidate);

                if (form.getFieldError(fieldsToValidate).length === 0) {
                    setCurrentStep(step + 1);
                    scrollToNextStep(step + 1);
                    stepTwoRef.current.src = RocketTwoHover;
                }
            } catch (error) {
                // console.log('Validation error:', error);
            }
        }
    };

    const handleSwitchChangeStepThree = async (step: number) => {
        setCurrentStep(step + 1);
        stepThreeRef.current.src = RocketThreeHover;
        if (step > 3) {
            setCurrentStep(step - 1);
        }
    };

    const operatorOf = async () => {
        const param = [
            {
                owner: {
                    Account: [account],
                },
                address: {
                    Contract: [
                        {
                            index: LAUNCHPAD_INDEX,
                            subindex: 0,
                        },
                    ],
                },
            },
        ];

        console.log(param);
        const operator = await operator_of(param, cis2_contract_methods.OPERATOR_OF);
        return operator;
    };

    const updatOperator = async () => {
        const param = [
            {
                operator: {
                    Contract: [
                        {
                            index: LAUNCHPAD_INDEX,
                            subindex: 0,
                        },
                    ],
                },
                update: {
                    Add: [],
                },
            },
        ];

        console.log(param);

        await update_operator(param, cis2_contract_methods.UPDATE_OPERATOR);
    };

    const addToFirebase = async (
        title: any,
        logo_url: any,
        token_amount: number,
        description: any,
        softcap: number,
        hardcap: number,
        startDate: dayjs.Dayjs,
        endDate: dayjs.Dayjs,
        minimumBuy: number,
        maximumBuy: number,
        cliff_days: any,
        cliff_duration: number,
        website_url: any,
        fb_url: any,
        twitter_url: any,
        telegram_url: any,
        github_url: any,
        instagram_url: any,
        discord_url: any,
        reddit_url: any
    ) => {
        const start_date = dayjs(startDate).toISOString();
        const end_date = dayjs(endDate).toISOString();
        const hardCap5Percent = Number(hardcap * 5) / 100;
        const launchpad = {
            title: title,
            logo_url: logo_url,
            description: description,
            cancel: false,
            cis2_amount: Number(hardcap) * token_amount,
            cis2_price: Number(token_amount),
            dev_paid: Number(hardCap5Percent * 1e6),
            end_time: end_date,
            hard_cap: Number(hardcap * 1e6),
            holders: [],
            invest_amount: 0,
            address: account,
            amount: 0,
            live: true,
            live_pause_count: 0,
            maximum_invest: Number(maximumBuy * 1e6),
            minimum_invest: Number(minimumBuy * 1e6),
            owner: account,
            pause_start: new Date().toISOString(),
            pause_until: new Date().toISOString(),
            soft_cap: Number(softcap * 1e6),
            start_time: start_date,
            total_tx: 0,
            website_url: website_url || "",
            fb_url: fb_url || "",
            twitter_url: twitter_url || "",
            telegram_url: telegram_url || "",
            github_url: github_url || "",
            instagram_url: instagram_url || "",
            discord_url: discord_url || "",
            reddit_url: reddit_url || "",
            token_release_data: vestingReleases.dbReleaseDates,
            cliff_duration: cliff_duration,
            cliff_period: dayjs(endDate?.add(cliff_days, "day")).toISOString(),
        };

        console.log("launchpad", launchpad);
        try {
            const getLaunchpads = await view(contract_methods.VIEW);
            if (!getLaunchpads?.result?.total_launchpad) return alert("something went wrong");
            const ref = collection(db, "rockets"); // Firebase creates this automatically
            console.log(getLaunchpads?.result?.total_launchpad, launchpad, vestingReleases, hardcap, token_amount);
            await setDoc(doc(ref, getLaunchpads?.result?.total_launchpad), launchpad);
            // await axios.post("http://localhost:8000/launchpad/create", launchpad);
        } catch (err) {
            console.log(err);
        }
    };

    const onClickConfirm = async () => {
        try {
            const {
                title,
                logo_url,
                token_amount,
                description,
                softcap,
                hardcap,
                startDate,
                endDate,
                minimumBuy,
                maximumBuy,
                cliff_days,
                website_url,
                fb_url,
                twitter_url,
                telegram_url,
                github_url,
                instagram_url,
                discord_url,
                reddit_url,
            } = form.getFieldValue();

            if (!softcap || !hardcap || !startDate || !endDate || softcap === hardcap || softcap > hardcap) {
                return alert("please fill all required values");
            } else {
                const is_operator = await operatorOf();
                console.log(is_operator);
                if (!is_operator) {
                    await updatOperator();
                }
                console.log(is_operator);
                dayjs.extend(duration);
                const cliffDays = dayjs.duration(cliff_days, "days").asMilliseconds();
                const cliff_duration = dayjs.duration(cliff_days, "days").asMilliseconds();

                const hardcap_to_cdd = Number(hardcap * 1e6);
                const hard_cap_6_percent = Number(hardcap_to_cdd * 6) / 100;

                const create = {
                    start_time: dayjs(startDate).toISOString(),
                    end_time: dayjs(endDate).toISOString(),
                    live: true,
                    soft_cap: softcap * 1e6,
                    hard_cap: hardcap_to_cdd,
                    minimum_invest: minimumBuy * 1e6,
                    maximum_invest: maximumBuy * 1e6,
                    cliff_duration: cliffDays,
                    cis2_price: Number(token_amount),
                    token_param: {
                        id: "01",
                        address: {
                            index: 5112,
                            subindex: 0,
                        },
                        token_amount: (Number(hardcap) * token_amount).toString(),
                    },
                    token_release_data: vestingReleases.launchpadReleaseDates,
                };

                console.log(vestingReleases.launchpadReleaseDates, create);
                const result: any = await create_rocket(create, contract_methods.CREATE_LAUNCHPAD, hard_cap_6_percent);

                if (!result) {
                    messageApi.open({
                        type: "error",
                        content: "Transaction failed",
                        duration: 10,
                    });
                    setLoadings(false);
                    return;
                } else {
                    if (result && result.summary.transactionType === "failed") {
                        messageApi.open({
                            type: "error",
                            content: "Transaction failed",
                            duration: 10,
                        });
                        setLoadings(false);
                        return;
                    } else {
                        await addToFirebase(
                            title,
                            logo_url,
                            token_amount,
                            description,
                            softcap,
                            hardcap,
                            startDate,
                            endDate,
                            minimumBuy,
                            maximumBuy,
                            cliff_days,
                            cliff_duration,
                            website_url,
                            fb_url,
                            twitter_url,
                            telegram_url,
                            github_url,
                            instagram_url,
                            discord_url,
                            reddit_url
                        );

                        messageApi.open({
                            type: "success",
                            content: "Transaction success",
                            duration: 10,
                        });
                    }
                }
                setShowModal(false);
                setLoadings(false);
                getRockets();
                navigate.push("/launchpad/launchpad/developerside");
            }
        } catch (err) {
            messageApi.open({
                type: "error",
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                content: `Transaction failed ${err.message}`,
                duration: 10,
            });
        }
    };

    const getFieldsToValidate = (step: number) => {
        const fieldsToValidate: string[] = [];
        switch (step) {
            case 1:
                fieldsToValidate.push("title", "logo_url", "description", "token_amount");
                break;

            case 2:
                fieldsToValidate.push(
                    "softcap",
                    "hardcap",
                    "minimumBuy",
                    "maximumBuy",
                    "startDate",
                    "endDate",
                    "first_fundRelease",
                    "second_fundRelease",
                    "cliff_days",
                    "lockup_days",
                    "fund_vesting_cycle_period_days",
                    "fund_release_each_cycle_percent"
                );
                break;

            default:
                break;
        }

        return fieldsToValidate;
    };

    const getBalance = async () => {
        const params = [
            {
                address: {
                    Account: [account],
                },
                token_id: "01",
            },
        ];

        const balance_ = await balance_of(params, cis2_contract_methods.BALANCE_OF);
        setBalance(balance_);
    };

    const handleFormFinish = () => {
        // console.log("Form Values", values);
    };

    const buyPixpToken = async () => {
        const param = {
            id: "01",
            address: {
                index: 5112,
                subindex: 0,
            },
            amount: "10000",
        };

        await buy(param);
        getBalance();
        messageApi.open({
            type: "success",
            content: "Transaction Success!",
            duration: 2,
        });
    };

    useEffect(() => {
        getBalance();
        // eslint-disable-next-line
    }, []);

    const reactSingleIconF = (iconName: ReactNode, size: string, color: string, classNames: string) => {
        return (
            <IconContext.Provider value={{ color: color, size: size, className: classNames }}>
                <div>{iconName}</div>
            </IconContext.Provider>
        );
    };

    // if (typeof appContext.renderIcon === "function")
    return (
        <>
            {contextHolder}
            <CreateRocket currentStep={currentStep}>
                <HeaderWithPillsDev tabs={false} title="Create Rocket" />
                <div className="grid grid-cols-5 mx-auto mt-12">
                    <div className="col-span-4 bg-app-black-black_op_04 px-8 py-10">
                        <div className="flex justify-end items-center">
                            <button
                                onClick={() => buyPixpToken}
                                className=" bg-app-blue hover:bg-app-blue-hover mr-10 px-10 py-5  text-lg font-medium rounded-lg"
                            >
                                Buy 10000 Testnet PIXP token
                            </button>
                            <p>you have {balance} PIXP</p>
                        </div>
                        <Form form={form} layout="vertical" onFinish={handleFormFinish} className=" w-full">
                            <div id="step1" className={currentStep > 1 ? "pointer-events-none opacity-75" : ""}>
                                <StepOne
                                    stepOneValidate={() => stepOneValidate}
                                    formInstance={form}
                                    whiteListValue={whiteListValue}
                                    setWhiteListValue={setWhiteListValue}
                                />
                            </div>
                            <div
                                id="step2"
                                className={`mt-12 ${currentStep > 2 ? "pointer-events-none opacity-75" : ""}  ${
                                    currentStep === 1 ? "!hidden" : ""
                                } `}
                            >
                                <StepTwo
                                    stepOneValidate={() => stepOneValidate}
                                    formInstance={form}
                                    vestingReleases={vestingReleases}
                                    setvestingReleases={setvestingReleases}
                                    setRocketFee={setRocketFee}
                                    setSecurityDeposit={setSecurityDeposit}
                                    setTotalFee={setTotalFee}
                                    previewClicked={previewClicked}
                                    setPreviewClicked={setPreviewClicked}
                                    classes={`${currentStep === 1 ? "!hidden" : ""}`}
                                />
                            </div>
                            <div
                                id="step3"
                                className={`mt-5 ${currentStep > 3 ? "pointer-events-none opacity-75" : ""}`}
                            >
                                <StepThree
                                    stepOneValidate={() => stepOneValidate}
                                    classes={`${currentStep < 3 ? "!hidden" : ""}`}
                                />
                            </div>
                        </Form>
                    </div>

                    <Steps
                        direction="vertical"
                        current={currentStep}
                        className="py-10 pt-32 pl-10 bg-app-black-black_op_04 rocketSteps"
                    >
                        <Step
                            title={
                                <div className="flex flex-col justify-center items-center space-y-2">
                                    <p className="stepTitle text-4xl font-semibold my-3">Ready</p>
                                    <CustomSwitch checkedColor="" uncheckedColor="">
                                        <Form.Item>
                                            <Switch
                                                checkedChildren="Ready"
                                                unCheckedChildren="Not Ready"
                                                className="pixp_switch"
                                                checked={currentStep !== 1}
                                                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                                                onChange={() => handleSwitchChangeStepOne(currentStep)}
                                            />
                                        </Form.Item>
                                    </CustomSwitch>
                                    {currentStep < 2
                                        ? reactSingleIconF(<IoCloseCircleOutline />, "40px", "", "svgColor")
                                        : reactSingleIconF(<RxCheckCircled />, "40px", "", "svgColor success")}
                                </div>
                            }
                            icon={<Image src={RocketOne} alt="rocket_ready" ref={stepOneRef} />}
                        ></Step>

                        <Step
                            title={
                                <div className="flex flex-col justify-center items-center space-y-2">
                                    <p className="stepTitle  text-4xl font-semibold my-3">Set</p>
                                    <CustomSwitch checkedColor="" uncheckedColor="">
                                        <Form.Item>
                                            <Switch
                                                checkedChildren="Ready"
                                                unCheckedChildren="Not Ready"
                                                className="pixp_switch"
                                                checked={currentStep !== 1 && currentStep !== 2}
                                                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                                                onChange={() => handleSwitchChangeStepTwo(currentStep)}
                                            />
                                        </Form.Item>
                                    </CustomSwitch>
                                    {currentStep < 3
                                        ? reactSingleIconF(<IoCloseCircleOutline />, "40px", "", "svgColor")
                                        : reactSingleIconF(<RxCheckCircled />, "40px", "", "svgColor success")}
                                </div>
                            }
                            icon={<Image src={RocketTwo} alt="rocket_set" ref={stepTwoRef} />}
                            className={`${currentStep === 1 ? "!hidden " : ""}`}
                        />
                        <Step
                            title={
                                <div className="flex flex-col justify-center items-center space-y-2">
                                    <p className="stepTitle  text-4xl font-semibold my-3">Go</p>
                                    <CustomSwitch checkedColor="" uncheckedColor="">
                                        <Form.Item>
                                            <Switch
                                                checkedChildren="Ready"
                                                unCheckedChildren="Not Ready"
                                                className="pixp_switch"
                                                checked={currentStep !== 1 && currentStep !== 2 && currentStep !== 3}
                                                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                                                onChange={() => handleSwitchChangeStepThree(currentStep)}
                                            />
                                        </Form.Item>
                                    </CustomSwitch>
                                    {currentStep === 3
                                        ? reactSingleIconF(<IoCloseCircleOutline />, "40px", "", "svgColor")
                                        : reactSingleIconF(<RxCheckCircled />, "40px", "", "svgColor success")}
                                </div>
                            }
                            icon={<Image src={RocketThree} alt="rocket_go" ref={stepThreeRef} />}
                            className={currentStep < 3 ? "!hidden" : ""}
                        />
                    </Steps>
                </div>
                <div className="flex flex-col mt-10 items-center space-y-6">
                    <div className="grid grid-cols-12 place-items-center place-content-center">
                        <div className="col-span-2 text-center border border-app-black-duration px-4 py-8 space-y-4">
                            <h3 className="text-app-yellow text-2xl font-semibold">Rocket Creation Fee</h3>
                            <hr className="border-app-black-duration" />
                            <p className="uppercase text-xl font-medium ">{rocketFee} CCD</p>
                        </div>
                        <div className="col-span-1 text-center">
                            <Image src={addIcon} alt="plus" />
                        </div>
                        <div className="col-span-3 text-center border border-app-black-duration px-7 py-8 space-y-4">
                            <h3 className="text-app-yellow text-2xl font-semibold">Security Deposit Amount</h3>
                            <hr className="border-app-black-duration" />
                            <p className="uppercase text-xl font-medium ">{securityDeposit} CCD</p>
                        </div>
                        <div className="col-span-1">
                            <Image src={addIcon} alt="plus" />
                        </div>
                        <div className="col-span-2 text-center border border-app-black-duration px-7 py-8 space-y-4">
                            <h3 className="text-app-yellow text-2xl font-semibold">Gas Fee</h3>
                            <hr className="border-app-black-duration" />
                            <p className="uppercase text-xl font-medium ">30 CCD</p>
                        </div>
                        <div className="col-span-1">
                            <Image src={iconEquals} alt="equals_to" />
                        </div>
                        <div className="col-span-2 text-center border border-app-black-duration px-7 py-8 space-y-4">
                            <h3 className="text-app-yellow text-2xl font-semibold">Total</h3>
                            <hr className="border-app-black-duration" />
                            <p className="uppercase text-xl font-medium ">{totalFee} CCD</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-base font-medium text-app-yellow">
                            This quotation will expire in 30 seconds
                        </p>
                        <button className="bg-app-red hover:bg-app-red-hover p-2 rounded-sm">
                            <Image src={iconRefresh} alt="icon_refresh" />
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className={
                                (currentStep !== 1 && currentStep !== 2
                                    ? "bg-app-blue hover:bg-app-blue-hover"
                                    : "bg-app-black-duration_op_05 pointer-events-none") +
                                " px-10 py-5  text-lg font-medium rounded-lg"
                            }
                            onClick={() => {
                                setShowModal(true);
                            }}
                        >
                            Pay and Publish
                        </button>
                    </div>
                </div>
            </CreateRocket>

            <ConfirmLaunchPad
                showModal={showModal}
                setShowModal={setShowModal}
                onClickConfirm={() => onClickConfirm}
                totalFee={totalFee}
                loadings={loadings}
                setLoadings={setLoadings}
            />
        </>
    );
};

export default CreateRockets;
