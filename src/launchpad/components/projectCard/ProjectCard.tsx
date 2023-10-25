import BellIcon from "@launchpad/assets/icons/bell_icon.png";
import miniPixpLogo from "@launchpad/assets/icons/miniPixpLogo.png";
import TickCircle from "@launchpad/assets/icons/tick_circle.png";
import WishListIcon from "@launchpad/assets/icons/wishlist_icon.png";
import PixpelCardLogo from "@launchpad/assets/logo/card_logo_single.png";
import { microCcdToCcdString } from "@launchpad/helpers/amount";
import calculate_progress from "@launchpad/helpers/calculate_progress";
import { Statistic } from "antd";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import Image from "next/image";
import Link from "next/link";
import { LobbySection } from "./styled/home";
const { Countdown } = Statistic;
dayjs.extend(duration);
// eslint-disable-next-line
const deadline: any = dayjs().add(2, "days").toDate();

interface ProjectCard {
    rightBorder: boolean;
    timer: boolean;
    rocket: {
        cancel: boolean;
        cis2_amount: number;
        cis2_price: number;
        cliff_duration: number;
        id: string;
        launchpad_id: string;
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
}
const ProjectCard = (props: ProjectCard) => {
    // const [thirtyMinutes, setThirtyMinutes] = useState({
    //   projectId: null,
    //   TimeStatus: false,
    //   remainingTime: "",
    // });
    function isUrlValid(url: string) {
        try {
            new URL(url);
            return true;
        } catch (err) {
            return false;
        }
    }
    function get_url_extension(url: string) {
        return url?.split(/[#?]/)[0]?.split(".")?.pop()?.trim();
    }
    const handleCountdownTo30 = (time: number, id: number) => {
        const remainingTime = dayjs.duration(time / 1000, "seconds");
        console.log(id, remainingTime);
        // if (remainingTime.minutes() === 30 && remainingTime.seconds() === 0) {
        //   setThirtyMinutes((prevState) => ({
        //     ...prevState,
        //     projectId: id,
        //     TimeStatus: true,
        //     remainingTime: remainingTime.minutes(),
        //   }));
        // }
        // if (remainingTime.minutes() === 0) {
        //   setThirtyMinutes((prevState) => ({
        //     ...prevState,
        //     projectId: id,
        //     TimeStatus: true,
        //     remainingTime: remainingTime.minutes(),
        //   }));
        // }
    };

    const getLockupTime = (end_time: string | number, last_schedule_day: string | number) => {
        const countDownDate = dayjs(last_schedule_day);
        const timeleft = countDownDate.diff(end_time, "days");
        if (timeleft > 0) {
            return timeleft;
        } else {
            return 0;
        }
    };

    const {
        live,
        soft_cap,
        hard_cap,
        cis2_price,
        end_time,
        cancel,
        invest_amount,
        title,
        logo_url,
        token_release_data,
    } = props.rocket;
    const launchpad_id = props.rocket.id;

    const circleDynamicValue = Number(calculate_progress(invest_amount, hard_cap).toFixed(0));
    const finalized = invest_amount === hard_cap || new Date(end_time).getTime() < new Date().getTime();
    return (
        <div
            className={
                (props.rightBorder
                    ? " sm:after:content[''] sm:after:border-r after:border-app-black after:absolute after:inset-y-0 right-0 sm:after:-right-2 2xl1:after:-right-4"
                    : "") + " 1xs:flex-shrink-0 relative px-0 1xs:px-4"
            }
        >
            {!cancel && (
                <div className={"bg-app-black-button p-3 rounded-lg "}>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div className="flex flex-col text-left font-medium">
                                <p className="font-medum inline-flex text-xs 1xs:text-sm 2xl1:text-base">SOFT - HARD</p>
                                <span className="text-app-blue text-xs 1xs:text-sm 2xl1:text-base">
                                    {microCcdToCcdString(soft_cap)} CCD -{microCcdToCcdString(hard_cap)} CCD
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col font-medium border-app-gray">
                            <div className="flex border-b border-app-gray">
                                <button
                                    className={
                                        "bg-app-green-live px-3 rounded-sm flex text-app-black items-center text-base font-medium " +
                                        (finalized
                                            ? "bg-app-yellow-finalized"
                                            : live
                                            ? " bg-app-green-live"
                                            : " bg-app-orange-paused text-white")
                                    }
                                >
                                    <p
                                        className={
                                            "w-2 h-2 inline-block rounded-full mr-2 " +
                                            (finalized
                                                ? "bg-app-orange-hover"
                                                : live
                                                ? " bg-app-green-hover"
                                                : " bg-app-orange-audit")
                                        }
                                    ></p>
                                    {finalized ? "Finalized" : live ? "Live" : "Paused"}
                                </button>
                            </div>
                            <div className="flex font-medium justify-end">
                                {props.timer ? (
                                    <>
                                        <Countdown
                                            value={end_time}
                                            className="font-medum text-xs 1xs:text-sm 2xl1:text-base"
                                            format="D:HH:mm:ss"
                                            valueStyle={{
                                                fontSize: "16px",
                                            }}
                                            onChange={() => handleCountdownTo30}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Countdown
                                            value={deadline}
                                            format="HH:mm:ss"
                                            className="font-medum text-xs 1xs:text-sm 2xl1:text-base"
                                            valueStyle={{
                                                fontSize: "16px",
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-3 mb-5">
                        <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold -mb-2 uppercase">{title}</h2>
                        <p className="text-lg 2xl1:text-xl font-medium uppercase border-t border-app-gray">
                            1 CCD = {cis2_price} PIXP
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-xs 1xs:text-sm 2xl1:text-base font-medium uppercase relative bottom-9">
                            {`0`} CCD
                        </p>
                        <LobbySection
                            className="gameLobby flex flex-col justify-center items-center mx-1"
                            style={{
                                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                backgroundImage: `url(${miniPixpLogo})`,
                            }}
                        >
                            <Link
                                href={live ? `/launchpad/launchpad/playerside/gamelobby/${launchpad_id}` : "#"}
                                style={live ? { cursor: "pointer" } : { cursor: "not-allowed" }}
                            >
                                <Image
                                    src={
                                        logo_url &&
                                        (get_url_extension(logo_url) === "png" ||
                                            get_url_extension(logo_url) === "jpg" ||
                                            get_url_extension(logo_url) === "jpeg" ||
                                            get_url_extension(logo_url) === "gif") &&
                                        isUrlValid(logo_url)
                                            ? logo_url
                                            : PixpelCardLogo
                                    }
                                    alt="gameLobby"
                                    className="projectLogo w-[115px] h-[114px] rounded-full object-contain"
                                />
                            </Link>
                            <div className="absolute -bottom-7 m-1 float-left text-left">
                                <div
                                    className="relative overflow-hidden w-[115px]  h-[58px]"
                                    style={{
                                        transform: "rotateX(180deg)",
                                    }}
                                >
                                    <div
                                        className={`absolute top-0  left-0 w-[115px] h-[115px] rounded-[50%] box-border border-[10px] border-solid border-[#717A8B] border-b-[#2EBD85] border-r-[#2EBD85]`}
                                        style={{
                                            transform: `rotate(${circleDynamicValue * 1.8 + 45}deg)`,
                                        }}
                                    ></div>
                                </div>
                                <span className="text-app-green text-[12px] pl-4">{circleDynamicValue}%</span>
                            </div>
                        </LobbySection>
                        <p className="text-xs 1xs:text-sm 2xl1:text-base font-medium uppercase relative bottom-9">
                            {microCcdToCcdString(hard_cap)} CCD
                        </p>
                    </div>
                    <div className="flex mt-8">
                        <div className="flex flex-col">
                            {/* <div className="flex border-b border-app-gray font-medium">
              <p className="font-medum inline-flex text-xs 1xs:text-sm 2xl1:text-base">
                Liquidity:
              </p>
              <span className="text-app-blue mx-2 text-xs 1xs:text-sm 2xl1:text-base">
                30%
              </span>
            </div> */}
                            <div className="flex font-medium">
                                <p className="font-medum inline-flex text-xs 1xs:text-sm 2xl1:text-base">
                                    Lock Up Time:
                                </p>
                                <span className="text-app-blue mx-2 text-xs 1xs:text-sm 2xl1:text-base">
                                    {getLockupTime(
                                        end_time,
                                        token_release_data.sort(function (a, b) {
                                            return b.id - a.id;
                                        })[token_release_data.length - 1].release_time
                                    )}{" "}
                                    days
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="buttons space-x-1">
                            <button className="bg-app-orange-audit h-[22px] text-app-black inline-flex items-center px-2 py-1 rounded-md text-xs 1xs:text-sm font-semibold">
                                <Image src={TickCircle} className="inline-flex mr-1" alt="audit_check" />
                                Audit
                            </button>
                            <button className="bg-app-blue-kyc h-[22px] text-app-black inline-flex items-center px-2 py-1 rounded-md text-xs 1xs:text-sm font-semibold">
                                <Image src={TickCircle} className="inline-flex mr-1" alt="audit_check" />
                                KYC
                            </button>
                            <button className="bg-app-purple-warranty h-[22px] text-app-black inline-flex items-center px-2 py-1 rounded-md text-xs 1xs:text-sm font-semibold">
                                <Image src={TickCircle} className="inline-flex mr-1" alt="audit_check" />
                                Warranty
                            </button>
                            <button className="bg-app-green-safe h-[22px] text-app-black inline-flex items-center px-2 py-1 rounded-md text-xs 1xs:text-sm font-semibold">
                                <Image src={TickCircle} className="inline-flex mr-1" alt="audit_check" />
                                Safe
                            </button>
                        </div>
                        <div className="flex space-x-1">
                            <button className="bg-app-black-duration px-3 py-3 hover:bg-app-blue rounded-lg">
                                <Image src={BellIcon} alt="bell" />
                            </button>
                            <button className="group bg-app-black-duration px-3 py-3 hover:bg-app-blue rounded-lg">
                                <Image src={WishListIcon} alt="wishlist" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
