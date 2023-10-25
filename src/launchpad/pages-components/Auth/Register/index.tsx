import React, { FormEvent } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";
import { Button, Form, Input } from "antd";
import { IconContext } from "react-icons";
import Link from "next/link";
import { useAppContext } from "@launchpad/context/AppContext";

const Register = () => {
    const { account } = useAppContext();
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData);
        console.log({ ...formValues, wallet: account });
    }

    return (
        <>
            <div className="bg-main min-h-screen w-full relative">
                <div className="banner-bg w-full min-h-screen">
                    <div className="flex flex-col-reverse lg:flex-row py-36 px-8 md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48 min-h-screen gap-8 lg:gap-16">
                        <div className="grid grid-col-1 lg:w-1/3 w-full text-white content-center">
                            <div className="text-6xl font-semibold mb-4">Register</div>
                            <div className="text-2xl font-normal">New to Pixpel? Create your account.</div>
                            <div className="login-form">
                                <Form
                                    name="normal_login"
                                    className="login-form mt-14"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onSubmitCapture={handleSubmit}
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
                                            name="username"
                                            prefix={
                                                <IconContext.Provider value={{ color: "#7D7D7D" }}>
                                                    <FaUserAlt className="site-form-item-icon text-[22px] mr-4" />
                                                </IconContext.Provider>
                                            }
                                            className="form-username h-14 text-[18px] font-medium"
                                            placeholder="Username or e-mail"
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
                                            name="password"
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
                                    <Form.Item
                                        name="confirmPassword"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your Password!",
                                            },
                                        ]}
                                    >
                                        <Input
                                            name="confirmPassword"
                                            prefix={
                                                <IconContext.Provider value={{ color: "#7D7D7D" }}>
                                                    <RiLock2Fill className="site-form-item-icon text-[22px] mr-4" />
                                                </IconContext.Provider>
                                            }
                                            type="password"
                                            className="h-14 text-[18px] font-medium"
                                            placeholder="Confirm Password"
                                        />
                                    </Form.Item>

                                    <div className="flex gap-4 justify-between">
                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                rel="noreferrer"
                                                className="flex flex-col bg-app-blue py-2 px-6 justify-center items-center text-lg font-medium rounded-full w-32 xs:w-49 h-12 mt-2"
                                            >
                                                Register
                                            </Button>
                                        </Form.Item>
                                        <Form.Item>
                                            <Link
                                                href="/launchpad/"
                                                rel="noreferrer"
                                                className="flex flex-col bg-app-green text-white hover:bg-app-green-hover hover:text-white py-2 px-6 justify-center items-center text-lg font-medium rounded-full w-32 xs:w-49 h-12 mt-2"
                                            >
                                                <div className="items-center my-auto mx-auto">Sign In</div>
                                            </Link>
                                        </Form.Item>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
