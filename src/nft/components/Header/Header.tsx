/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DeveloperHeader from "./DeveloperHeader";
import Logo from "@public/assets/images/logo.svg";
import PlayerImage from "@public/assets/images/playerimg.jpg";
import DeveloperImage from "@public/assets/images/developerimg.jpg";
import PlayerHeader from "./PlayerHeader";
import { useRouter } from "next/router";
import Image, { StaticImageData } from "next/image";
// import Link from "next/link";
import axios from "axios";

let typeModal = "register",
    typeUser = "player/account";
interface HeaderProps {
    styles: any;
}

const Header = (props: HeaderProps) => {
    const styles = {};
    const router = useRouter();
    if (props.styles) Object.assign(styles, props.styles);
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "#1F2630",
            padding: "30px 60px 60px 60px",
            borderRadius: "10px",
        },
    };
    const customStylesLogin = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            maxWidth: "519px",
            width: "100%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "#1F2630",
            padding: "60px 60px 32px 60px",
            borderRadius: "10px",
        },
    };
    const customStylesRegister = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            maxWidth: "519px",
            width: "100%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "#1F2630",
            padding: "60px 60px 32px 60px",
            borderRadius: "10px",
        },
    };
    const customStylesVerify = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            maxWidth: "519px",
            width: "100%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "#1F2630",
            padding: "60px 60px 32px 60px",
            borderRadius: "10px",
        },
    };

    const [signup, setSignup] = useState({
        email: "",
        contactNo: "",
        pass: "",
    });

    console.log(signup);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenLogin, setIsOpenLogin] = useState(false);
    const [modalIsOpenRegister, setIsOpenRegister] = useState(false);
    const [modalIsOpenVerify, setIsOpenVerify] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (Modal.defaultStyles.overlay) {
        Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }

    // const createAccount = async () => {
    //     if (typeUser === "player/account") {
    //         await axios
    //             .post(`http://3.16.112.122:3000/players/create`, {
    //                 name: signup.email.split("@")[0],
    //                 email: signup.email,
    //                 wallet: "0x123456789",
    //             })
    //             .then((res) => res.data)
    //             .then((data) => console.log(data));
    //         console.log("Player Account Created");
    //     } else if (typeUser === "developer") {
    //         await axios
    //             .post(`http://3.16.112.122:3000/developers/create`, {
    //                 name: signup.email.split("@")[0],
    //                 email: signup.email,
    //                 wallet: "0x123456789",
    //                 contact_details: signup.contactNo,
    //             })
    //             .then((res) => res.data)
    //             .then((data) => console.log(data));
    //         console.log("Developer Account Created");
    //     }
    // };

    function openModal() {
        setIsOpen(true);
    }
    function mainHeader() {
        return (
            <div className="container-fluid bg-[#29313C80] px-8 !py-[18px] relative z-10">
                <div className="header__inner  max-sm:flex-col items-start">
                    <div className="header__logo cursor-pointer">
                        <Image src={Logo as StaticImageData} className="logo" alt="" />
                    </div>
                    <div className="header__group flex flex-wrap">
                        <button
                            className="btn max-sm:text-[10px] hover:text-[#50D0FB]"
                            onClick={() => {
                                typeModal = "login";
                                openModal();
                            }}
                        >
                            Log in
                        </button>
                        <button
                            className="btn btn--brand hover:bg-[#50D0FB] ml-2"
                            onClick={() => {
                                typeModal = "register";
                                openModal();
                            }}
                        >
                            Register
                        </button>
                        {/* <Link href={"/launchpad"} className="btn ml-2 btn--brand hover:bg-[#50D0FB] ">
                            Launchpad
                        </Link>
                        <Link href={"/dex/bridge"} className="btn ml-2 btn--brand">
                            Bridge
                        </Link> */}
                    </div>
                </div>
            </div>
        );
    }
    function closeModal() {
        setIsOpen(false);
    }

    function openModalLogin() {
        setIsOpenLogin(true);
        closeModal();
    }

    function closeModalLogin() {
        setIsOpenLogin(false);
    }

    function openModalRegister() {
        setIsOpenRegister(true);
        closeModal();
    }

    function closeModalRegister() {
        setIsOpenRegister(false);
    }

    function openModalVerify() {
        // createAccount();
        setIsOpenVerify(true);
        closeModalRegister();
    }

    function closeModalVerify() {
        setIsOpenVerify(false);
    }

    const getPlayerById = async () => {
        await axios
            .get("http://3.16.112.122:3000/players/read/7")
            .then((res) => res.data)
            .then((data) => console.log(data));
    };

    const getDeveloperById = async () => {
        await axios
            .get("http://3.16.112.122:3000/developers/read/2")
            .then((res) => res.data)
            .then((data) => console.log(data));
    };

    useEffect(() => {
        getPlayerById();
        getDeveloperById();
    }, []);

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                style={customStyles}
                contentLabel="Example Modal"
                // className="w-[1160px] h-[460px]"
            >
                <div className="modal">
                    <button
                        onClick={closeModal}
                        className="modal__close modal__close--static flex justify-center items-center hover:bg-[#FFFFFF80]"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline"
                        >
                            <path
                                d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1"
                                stroke="#717A8B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <div className="modal__row">
                        <div
                            className="modal__box hover:opacity-[0.6] cursor-pointer"
                            onClick={() => {
                                typeUser = "player/account";
                                if (typeModal === "register") {
                                    openModalRegister();
                                } else {
                                    openModalLogin();
                                }
                            }}
                        >
                            <Image src={PlayerImage} width={500} height={300} className="modal__img" alt="" />
                        </div>
                        <div
                            className="modal__box hover:opacity-[0.6] cursor-pointer"
                            onClick={() => {
                                typeUser = "developer";
                                if (typeModal === "register") {
                                    openModalRegister();
                                } else {
                                    openModalLogin();
                                }
                            }}
                        >
                            <div className="">
                                <Image src={DeveloperImage} width={500} height={300} className="modal__img" alt="" />
                            </div>
                            {/* <div className="modal__name">DEVELOPER</div> */}
                        </div>
                    </div>
                </div>
            </Modal>

            {/* login model */}
            <Modal
                isOpen={modalIsOpenLogin}
                onRequestClose={closeModalLogin}
                ariaHideApp={false}
                style={customStylesLogin}
                contentLabel="Example Modal"
                // className="w-[1160px] h-[460px]"
            >
                <div className="modal modal-login">
                    <button
                        onClick={closeModalLogin}
                        className="modal__close modal-login__close flex items-center justify-center hover:bg-[#FFFFFF80]"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline"
                        >
                            <path
                                d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1"
                                stroke="#717A8B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <div className="modal__title">{typeUser === "developer" ? "Developer Login" : "Player Login"}</div>
                    <form action="" className="modal__form">
                        <div className="modal__form-group">
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">
                                    Mail
                                </label>
                                <input
                                    type="text"
                                    className="modal__input"
                                    placeholder="Example@gmail.com"
                                    value={signup.email}
                                    onChange={(e) => setSignup((pre) => ({ ...pre, email: e.target.value }))}
                                />
                            </div>
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="modal__input"
                                    placeholder="**************"
                                    value={signup.pass}
                                    onChange={(e) => setSignup((pre) => ({ ...pre, pass: e.target.value }))}
                                />
                            </div>
                        </div>
                        <a href={`/${typeUser}`} className="btn modal__btn !py-3 bg-[#2EBD85]  hover:bg-[#1FF19F]">
                            Login
                        </a>
                        {/* <button className="btn modal__btn">Login</button> */}
                        <button
                            className="modal__btn-forgot"
                            onClick={() => {
                                closeModalLogin();
                                openModalRegister();
                            }}
                        >
                            Dont have account?
                        </button>
                    </form>
                </div>
            </Modal>

            {/* register model */}
            <Modal
                isOpen={modalIsOpenRegister}
                onRequestClose={closeModalRegister}
                ariaHideApp={false}
                style={customStylesRegister}
                contentLabel="Example Modal"
                // className="w-[1160px] h-[460px]"
            >
                <div className="modal modal-register">
                    <button
                        onClick={closeModalRegister}
                        className="modal__close modal-login__close flex items-center justify-center hover:bg-[#FFFFFF80]"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline"
                        >
                            <path
                                d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1"
                                stroke="#717A8B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <div className="modal__title">
                        {typeUser === "developer" ? "Create Developer account" : "Create Player account"}
                    </div>
                    <form action="#" className="modal__form">
                        <div className="modal__form-group">
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">
                                    Mail
                                </label>
                                <input
                                    type="text"
                                    className="modal__input"
                                    placeholder="Example@gmail.com"
                                    value={signup.email}
                                    onChange={(e) => setSignup((pre) => ({ ...pre, email: e.target.value }))}
                                />
                            </div>
                            {typeUser === "developer" && (
                                <div className="modal__field">
                                    <label htmlFor="" className="modal__label">
                                        Contact No
                                    </label>
                                    <input
                                        type="number"
                                        className="modal__input"
                                        placeholder="Contact Number"
                                        value={signup.contactNo}
                                        onChange={(e) => setSignup((pre) => ({ ...pre, contactNo: e.target.value }))}
                                    />
                                </div>
                            )}
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="modal__input"
                                    placeholder="**************"
                                    value={signup.pass}
                                    onChange={(e) => setSignup((pre) => ({ ...pre, pass: e.target.value }))}
                                />
                            </div>
                        </div>
                        <div className="modal__form-group">
                            <div className="modal__checkbox">
                                <input type="checkbox" className="modal__checkbox-input" />I have read an accept Pixpel
                                terms and conditions
                            </div>
                            <div className="modal__checkbox">
                                <input type="checkbox" className="modal__checkbox-input" />I want to recive marketing
                                email
                            </div>
                        </div>

                        <button
                            className="modal__btn bg-[#2EBD85] !py-3 hover:bg-[#1FF19F]"
                            onClick={() => openModalVerify()}
                        >
                            Create account
                        </button>
                    </form>
                </div>
            </Modal>

            <Modal
                isOpen={modalIsOpenVerify}
                onRequestClose={closeModalVerify}
                ariaHideApp={false}
                style={customStylesVerify}
                // className="w-[1160px] h-[460px]"
            >
                <div className="modal modal-verify">
                    <button
                        onClick={closeModalVerify}
                        className="modal__close modal-login__close flex items-center justify-center hover:bg-[#FFFFFF80]"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline"
                        >
                            <path
                                d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1"
                                stroke="#717A8B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <div className="modal__title modal-verify__title">Verify Email</div>
                    <div className="modal__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare eros at ante viverra, at
                        suscipit metus convallis. Nulla porttitor diam neque
                    </div>
                    <form action="" className="modal__form">
                        <div className="modal__form-group">
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">
                                    6 Didgit code
                                </label>
                                <input type="text" className="modal__input" placeholder="XX-XX-XX" />
                            </div>
                        </div>
                        <a href={`/${typeUser}`} className="modal__btn bg-[#2EBD85] hover:bg-[#1FF19F]">
                            Create account
                        </a>
                    </form>
                </div>
            </Modal>
            <header style={styles}>
                {router.pathname !== "/" ? (
                    router.pathname === "/mycollection" ||
                    router.pathname.includes("/developer") ||
                    router.pathname === "/create-nft" ||
                    router.pathname === "/collection" ||
                    router.pathname === "/mysterybox" ||
                    router.pathname === "/stakingportfolio" ||
                    router.pathname === "/finishmint" ||
                    router.pathname === "/gamelanding" ||
                    router.pathname === "/developerwallet" ||
                    router.pathname === "/tokenroom/mint" ||
                    router.pathname === "/tokenroom/burn" ||
                    router.pathname === "/developer/profile" ||
                    router.pathname === "/tokenroom" ? (
                        <DeveloperHeader />
                    ) : (
                        <PlayerHeader />
                    )
                ) : (
                    mainHeader()
                )}
            </header>
        </>
    );
};

export default Header;
