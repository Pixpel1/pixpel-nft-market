import YearCard from "@launchpad/components/Cards/YearCard";
import { Dispatch, SetStateAction } from "react";

interface AngelInvestorModal {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    modalData: {
        id: number;
        year: string | number;
        cards: {
            title: string;
            month: string;
            tokens: string;
        }[];
    }[];
}

const AngelInvestorModal = ({ showModal, setShowModal, modalData }: AngelInvestorModal) => {
    // const handleConfirmClick = () => {
    //     setShowModal(false);
    // };

    return (
        <>
            {showModal ? (
                <div className="fixed inset-0 z-50 overflow-x-auto">
                    <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => setShowModal(false)}
                    ></div>
                    <div className="flex items-center px-4 py-6">
                        <div className="relative flex flex-col flex-wrap lg:flex-nowrap w-full max-w-fit mx-auto bg-app-black-modal rounded-xl shadow-lg px-4 sm:px-6 md:px-24 py-8 text-lg gap-4 sm:gap-6 md:gap-10">
                            <div className="flex justify-end">
                                <button
                                    className="bg-app-black-select p-4 md:-mr-10 rounded-lg hover:bg-app-black-duration cursor-pointer closeIcon"
                                    onClick={() => setShowModal(false)}
                                >
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 13 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1L6.5 6.5M12 12L6.5 6.5M6.5 6.5L1 12L12 1"
                                            stroke="#717A8B"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <YearCard cardData={modalData} />
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default AngelInvestorModal;
