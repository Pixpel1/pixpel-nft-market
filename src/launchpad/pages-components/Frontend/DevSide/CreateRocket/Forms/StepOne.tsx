/* eslint-disable @typescript-eslint/no-explicit-any */
import LogoUrlIcon from "@launchpad/assets/developer/icons/logo_url.png";
import { CCD, PixpLogo } from "@launchpad/assets/icons";
import TokenDropDown from "@launchpad/components/DropDown/TokenDropDown";
import { useAppContext } from "@launchpad/context/AppContext";
import { blockChain, tokens } from "@launchpad/important/datalist";
import { Form, Input, InputNumber, Radio } from "antd";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

interface StepOne {
    stepOneValidate: (val: number) => void;
    whiteListValue: number;
    setWhiteListValue: Dispatch<SetStateAction<number>>;
    formInstance: any;
}

const StepOne = ({ stepOneValidate, whiteListValue, setWhiteListValue }: StepOne) => {
    const { TextArea } = Input;
    const [tokenAmountValue, setTokenAmountValue] = useState(0);

    // const [exchangeCoin, setExchangeCoin] = useState("ccd");

    const { handleKeyDown } = useAppContext();
    // const handleCoinChange = (e) => {
    //     setExchangeCoin(e.target.value);
    // };
    function get_url_extension(url: string) {
        return url?.split(/[#?]/)[0]?.split(".")?.pop()?.trim();
    }
    function isUrlValid(url: string) {
        try {
            new URL(url);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
    const validateLogo = (rule: any, value: string, callback: (arg0?: string) => void) => {
        const logoExtension = get_url_extension(value);
        const valid =
            value &&
            (logoExtension === "png" ||
                logoExtension === "jpg" ||
                logoExtension === "jpeg" ||
                logoExtension === "gif") &&
            isUrlValid(value);
        if (valid) {
            callback();
        } else {
            callback("URL must end with a supported image extension png, jpg, jpeg or gif.");
        }
    };

    const whiteListChange = (e: any) => {
        setWhiteListValue(e.target.value);
    };

    // const getAcount = async () => {
    //     const provider = await detectConcordiumProvider();
    //     const account = await provider.connect();
    //     return account;
    // };
    // const buyPixpFaucet = async () => {
    //     try {
    //         const account = await getAcount();
    //         const mint_token = {
    //             owner: {
    //                 Account: [account],
    //             },
    //             tokens: [
    //                 [
    //                     "01",
    //                     {
    //                         metadata_url: {
    //                             hash: {
    //                                 None: [],
    //                             },
    //                             url: "https://pixpel.io/metadata/PIXP/",
    //                         },
    //                         token_amount: "10000000",
    //                     },
    //                 ],
    //             ],
    //         };
    //         const buy_token = await mint(mint_token, cis2_contract_methods.MINT);
    //     } catch (err) {
    //         console.log(err.message);
    //     }
    // };

    const handleTokenAmount = (value: number | null) => {
        if (value) {
            setTokenAmountValue(value);
            stepOneValidate(1);
        }
    };

    return (
        <>
            <div className="flex flex-col">
                <h2 className="text-3xl text-app-blue font-semibold mb-8">General Description</h2>
                <div className="grid grid-cols-5 gap-x-10 gap-6">
                    <div className="col-span-2">
                        <Form.Item
                            label="Title"
                            name="title"
                            className="mb-0 rounded-xl"
                            rules={[{ required: true, message: "Please enter a launchpad title" }]}
                        >
                            <Input
                                onChange={() => {
                                    stepOneValidate(1);
                                }}
                                placeholder="Pixpel Launchpad"
                            />
                        </Form.Item>
                    </div>
                    <div className="col-span-2">
                        <Form.Item
                            label="Logo (URL)"
                            name="logo_url"
                            className="mb-0 rounded-xl"
                            help="URL must end with a supported image extension png, jpg, jpeg or gif."
                            rules={[
                                {
                                    required: true,
                                    message: "URL must end with a supported image extension png, jpg, jpeg or gif.",
                                },
                                { validator: validateLogo },
                            ]}
                        >
                            <Input
                                onChange={() => {
                                    stepOneValidate(1);
                                }}
                                placeholder="https://pixpel.io/image.png"
                                className="py-0"
                                prefix={<Image src={LogoUrlIcon} className="flex py-0 h-5" alt="logo_url" />}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-span-1">
                        <Form.Item label="White List" name="whitelist">
                            <Radio.Group className="flex" onChange={whiteListChange} value={whiteListValue}>
                                <Radio value="disable" checked>
                                    {" "}
                                    Disable{" "}
                                </Radio>
                                <Radio value="enable">Enable </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                </div>
                <Form.Item
                    label="Description"
                    name="description"
                    className="mb-0 rounded-xl w-full"
                    rules={[{ required: true, message: "Please enter remarks." }]}
                >
                    <TextArea
                        onChange={() => {
                            stepOneValidate(1);
                        }}
                        rows={6}
                        className="placeholder:text-app-black-duration resize-none"
                        placeholder="Ex: This is the best project..."
                    />
                </Form.Item>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center space-x-4">
                    <h2 className="text-3xl text-app-blue font-semibold my-8">Token Price</h2>
                </div>
                <div className="grid grid-cols-3 gap-x-10">
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-4xl font-medium">1.Choose Funding Coin</h3>
                        <div className="flex flex-col items-center bg-app-black py-8 px-4  space-y-10 rounded-lg">
                            <div className="flex space-x-8">
                                <TokenDropDown items={blockChain} title="BlockChain" />
                                <TokenDropDown items={tokens} title="Token" />
                            </div>
                            <p className="text-3xl text-app-yellow font-semibold">1 CCD</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-4xl font-medium">2.Choose Game Token</h3>
                        <div className="flex flex-col items-center bg-app-black py-8 px-4  space-y-6 rounded-lg">
                            <div className="flex space-x-8">
                                <TokenDropDown items={blockChain} title="BlockChain" />
                                <TokenDropDown items={tokens} title="Token" />
                            </div>
                            <Form.Item
                                name="token_amount"
                                className="mb-0 rounded-xl"
                                rules={[{ required: true, message: "Please enter a token amount" }]}
                            >
                                <InputNumber
                                    onChange={handleTokenAmount}
                                    onKeyDown={handleKeyDown}
                                    className="stepOne !bg-app-black-button text-3xl"
                                    placeholder="Input Amount"
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-4xl font-medium">3.Confirm Token Price</h3>
                        <div className="flex mx-auto justify-center bg-app-black py-9 px-4  space-x-16 rounded-lg w-full">
                            <div className="flex flex-col items-center space-y-2">
                                <span className="text-2xl font-semibold capitalize">Per</span>
                                <h3 className="text-2xl font-semibold text-app-yellow uppercase">1 ccd</h3>
                                <Image src={CCD} className="w-8 h-8" alt="ccd" />
                            </div>
                            <hr className="w-0.5 border-0 h-full bg-app-black-duration" />
                            <div className="flex flex-col items-center space-y-2">
                                <span className="text-2xl font-semibold capitalize">Get</span>
                                <h3 className="text-2xl font-semibold text-app-yellow uppercase">
                                    {tokenAmountValue ? tokenAmountValue : "100"} pixp
                                </h3>
                                <Image src={PixpLogo} className="w-8 h-8" alt="pixp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepOne;
