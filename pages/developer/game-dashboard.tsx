import { CustomSwitch } from "@launchpad/components/styledComponents/CustomSwitch";
import GameDashboardPage from "@nft/components/GameDashboard";
import { Form, Switch } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";

function GameDashboard() {
    const [profileButtonIndex, setProfileButtonIndex] = useState("info");
    const [edit, setEdit] = useState(false);
    const navigate = useRouter();
    const handleClickArrow = () => {
        navigate.back();
    };
    return (
        <>
            <div className="flex pt-11 flex-col justify-between w-full mb-5 xl:px-14 lg:px-6 px-2">
                <div className="flex justify-between">
                    <div
                        className="flex items-center justify-center w-12 h-12 rounded-lg bg-app-black-button hover:bg-app-blue self-start"
                        onClick={handleClickArrow}
                    >
                        <svg
                            className="h-6 w-6 text-white"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="5" y1="12" x2="11" y2="18" />
                            <line x1="5" y1="12" x2="11" y2="6" />
                        </svg>
                    </div>
                    <div className="text-2xl 2xs:text-3xl 1xs:text-[40px] font-semibold">Game Dashboard</div>
                    <div />
                </div>
                <div className="flex justify-center">
                    <div className="flex gap-x-[20px] mt-[20px]">
                        <button
                            className={`${
                                profileButtonIndex === "info" ? "bg-[#0095C8]" : "bg-[#29313C]"
                            } px-[30px] py-[15px] items-center rounded-[5px] font-semibold text-[18px]`}
                            onClick={() => setProfileButtonIndex("info")}
                        >
                            INFO
                        </button>
                        <button
                            className={`${
                                profileButtonIndex === "lobby" ? "bg-[#0095C8]" : "bg-[#29313C]"
                            } px-[30px] py-[15px] items-center rounded-[5px] font-semibold text-[18px]`}
                            onClick={() => setProfileButtonIndex("lobby")}
                        >
                            LOBBY
                        </button>
                    </div>
                </div>
                {profileButtonIndex === "lobby" && (
                    <div className="flex text-3xl items-center font-semibold mt-3.5 justify-center gap-2">
                        Edit{" "}
                        <CustomSwitch className="max-h-[50px]" checkedColor="" uncheckedColor="">
                            <Form.Item>
                                <Switch
                                    checkedChildren="Yes"
                                    unCheckedChildren="No"
                                    className="game_switch"
                                    checked={edit}
                                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                                    onChange={setEdit}
                                />
                            </Form.Item>
                        </CustomSwitch>
                    </div>
                )}
            </div>
            {profileButtonIndex === "lobby" ? <GameDashboardPage edit={edit} /> : null}
        </>
    );
}

export default GameDashboard;
