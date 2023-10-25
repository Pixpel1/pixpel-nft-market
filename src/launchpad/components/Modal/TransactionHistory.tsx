import React, { Dispatch, SetStateAction } from "react";

interface StakingModal {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}
const TransactionHistory = ({ showModal, setShowModal }: StakingModal) => {
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
                        <div className="relative flex flex-col flex-wrap lg:flex-nowrap w-full max-w-3xl mx-auto rounded-lg shadow-lg">
                            <div className="flex justify-between px-4 sm:px-6 md:px-24 py-8 text-lg gap-4 sm:gap-6 rounded-t-lg md:gap-10 bg-app-black-duration_op_05">
                                <div className="flex flex-col items-center w-full">
                                    <h3 className="text-2xl font-semibold uppercase border-b border-white pb-2">
                                        Transaction History
                                    </h3>
                                    <p className="text-xl font-medium text-app-blue">Last 50 Transactions</p>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        className="bg-app-black-button px-4 md:-mr-10 h-10 rounded-lg hover:bg-app-black-duration cursor-pointer closeIcon"
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
                            </div>
                            <div className="flex bg-main rounded-b-lg px-2 pt-4 w-full overflow-x-auto relative pb-10">
                                <table
                                    className="table-auto text-center border-collapse w-full"
                                    cellPadding={0}
                                    cellSpacing={0}
                                >
                                    <thead>
                                        <tr>
                                            <th className="text-base sm:text-lg md:text-xl text-app-blue-rocket_card w-[0.1%] py-2 font-semibold uppercase border-r border-b border-app-black-duration">
                                                No.
                                            </th>
                                            <th className="text-base sm:text-lg md:text-xl text-app-blue-rocket_card w-[0.1%] py-2 font-semibold uppercase border-x border-b border-app-black-duration">
                                                Wallet ID
                                            </th>
                                            <th className="text-base sm:text-lg md:text-xl text-app-blue-rocket_card w-[0.1%] py-2 font-semibold uppercase border-x border-b border-app-black-duration">
                                                GMT Time
                                            </th>
                                            <th className="text-base sm:text-lg md:text-xl text-app-blue-rocket_card w-[0.1%] py-2 font-semibold uppercase border-x border-b border-app-black-duration">
                                                Tokens
                                            </th>
                                            <th className="text-base sm:text-lg md:text-xl text-app-blue-rocket_card w-[0.1%] py-2 font-semibold uppercase border-l border-b border-app-black-duration">
                                                Coins
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=" border-r border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                400
                                            </td>
                                            <td className="border-x border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                xxxxxxx
                                            </td>
                                            <td className="border-x border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                24:04:05:09
                                            </td>
                                            <td className="border-x border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                500,000 PIXP
                                            </td>
                                            <td className="border-l border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                2000 ETH
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" border-r border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                400
                                            </td>
                                            <td className="border-x border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                xxxxxxx
                                            </td>
                                            <td className="border-x border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                24:04:05:09
                                            </td>
                                            <td className="border-x border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                500,000 PIXP
                                            </td>
                                            <td className="border-l border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                2000 ETH
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" border-r border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                400
                                            </td>
                                            <td className="border-x border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                xxxxxxx
                                            </td>
                                            <td className="border-x border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                24:04:05:09
                                            </td>
                                            <td className="border-x border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                500,000 PIXP
                                            </td>
                                            <td className="border-l border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                2000 ETH
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" border-r border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                400
                                            </td>
                                            <td className="border-x border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                xxxxxxx
                                            </td>
                                            <td className="border-x border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                24:04:05:09
                                            </td>
                                            <td className="border-x border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                500,000 PIXP
                                            </td>
                                            <td className="border-l border-b w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5 px-4">
                                                2000 ETH
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default TransactionHistory;
