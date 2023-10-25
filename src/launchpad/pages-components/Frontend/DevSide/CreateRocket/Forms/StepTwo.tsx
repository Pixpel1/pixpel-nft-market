/* eslint-disable @typescript-eslint/no-explicit-any */
import CalenderIcon from "@launchpad/assets/developer/icons/calender.png";
import CalenderIconFill from "@launchpad/assets/developer/icons/calender_fill.png";
import AngelInvestorModal from "@launchpad/components/Modal/AngelInvestorModal";
import { useAppContext } from "@launchpad/context/AppContext";
import { DatePicker, Form, InputNumber, message } from "antd";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import Image from "next/image";
import { Dispatch, SetStateAction, useRef, useState } from "react";
dayjs.extend(customParseFormat);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

interface StepTwo {
    stepOneValidate: (val: number) => void;
    classes: string;
    formInstance: any;
    vestingReleases: any;
    setvestingReleases: Dispatch<SetStateAction<any>>;
    setRocketFee: Dispatch<SetStateAction<number>>;
    setSecurityDeposit: Dispatch<SetStateAction<number>>;
    setTotalFee: Dispatch<SetStateAction<number>>;
    previewClicked: boolean;
    setPreviewClicked: Dispatch<SetStateAction<boolean>>;
}

const StepTwo = ({
    stepOneValidate,
    classes,
    formInstance,
    setvestingReleases,
    setRocketFee,
    setSecurityDeposit,
    setTotalFee,
    setPreviewClicked,
}: StepTwo) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [cliffDays, setCliffDays] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [investerYearCards, setInvesterYearCards] = useState<any[]>([]);
    const [form]: any = Form.useForm();
    const { handleKeyDown } = useAppContext();
    // const handleWhiteList = (e) => {
    //     setWhiteList(e.target.value);
    // };
    // const range = (start: number, end: number) => {
    //     const result: number[] = [];
    //     for (let i = start; i < end; i++) {
    //         result.push(i);
    //     }
    //     return result;
    // };
    function isFloat(number: number) {
        return Number(number) === number && number % 1 !== 0;
    }
    const disabledDate = (current: Dayjs) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf("day");
    };
    // const disabledDateTime = () => ({
    //     disabledHours: () => range(0, 24).splice(4, 20),
    //     disabledMinutes: () => range(30, 60),
    //     disabledSeconds: () => [55, 56],
    // });
    // const token_release_data = (perCycleRelease, releaseDate) => {
    //     const newValue = [id, { per_cycle_release: perCycleRelease, release_time: releaseDate }];
    //     let previousDate = [...vestingReleases].pop();

    // }
    const validateStartDate = (rule: any, value: Date, callback: (val?: string) => void) => {
        if (rule.field === "startDate") {
            const startDate = value.toISOString();
            const endDate = formInstance.getFieldValue("endDate").toISOString();
            if (endDate && dayjs(startDate).isBefore(dayjs(endDate))) {
                callback();
            } else {
                callback("Start Date must be before End Date");
            }
        }
        if (rule.field === "endDate") {
            const endDate = value.toISOString();
            const startDate = formInstance.getFieldValue("startDate").toISOString();
            if (startDate && dayjs(endDate).isSameOrAfter(dayjs(startDate))) {
                callback();
            } else {
                callback("End Date must be greater than Start Date");
            }
        }
    };

    const validateSoftCap = (rule: any, value: string, callback: (val?: string) => void) => {
        const softCap = parseFloat(value);
        const hardCap = formInstance.getFieldValue("hardcap");
        if (softCap < hardCap) {
            callback();
        } else {
            callback("SoftCap must be less than HardCap");
        }
    };
    const validateHardCap = (rule: any, value: string, callback: (val?: string) => void) => {
        const hardCap = parseFloat(value);
        const softCap = parseFloat(formInstance.getFieldValue("softcap"));
        const softCapValue = Number(softCap) + (Number(softCap) / 100) * 40;
        if (hardCap > softCapValue) {
            callback();
        } else {
            callback("Hardcap must be 40% higher than the Softcap");
        }
    };
    const validateMinimumBuy = (rule: any, value: string, callback: (val?: string) => void) => {
        const minimumBuy = parseFloat(value);
        const maximumBuy = formInstance.getFieldValue("maximumBuy");
        if (minimumBuy < maximumBuy) {
            callback();
        } else {
            callback("Minimum Buy must be above zero (0)");
        }
    };
    const validateMaximumBuy = (rule: any, value: string, callback: (val?: string) => void) => {
        const maximumBuy = parseFloat(value);
        const minimumBuy = formInstance.getFieldValue("minimumBuy");
        const hardCap = formInstance.getFieldValue("hardcap");

        if (maximumBuy > minimumBuy && maximumBuy < hardCap) {
            callback();
        } else {
            callback("Maximum Buy must be above the Minimum Buy & Below to Hard Cap");
        }
    };
    const validateFirstRelease = (rule: any, value: any[], callback: (val?: string) => void) => {
        const cliffValue = Number(formInstance.getFieldValue("cliff_days"));
        if (rule.field === "cliff_days" && isFloat(cliffValue)) {
            console.log("cliff_days", cliffValue);
            callback("Cliff days must be a number");
        } else if (rule.field === "endDate" && cliffDays && !value) {
            messageApi.open({
                type: "error",
                content: "Please Select End Date",
                duration: 10,
            });
            callback("End date must be after cliff days");
        } else if (rule.field === "first_fundRelease" && cliffDays && value.length === 0) {
            messageApi.open({
                type: "error",
                content: "Please Enter Initial Fund Release",
                duration: 10,
            });
            callback("Percentage above 1%");
        } else {
            callback();
        }
    };

    const handleSoftCapChange = (e: any) => {
        const hardCap = parseFloat(`${e}`);
        form.setFieldsValue({ hardcap: hardCap });
        stepOneValidate(2);
    };
    const handleHardCapChange = (e: any) => {
        form.setFieldsValue({ softcap: formInstance.getFieldValue("softcap") });
        form.validateFields(["hardcap"]);
        formInstance.validateFields(["softcap"]);
        const hardcap = e;
        const rocketFee = Number(hardcap) / 100;
        const securityFee = (Number(hardcap) / 100) * 5;
        const totalFee = Math.floor(rocketFee + securityFee + 30);
        setRocketFee(rocketFee);
        setSecurityDeposit(securityFee);
        setTotalFee(totalFee);
        stepOneValidate(2);
    };

    const handleMinimumBuyChange = (e: any) => {
        const maximumBuy = parseFloat(`${e}`);
        form.setFieldValue({ maximumBuy: maximumBuy });
        stepOneValidate(2);
    };
    const handleMaximumBuyChange = (e: any) => {
        const minimumBuy = parseFloat(`${e}`);
        form.setFieldValue({ minimumBuy: minimumBuy });
        stepOneValidate(2);
    };
    const handleStartDateChange = () => {
        const endDate = formInstance.getFieldValue("endDate");
        form.setFieldValue({ endDate: endDate });
        stepOneValidate(2);
    };
    const handleEndDateChange = () => {
        const startDate = formInstance.getFieldValue("startDate");
        form.setFieldValue({ startDate: startDate });
        stepOneValidate(2);
    };

    const handleCliffDays = (e: any) => {
        const cliffValueDays = e;
        setCliffDays(cliffValueDays);
        formInstance.setFieldValue({ cliff_days: cliffValueDays });
        form.validateFields(["endDate", "first_fundRelease"], (errors: any, values: any) => {
            if (errors) {
                console.log("errors", errors);
            }
            console.log("values", values);
        });
        stepOneValidate(2);
    };

    const calenderRefOne = useRef<any>(null);
    const calenderRef = useRef<any>(null);

    const handleDatePickerFill = () => {
        calenderRefOne.current.src = CalenderIconFill;
    };
    const handleDatePicker = () => {
        calenderRefOne.current.src = CalenderIcon;
    };
    const handleDatePickerTwoFill = () => {
        calenderRef.current.src = CalenderIconFill;
    };
    const handleDatePickerTwo = () => {
        calenderRef.current.src = CalenderIcon;
    };

    const handlePopupContainer = (trigger: { parentNode: any }) => {
        return trigger.parentNode; // Use the immediate parent as the container
    };
    const handleVestingPreview = () => {
        const InvesterYearCards: any[] = [];
        formInstance
            .validateFields([
                "hardcap",
                "token_amount",
                "endDate",
                "first_fundRelease",
                "second_fundRelease",
                "cliff_days",
                "lockup_days",
                "fund_vesting_cycle_period_days",
                "fund_release_each_cycle_percent",
                "cliff_period",
            ])
            .then((values: any) => {
                const {
                    hardcap,
                    endDate,
                    first_fundRelease,
                    second_fundRelease,
                    cliff_days,
                    lockup_days,
                    fund_vesting_cycle_period_days,
                    fund_release_each_cycle_percent,
                } = values;

                // token Tokens based on hardcap
                // first release date will start from end_date+clif_days
                const firstReleaseDate = dayjs(endDate.add(cliff_days, "day")).toISOString();

                const firstRelease = Number(first_fundRelease);
                const secondRelease = Number(second_fundRelease);
                const releaseCycle = Number(fund_release_each_cycle_percent);
                const releaseGap = Number(fund_vesting_cycle_period_days);

                let i = 0;
                const arr: [number, { per_cycle_release: number; release_time: any }][] = [];
                const arrDb: { per_cycle_release: number; id: number; release_time: any }[] = [];

                let addDate: string;
                const addDays = () => {
                    if (addDate) {
                        const now = new Date(addDate);
                        addDate = new Date(now.setDate(now.getDate() + releaseGap)).toISOString();
                    } else {
                        addDate = firstReleaseDate;
                    }
                    return addDate;
                };

                do {
                    if (i === 0) {
                        arr.push([arr.length + 1, { per_cycle_release: firstRelease, release_time: addDays() }]);
                        arrDb.push({ id: arrDb.length + 1, per_cycle_release: firstRelease, release_time: addDays() });
                        i += firstRelease;
                    } else if (arr.length === 1) {
                        arr.push([arr.length + 1, { per_cycle_release: secondRelease, release_time: addDays() }]);
                        arrDb.push({ id: arrDb.length + 1, per_cycle_release: secondRelease, release_time: addDays() });

                        i += secondRelease;
                    } else {
                        if (i + releaseCycle > 100) {
                            const diff = 100 - i;
                            if (diff > 0) {
                                arr.push([arr.length + 1, { per_cycle_release: diff, release_time: addDays() }]);
                                arrDb.push({ id: arrDb.length + 1, per_cycle_release: diff, release_time: addDays() });
                            }
                            i += diff;
                        } else {
                            arr.push([arr.length + 1, { per_cycle_release: releaseCycle, release_time: addDays() }]);
                            arrDb.push({
                                id: arrDb.length + 1,
                                per_cycle_release: releaseCycle,
                                release_time: addDays(),
                            });
                        }
                        i += releaseCycle;
                    }
                } while (i <= 100);
                console.log(arr);
                setvestingReleases({ launchpadReleaseDates: arr, dbReleaseDates: arrDb });

                arr.forEach(([id, { per_cycle_release, release_time }]) => {
                    const date = new Date(release_time);
                    const year = date.getFullYear();
                    const month = date.toLocaleString("default", { month: "long" });

                    const card = {
                        id: id,
                        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                        title: `${id + 1}${id === 0 ? "st" : id === 1 ? "nd" : id === 2 ? "rd" : "th"} Release`,
                        month,
                        tokens: `${(Number(hardcap) * per_cycle_release) / 100}`,
                    };

                    let yearObj: {
                        id: number;
                        year: number | string;
                        cards: any[];
                    } = InvesterYearCards.find((item) => item.year === year);
                    if (!yearObj) {
                        yearObj = {
                            id: InvesterYearCards.length + 1,
                            year,
                            cards: [],
                        };
                        if (yearObj) {
                            InvesterYearCards.push(yearObj);
                        }
                    }

                    yearObj.cards.push(card);
                });
                setInvesterYearCards(InvesterYearCards);

                setShowModal(true);
                // }
                // else {
                // const lastItem = [...instanceArr].pop();
                // const releaseDateValue = dayjs(lastItem[1].release_time);
                // let eachCycleAmountV = (tokenAmountV / 100) * fund_release_each_cycle_percent;
                // tokenAmountV -= eachCycleAmountV;
                // token_release_data(eachCycleAmountV, dayjs(releaseDateValue.add(fund_vesting_cycle_period_days, 'day')).toISOString())
                // instanceArr.push([instanceArr.length, { id: Number(instanceArr.length + 1), per_cycle_release: eachCycleAmountV, release_time: dayjs(releaseDateValue.add(fund_vesting_cycle_period_days, 'day')).toISOString() }])
                // instanceArr.forEach(([id, { per_cycle_release, release_time }]) => {
                //     const date = new Date(release_time);
                //     const year = date.getFullYear();
                //     const month = date.toLocaleString('default', { month: 'long' });

                //     const card = {
                //         id: id + 1,
                //         title: `${id + 1}${id === 0 ? 'st' : id === 1 ? 'nd' : id === 2 ? 'rd' : 'th'} Release`,
                //         month,
                //         tokens: `${hardcap * per_cycle_release / 100}`,
                //     };

                //     let yearObj = InvesterYearCards.find((item) => item.year === year);
                //     if (!yearObj) {
                //         yearObj = {
                //             id: InvesterYearCards.length + 1,
                //             year,
                //             cards: [],
                //         };
                //         InvesterYearCards.push(yearObj);
                //     }

                //     yearObj.cards.push(card);
                // });
                // if (instanceArr.length === 3) {
                //     setInvesterYearCards(InvesterYearCards);
                //     setShowModal(true);
                // }

                const lockup_daysV = arr.length * cliff_days;
                if (Number(lockup_days) !== lockup_daysV) {
                    messageApi.open({
                        type: "error",
                        content: `Lockup days should be equals to ${lockup_daysV}`,
                    });
                }
                setPreviewClicked(true);
            })
            .catch((errorInfo: any) => {
                messageApi.open({
                    type: "error",
                    content: "Please input all fields",
                });
                console.log("Validation error:", errorInfo);
            });
    };

    return (
        <>
            <div className={"space-y-20 " + classes}>
                {contextHolder}
                <div className="flex flex-col">
                    <h2 className="text-3xl text-app-blue font-semibold mt-8">Rocket Conditions (CCD)</h2>
                    <div className="grid grid-cols-2 gap-x-32 mt-8">
                        <Form.Item
                            label="SoftCap"
                            name="softcap"
                            className="mb-0 rounded-xl"
                            rules={[{ required: true }, { validator: validateSoftCap }]}
                            help="SoftCap must be less than HardCap"
                        >
                            <InputNumber onChange={handleSoftCapChange} onKeyDown={handleKeyDown} placeholder="0" />
                        </Form.Item>
                        <Form.Item
                            label="HardCap"
                            name="hardcap"
                            className="mb-0 rounded-xl"
                            help="Hardcap must be 40% higher than the Softcap"
                            rules={[{ required: true }, { validator: validateHardCap }]}
                        >
                            <InputNumber onChange={handleHardCapChange} onKeyDown={handleKeyDown} placeholder="0" />
                        </Form.Item>
                        <Form.Item
                            label="Minimum Buy"
                            name="minimumBuy"
                            className="mb-0 rounded-xl"
                            help="Minimum Buy must be above zero (0)"
                            rules={[
                                { required: true, message: "Minimum Buy must be above zero (0)" },
                                { validator: validateMinimumBuy },
                            ]}
                        >
                            <InputNumber onChange={handleMinimumBuyChange} onKeyDown={handleKeyDown} placeholder="0" />
                        </Form.Item>
                        <Form.Item
                            label="Maximum Buy"
                            name="maximumBuy"
                            className="mb-0 rounded-xl"
                            help="Maximum Buy must be above the Minimum Buy & Below to Hard Cap"
                            rules={[
                                {
                                    required: true,
                                    message: "Maximum Buy must be above the Minimum Buy & Below to Hard Cap",
                                },
                                { validator: validateMaximumBuy },
                            ]}
                        >
                            <InputNumber onChange={handleMaximumBuyChange} onKeyDown={handleKeyDown} placeholder="0" />
                        </Form.Item>
                    </div>
                </div>
                <div className="flex flex-col w-full my-20">
                    <h2 className="text-3xl text-app-blue font-semibold mb-2">Select Start Date & End Date</h2>
                    <div className="grid grid-cols-2 gap-x-32 gap-y-12">
                        <Form.Item
                            label="Start Date ( UTC )"
                            name="startDate"
                            className="mb-0 rounded-xl w-full custom-date-container"
                            rules={[
                                { required: true, message: "Please Select Start Date" },
                                { validator: validateStartDate },
                            ]}
                        >
                            <DatePicker
                                format="YYYY-MM-DD HH:mm:ss"
                                showTime={{
                                    defaultValue: dayjs("00:00:00", "HH:mm:ss"),
                                }}
                                disabledDate={disabledDate}
                                popupClassName="datepicker-popup"
                                suffixIcon={<Image src={CalenderIcon} alt="calender" ref={calenderRefOne} />}
                                getPopupContainer={handlePopupContainer}
                                onMouseEnter={handleDatePickerFill}
                                onMouseLeave={handleDatePicker}
                                onChange={handleStartDateChange}
                                className="w-full bg-app-black-button border-0 shadow-none h-[55px] custom-datepicker hover:border-none"
                            />
                        </Form.Item>
                        <Form.Item
                            label="End Date ( UTC )"
                            name="endDate"
                            className="mb-0 rounded-xl w-full"
                            rules={[
                                { required: true, message: "Please Select End Date" },
                                { validator: validateFirstRelease },
                                { validator: validateStartDate },
                            ]}
                        >
                            <DatePicker
                                format="YYYY-MM-DD HH:mm:ss"
                                showTime={{
                                    defaultValue: dayjs("00:00:00", "HH:mm:ss"),
                                }}
                                onChange={handleEndDateChange}
                                disabledDate={disabledDate}
                                popupClassName="datepicker-popup"
                                suffixIcon={<Image src={CalenderIcon} alt="calender" ref={calenderRef} />}
                                getPopupContainer={handlePopupContainer}
                                onMouseEnter={handleDatePickerTwoFill}
                                onMouseLeave={handleDatePickerTwo}
                                className="w-full bg-app-black-button border-0 shadow-none h-[55px] custom-datepicker hover:border-none"
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-20">
                    <div className="flex mb-8 space-x-4">
                        <h2 className="text-3xl text-app-blue font-semibold">Vesting terms</h2>
                        <button
                            className="text-lg font-medium bg-app-blue hover:bg-app-blue-hover ease-in duration-300 px-3 py-2 rounded-md"
                            onClick={handleVestingPreview}
                        >
                            Vesting Preview
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-x-32 gap-y-6">
                        <Form.Item
                            label="The Initial Fund Release (%)"
                            name="first_fundRelease"
                            className="mb-0 w-full rounded-xl"
                            help="Percentage above 1%"
                            rules={[
                                { required: true, message: "Percentage above 1%" },
                                { validator: validateFirstRelease },
                            ]}
                        >
                            <InputNumber
                                onChange={() => {
                                    stepOneValidate(2);
                                }}
                                onKeyDown={handleKeyDown}
                                placeholder="Example: 40%"
                                className="placeholder:text-app-black-duration"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Second Fund Release (%)"
                            name="second_fundRelease"
                            className="mb-0 w-full rounded-xl"
                            help="Percentage above 1%"
                            rules={[{ required: true, message: "Percentage above 1%" }]}
                        >
                            <InputNumber
                                onChange={() => {
                                    stepOneValidate(2);
                                }}
                                onKeyDown={handleKeyDown}
                                placeholder="Example: 40%"
                                className="placeholder:text-app-black-duration"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Cliff (Days)"
                            name="cliff_days"
                            className="mb-0 w-full rounded-xl"
                            help="Period during which no tokens are awarded"
                            rules={[
                                { required: true, message: "Period during which no tokens are awarded" },
                                { validator: validateFirstRelease },
                            ]}
                        >
                            <InputNumber
                                onChange={handleCliffDays}
                                onKeyDown={handleKeyDown}
                                placeholder="Enter (Days). Ex: 3."
                                className="placeholder:text-app-black-duration"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Lockup Time (Days)"
                            name="lockup_days"
                            className="mb-0 w-full rounded-xl"
                            help="The overall duration of the token holding period"
                            rules={[{ required: true, message: "The overall duration of the token holding period" }]}
                        >
                            <InputNumber
                                onChange={() => {
                                    stepOneValidate(2);
                                }}
                                onKeyDown={handleKeyDown}
                                placeholder="Enter (Days). Ex: 3."
                                className="placeholder:text-app-black-duration"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Fund Vesting Cycle Period (days)"
                            name="fund_vesting_cycle_period_days"
                            className="mb-0 w-full rounded-xl"
                            help="The days when each payment cycle starts."
                            rules={[{ required: true, message: "The days when each payment cycle starts." }]}
                        >
                            <InputNumber
                                onChange={() => {
                                    stepOneValidate(2);
                                }}
                                placeholder="Enter (Days). Ex: 3."
                                className="placeholder:text-app-black-duration"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Fund Release Cycle (%)"
                            name="fund_release_each_cycle_percent"
                            className="mb-0 w-full rounded-xl"
                            help="The percentage amount to be released each cycle"
                            rules={[{ required: true, message: "The percentage amount to be released each cycle" }]}
                        >
                            <InputNumber
                                onChange={() => {
                                    stepOneValidate(2);
                                }}
                                onKeyDown={handleKeyDown}
                                placeholder="Example: 20%"
                                className="placeholder:text-app-black-duration"
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <AngelInvestorModal showModal={showModal} setShowModal={setShowModal} modalData={investerYearCards} />
        </>
    );
};

export default StepTwo;
