import React from "react";
import { tableList } from "@nft/pages-components/Profile/datalist";
import CancelButton from "../../Button/CancelButton";

const ProfileOpenOrders = () => {
    return (
        <div>
            <div className="mt-10 font-semibold text-2xl">Open Orders</div>
            <div className="overflow-x-auto relative mt-6 w-full">
                <table className="table-auto text-left">
                    <thead>
                        <tr>
                            <td className="text-app-black-duration text-base pr-6">Pair Date</td>
                            <td className="text-app-black-duration text-base px-6">Type Conditions</td>
                            <td className="text-app-black-duration text-base px-6">Price</td>
                            <td className="text-app-black-duration text-base px-6">Total Filled</td>
                            <td className="text-app-black-duration text-base text-right w-1/12 pl-6">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableList.map((menu, idx) => {
                            return (
                                <tr
                                    key={idx}
                                    className={idx !== tableList.length - 1 ? "border-b-2 border-app-black" : ""}
                                >
                                    <td className="py-3 pr-6">
                                        <p className="text-base font-medium uppercase">{menu.title.Pair}</p>
                                        <p className="text-app-black-duration font-medium text-xs">{menu.title.date}</p>
                                    </td>
                                    <td className="px-6">
                                        <div className="flex items-center">
                                            <p className="text-base font-medium">{menu.title.Type}</p>
                                            <p className="text-base font-medium text-red-600">{menu.title.Condition}</p>
                                        </div>
                                        <p className="text-app-black-duration font-medium text-xs">-</p>
                                    </td>
                                    <td className="px-6">
                                        <p className="font-medium text-base">{menu.title.Price}</p>
                                        <p className="text-app-black-duration font-medium text-xs">
                                            {menu.title.Price_under}
                                        </p>
                                    </td>
                                    <td className="px-6">
                                        <p className="font-medium text-base">{menu.title.Total}</p>
                                        <p className="text-app-black-duration font-medium text-xs">
                                            {menu.title.TotalPercent}
                                        </p>
                                    </td>
                                    <td className="pl-6">
                                        <CancelButton title={menu.title.Action}></CancelButton>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProfileOpenOrders;
