import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";
import { Button, Form, Input } from "antd";
import { IconContext } from "react-icons";
import CustomCheckbox from "@launchpad/components/checkbox/CustomCheckbox";
import Link from "next/link";

const index = () => {
    return (
        <>
            <div className="banner-bg w-full min-h-screen">
                <div className="flex flex-col-reverse lg:flex-row py-36 px-8 md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48 min-h-screen gap-8 lg:gap-16">
                    <div className="grid grid-col-1 lg:w-1/3 w-full text-white content-center">
                        <div className="text-6xl font-semibold mb-4">Sign In</div>
                        <div className="text-2xl font-normal">
                            Invest wisely with Pixpel´s top rated and award - winning platform.
                        </div>
                        <div className="login-form">
                            <Form
                                name="normal_login"
                                className="login-form mt-14"
                                initialValues={{
                                    remember: true,
                                }}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your Username!",
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={
                                            <IconContext.Provider value={{ color: "#7D7D7D" }}>
                                                <FaUserAlt className="site-form-item-icon text-[22px] mr-4" />
                                            </IconContext.Provider>
                                        }
                                        className="form-username h-14 text-[18px] font-medium"
                                        placeholder="Username"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your Password!",
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={
                                            <IconContext.Provider value={{ color: "#7D7D7D" }}>
                                                <RiLock2Fill className="site-form-item-icon text-[22px] mr-4" />
                                            </IconContext.Provider>
                                        }
                                        type="password"
                                        className="h-14 text-[18px] font-medium"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <CustomCheckbox classes="inline-flex" />
                                    </Form.Item>

                                    <Link
                                        className="login-form-forgot float-right text-xl font-medium italic text-white mr-1"
                                        href=""
                                    >
                                        Forgot password?
                                    </Link>
                                </Form.Item>

                                <div className="flex gap-4 justify-between">
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            rel="noreferrer"
                                            className="flex flex-col bg-app-blue py-2 px-6 justify-center items-center text-lg font-medium rounded-full w-49 h-12 mt-2"
                                        >
                                            Login
                                        </Button>
                                    </Form.Item>
                                    <Form.Item>
                                        <Link
                                            href="/launchpad/register"
                                            rel="noreferrer"
                                            className="flex flex-col bg-app-green text-white hover:bg-app-green-hover hover:text-white py-2 px-6 justify-center items-center text-lg font-medium rounded-full w-49 h-12 mt-2"
                                        >
                                            <div className="items-center my-auto mx-auto">Register</div>
                                        </Link>
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
