import React from "react";
import HelpCenterButton from "../../Button/HelpCenterButton";
import ModalHalfButton from "../../Button/ModalHalfButton";
import NFTAvatar from "../../Avatar/NFTAvatar";

interface NicknameModal {
    setShowModal: (val: boolean) => void;
    showModal: boolean;
    setName: (val: string) => void;
    name: string;
}

const NicknameModal = ({ showModal, setShowModal, name, setName }: NicknameModal) => {
    const handleClick = () => {
        // setName();
        setShowModal(false);
    };
    console.log(name);
    return (
        <>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-x-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center px-4 py-6 min-h-screen">
                            <div
                                className="relative flex flex-col w-full max-w-lg p-4 mx-auto 
															bg-app-black-modal rounded-xl shadow-lg md:px-12 py-12 text-lg"
                            >
                                <div className="text-2xl font-medium mb-6">Set a customized nickname</div>
                                <div className="mb-2 font-medium text-base">Nickname</div>
                                <input
                                    className="w-full py-2 px-6 items-center bg-app-black rounded-md text-base font-medium text-app-black-duration mb-6"
                                    placeholder="Nick Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <div className="mb-3 text-lg font-medium">Select avatar</div>
                                <div className="flex gap-4 mb-4 flex-col md:flex-row">
                                    <HelpCenterButton title="Default" />
                                    <HelpCenterButton title="NFT" />
                                </div>
                                <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 overflow-auto gap-2 grid-scroll">
                                    <NFTAvatar />
                                    <NFTAvatar />
                                    <NFTAvatar />
                                    <NFTAvatar />
                                    <NFTAvatar />
                                    <NFTAvatar />
                                    <NFTAvatar />
                                    <NFTAvatar />
                                    <NFTAvatar />
                                    <NFTAvatar />
                                    <NFTAvatar />
                                    <NFTAvatar />
                                </div>
                                <div className="flex mt-4 mb-10 gap-4 w-full">
                                    <ModalHalfButton title="Cancel" handleClick={handleClick} />
                                    <div
                                        className="flex items-center justify-center rounded-md py-4 px-2 w-1/2 bg-app-green hover:bg-app-green-hover cursor-pointer"
                                        onClick={handleClick}
                                    >
                                        Apply
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default NicknameModal;
