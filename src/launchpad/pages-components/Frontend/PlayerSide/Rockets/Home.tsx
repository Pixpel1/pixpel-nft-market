/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
import filterIcon from "@launchpad/assets/icons/filter.png";
import search from "@launchpad/assets/icons/search.svg";
import CheckboxDropDown from "@launchpad/components/DropDown/CheckboxDropDown";
import Paginate from "@launchpad/components/Navigation/Paginate";
import HeaderWithPills from "@launchpad/components/header/HeaderWithPills/HeaderWithPills";
import ProjectCard from "@launchpad/components/projectCard/ProjectCard";
import Rocket from "@launchpad/components/rocket/Rocket";
import { StickyRocket } from "@launchpad/components/stickyRocket/StickyRocket";
import { db } from "@launchpad/config/config";
import { useAppContext } from "@launchpad/context/AppContext";
import { contract_methods } from "@launchpad/contracts/constant";
import { view } from "@launchpad/contracts/rocket";
import { classList } from "@launchpad/important/datalist";
import { Spin } from "antd";
import { collection, doc, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ProjectContainer } from "./styled/home";

const Home = () => {
    const router = useRouter();
    const slugParams = router.pathname;
    const [rocketClicked, setRocketClicked] = useState(false);
    const [projectDirection, setProjectDirection] = useState(false);

    const { rockets } = useAppContext();

    const handleRocketClick = () => {
        setRocketClicked(!rocketClicked);
        setProjectDirection(!projectDirection);
    };

    const saveBlockToFirebase = async () => {
        const dataBlock = await view(contract_methods.VIEW);

        const launchPadData = dataBlock?.result.launchpad;
        const lockupData = dataBlock?.result.lockup_details;
        const mergedData: any[] = [];
        for (const [launchpadId, launchpadObj] of launchPadData) {
            const lockupObj = lockupData[launchpadId - 1];
            if (lockupObj) {
                const mergedObj = {
                    ...lockupObj[1],
                    ...launchpadObj,
                };
                mergedData.push(mergedObj);
            }
        }
        const rocketsCollectionRef = collection(db, "rockets");
        if (mergedData) {
            mergedData.map(async (data, index) => {
                const launchpadId = Number(index + 1);
                //     const launchpad ={
                //   title: "",
                //   logo_url: "",
                //   description: "",
                //   cancel: data.cancel,
                //   cis2_amount: data.cis2_amount,
                //   cis2_price: data.cis2_price,
                //   dev_paid: data.dev_paid || "",
                //   end_time: data.end_time,
                //   hard_cap: data.hard_cap,
                //   holders: [],
                //   invest_amount: data.invest_amount,
                //   live: data.live,
                //   live_pause_count: data.live_pause_count,
                //   maximum_invest: data.maximum_invest,
                //   minimum_invest: (Number(minimumBuy * 1e6)),
                //   owner: await getAcount(),
                //   pause_start: new Date().toISOString(),
                //   pause_until: new Date().toISOString(),
                //   soft_cap: (Number(softcap * 1e6)),
                //   start_time: start_date,
                //   total_tx: 0,
                //   website_url: (website_url) ? website_url : "",
                //   fb_url: (fb_url) ? fb_url : "",
                //   twitter_url: (twitter_url) ? twitter_url : "",
                //   telegram_url: (telegram_url) ? telegram_url : "",
                //   github_url: (github_url) ? github_url : "",
                //   instagram_url: (instagram_url) ? instagram_url : "",
                //   discord_url: (discord_url) ? discord_url : "",
                //   reddit_url: (reddit_url) ? reddit_url : "",
                //   token_release_data: vestingReleases,
                //   cliff_duration: cliff_duration,
                //   cliff_period: dayjs().add(endDate, cliff_days).toISOString(),
                // }
                console.log("data", data);
                const launchpadDocRef = doc(rocketsCollectionRef as any, launchpadId.toString());
                await setDoc(launchpadDocRef, data, { merge: true });
            });
        }
    };

    console.log(rockets);

    // if (rockets)
    return (
        <>
            {/* {contextHolder} */}

            <div
                className={
                    (rocketClicked
                        ? "2xl:pl-28 xl:pl-24 lg:pl-20 md:pl-16 sm:pl-12 pl-8"
                        : "2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8") + " flex flex-col pb-20 pr-5"
                }
            >
                <HeaderWithPills slug={slugParams} title="LaunchPad" />
                <div className={" flex mb-7"}>
                    <div className="flex gap-3 2xl1:flex-row flex-col w-full flex-wrap">
                        <div className="flex w-full">
                            <div className="flex gap-3 flex-wrap ">
                                <div className="flex items-center gap-3 px-7 py-4 bg-app-black rounded-md">
                                    <Image src={search} alt="search" />
                                    <input
                                        className="bg-app-black 2xl1:w-44 font-medium focus-visible:outline-0"
                                        placeholder="Search..."
                                    />
                                </div>
                                <CheckboxDropDown
                                    initialContent={"Status"}
                                    contentList={classList.list}
                                    clicked={rocketClicked}
                                />
                                <CheckboxDropDown
                                    initialContent={classList.title}
                                    contentList={classList.list}
                                    clicked={rocketClicked}
                                />
                                <button
                                    className="group bg-app-black flex items-center gap-2 px-4 py-3 rounded-lg cursor-pointer hover:bg-app-blue"
                                    onClick={saveBlockToFirebase}
                                >
                                    <Image
                                        src={filterIcon}
                                        className="filter group-hover:brightness-200 group-hover:grayscale"
                                        alt="filter"
                                    />
                                </button>
                                <StickyRocket
                                    rocketClicked={rocketClicked}
                                    handleRocketClick={handleRocketClick}
                                    classNames="-mr-4 hidden 2xl:block"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6 1xs:gap-8">
                    <ProjectContainer className={rocketClicked ? "w-4/5" : "w-full"}>
                        <div className="projectContainer">
                            <div
                                className={
                                    (projectDirection ? "ml-4" : "mr-4") +
                                    " gridContainer grid max-2xl:grid-cols-2 max-lg1:grid-cols-1 grid-cols-3  gap-x-4 gap-y-8  3xl1:gap-x-8  bg-app-black p-3 xs:p-5 "
                                }
                            >
                                {rockets?.length > 0
                                    ? rockets.map((rocket, index) => {
                                          const indexValue = index + 1;
                                          return (
                                              <ProjectCard
                                                  key={index}
                                                  rightBorder={indexValue % 3 !== 0 ? true : false}
                                                  rocket={rocket}
                                                  timer={true}
                                              />
                                          );
                                      })
                                    : "No data found"}
                            </div>
                        </div>
                        {rockets && rockets.length < 1 && (
                            <Spin
                                size="large"
                                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                            />
                        )}
                    </ProjectContainer>
                    <div className={rocketClicked ? "w-1/5 " : "hidden"}>
                        <Rocket
                            showRocket={false}
                            setShowRocket={function (value: React.SetStateAction<boolean>): void {
                                console.log(!value);
                            }}
                            classNames={""}
                        />
                    </div>
                </div>
                <Paginate />
            </div>
        </>
    );
};

export default Home;
