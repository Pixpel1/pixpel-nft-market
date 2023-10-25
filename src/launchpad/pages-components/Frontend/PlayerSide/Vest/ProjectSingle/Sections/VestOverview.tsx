/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface VestOverview {
    lockupHolders?: {
        vested_date: string;
        selectedRocket: {
            token_release_data: { release_time: string; per_cycle_release: number; id: number }[];
            ownedToken: number;
            cis2_price: number;
            isDisabled: boolean;
            next_release_amount: number;
            claimed_token: number;
            next_release_date: string | number;
            completed_cycle: number;
        };
        lockupHolders: undefined;
        nextRelease: any;
    };
    nextRelease: {
        ownedToken: number;
        isDisabled: boolean;
        next_release_amount: number;
        claimed_token: number;
        next_release_date: string | number;
        completed_cycle: number;
    };
    selectedRocket: {
        token_release_data: { release_time: string; per_cycle_release: number; id: number }[];
        ownedToken: number;
        cis2_price: number;
        isDisabled: boolean;
        next_release_amount: number;
        claimed_token: number;
        next_release_date: string | number;
        completed_cycle: number;
    };
}

const VestOverview = ({ lockupHolders, selectedRocket, nextRelease }: VestOverview) => {
    console.log(lockupHolders);

    const vested_date = lockupHolders?.vested_date ? new Date(lockupHolders?.vested_date) : new Date();

    return (
        <>
            {lockupHolders?.vested_date && (
                <>
                    <div className="grid grid-cols-8 2xl1:grid-cols-9 gap-8 bg-app-black px-6 py-8">
                        <div className="col-span-8 lg:col-span-4 2xl1:col-span-2 text-center">
                            <h3 className="text-base sm:text-lg md:text-[22px] font-semibold uppercase mb-6">
                                Rockets
                            </h3>
                            <div className="overflow-x-auto relative">
                                <table
                                    className="table-auto border-collapse border border-app-black-duration border-t-white w-full"
                                    cellPadding={0}
                                    cellSpacing={0}
                                >
                                    <thead>
                                        <tr>
                                            <th className="text-base sm:text-lg md:text-[22px] w-[0.1%] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                Name
                                            </th>
                                            <th className="text-base sm:text-lg md:text-[22px] w-[0.1%] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                Supply
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=" border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                Private Round
                                            </td>
                                            <td className="border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                Funding
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-span-8 lg:col-span-4 2xl1:col-span-3 text-center">
                            <h3 className="text-base sm:text-lg md:text-[22px] font-semibold uppercase mb-6">Owned</h3>
                            <div className="overflow-x-auto relative">
                                <table
                                    className="table-auto border-collapse border border-app-black-duration border-t-white w-full"
                                    cellPadding={0}
                                    cellSpacing={0}
                                >
                                    <thead>
                                        <tr>
                                            <th className="text-base sm:text-lg md:text-[22px] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                Owned Tokens
                                            </th>
                                            <th className="text-base sm:text-lg md:text-[22px] w-[0.1%] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                Price
                                            </th>
                                            <th className="text-base sm:text-lg md:text-[22px] w-[0.1%] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=" border w-[0.2%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                {nextRelease?.ownedToken} <span className="uppercase">Pixp</span>
                                            </td>
                                            <td className="border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                {selectedRocket?.cis2_price}
                                            </td>
                                            <td className="border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                06/06/23
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-span-8 2xl1:col-span-4 text-center">
                            <div className="grid grid-cols-3 place-content-end gap-8">
                                <div className="max-1xs:col-span-3 1xs:col-span-2">
                                    <h3 className="text-base sm:text-lg md:text-[22px] font-semibold uppercase mb-6">
                                        Vested
                                    </h3>
                                    <div className="overflow-x-auto relative">
                                        <table
                                            className="table-auto border-collapse border border-app-black-duration border-t-white w-full"
                                            cellPadding={0}
                                            cellSpacing={0}
                                        >
                                            <thead>
                                                <tr>
                                                    <th className="text-base sm:text-lg md:text-[22px] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                        Tokens
                                                    </th>
                                                    <th className="text-base sm:text-lg md:text-[22px] w-[0.1%] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                        Price
                                                    </th>
                                                    <th className="text-base sm:text-lg md:text-[22px] w-[0.1%] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                        Date
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className=" border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                        {nextRelease?.claimed_token}{" "}
                                                        <span className="uppercase">Pixp</span>
                                                    </td>
                                                    <td className="border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                        {selectedRocket?.cis2_price}
                                                    </td>
                                                    <td className="border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                        {`${vested_date.getDate()}/${
                                                            vested_date.getMonth() + 1
                                                        }/${vested_date.getFullYear()}`}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="max-1xs:col-span-3 1xs:col-span-1 mt-0 1xs:mt-[52px] text-center">
                                    <div className="overflow-x-auto relative">
                                        <table
                                            className="table-auto border-collapse border border-app-black-duration border-t-white w-full"
                                            cellPadding={0}
                                            cellSpacing={0}
                                        >
                                            <thead>
                                                <tr>
                                                    <th className="text-base sm:text-lg md:text-[22px] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                        Profit/Loss
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className=" border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                        +0.85
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-app-black-duration my-8" />
                    <div className="grid grid-cols-8 2xl1:grid-cols-9 gap-8 bg-app-black px-6 py-8">
                        <div className="col-span-8 lg:col-span-4 2xl1:col-span-2 text-center">
                            <h3 className="text-base sm:text-lg md:text-[22px] font-semibold uppercase mb-6">Ships</h3>
                            <div className="overflow-x-auto relative">
                                <table
                                    className="table-auto border-collapse border border-app-black-duration border-t-white w-full"
                                    cellPadding={0}
                                    cellSpacing={0}
                                >
                                    <thead>
                                        <tr>
                                            <th className="text-base sm:text-lg md:text-[22px] w-[0.1%] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                Name
                                            </th>
                                            <th className="text-base sm:text-lg md:text-[22px] w-[0.1%] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                Supply
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=" border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                Private Round
                                            </td>
                                            <td className="border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                Funding
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-span-8 lg:col-span-4 2xl1:col-span-3 text-center">
                            <h3 className="text-base sm:text-lg md:text-[22px] font-semibold uppercase mb-6">Owned</h3>
                            <div className="overflow-x-auto relative">
                                <table
                                    className="table-auto border-collapse border border-app-black-duration border-t-white w-full"
                                    cellPadding={0}
                                    cellSpacing={0}
                                >
                                    <thead>
                                        <tr>
                                            <th className="text-base sm:text-lg md:text-[22px] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                Owned Tokens
                                            </th>
                                            <th className="text-base sm:text-lg md:text-[22px] w-[0.1%] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                Price
                                            </th>
                                            <th className="text-base sm:text-lg md:text-[22px] w-[0.1%] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=" border w-[0.2%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                0 <span className="uppercase">Pixp</span>
                                            </td>
                                            <td className="border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                0
                                            </td>
                                            <td className="border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                06/06/23
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-span-8 2xl1:col-span-4 text-center">
                            <div className="grid grid-cols-3 place-content-end gap-8">
                                <div className="max-1xs:col-span-3 1xs:col-span-2">
                                    <h3 className="text-base sm:text-lg md:text-[22px] font-semibold uppercase mb-6">
                                        Vested
                                    </h3>
                                    <div className="overflow-x-auto relative">
                                        <table
                                            className="table-auto border-collapse border border-app-black-duration border-t-white w-full"
                                            cellPadding={0}
                                            cellSpacing={0}
                                        >
                                            <thead>
                                                <tr>
                                                    <th className="text-base sm:text-lg md:text-[22px] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                        Tokens
                                                    </th>
                                                    <th className="text-base sm:text-lg md:text-[22px] w-[0.1%] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                        Price
                                                    </th>
                                                    <th className="text-base sm:text-lg md:text-[22px] w-[0.1%] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                        Date
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className=" border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                        0 <span className="uppercase">Pixp</span>
                                                    </td>
                                                    <td className="border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                        0
                                                    </td>
                                                    <td className="border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                        06/06/23
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="max-1xs:col-span-3 1xs:col-span-1 mt-0 1xs:mt-[52px] text-center">
                                    <div className="overflow-x-auto relative">
                                        <table
                                            className="table-auto border-collapse border border-app-black-duration border-t-white w-full"
                                            cellPadding={0}
                                            cellSpacing={0}
                                        >
                                            <thead>
                                                <tr>
                                                    <th className="text-base sm:text-lg md:text-[22px] py-2 font-semibold uppercase border border-app-black-duration border-t-white bg-app-black-button ">
                                                        Profit/Loss
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className=" border w-[0.1%] border-app-black-duration text-sm sm:text-lg md:text-xl font-medium py-5">
                                                        +0.85
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default VestOverview;
