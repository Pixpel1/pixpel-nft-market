import React from "react";

type propTypes = {
    showModal: boolean;
    setShowModal: (val: boolean) => void;
};
const CheckoutPay = ({ showModal, setShowModal }: propTypes) => {
    return (
        <div className=" bg-app-black-button checkoutpay px-5 py-12 min-h-fit">
            <div className="checkoutpay__inner">
                <div className="checkoutpay__title text-center uppercase font-medium text-2xl">Summary</div>
                <div className="grid grid-cols-2 border-app-gray border-b-2 mt-2 px-4 pb-4">
                    <ul className="flex flex-col gap-[10px] font-semibold">
                        <li className="font-medium text-lg">items:</li>
                        <li className="font-medium text-lg">Warranty:</li>
                    </ul>
                    <ul className="flex flex-col gap-2 font-semibold justify-end text-right">
                        <li className="text-app-blue uppercase font-semibold text-lg">4000 PIXP</li>
                        <li className="text-app-blue uppercase font-semibold text-lg">500 PIXP</li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 border-app-gray border-b-2 mt-2 px-4 pb-[43px]">
                    <ul className="flex flex-col gap-[10px] font-semibold">
                        <li className="font-medium text-lg">Fee:</li>
                        <li className="font-medium text-lg">TOTAL:</li>
                    </ul>
                    <ul className="flex flex-col gap-2 font-semibold justify-end text-right">
                        <li className="text-app-blue uppercase font-semibold text-lg">500 PIXP</li>
                        <li className="text-app-blue uppercase font-semibold text-lg">5000 PIXP</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center text-center mt-4">
                    <h4 className="uppercase font-medium text-2xl">exchange rate</h4>
                    <p className="uppercase font-medium text-lg">1 PIXP = 1.50 USDT</p>
                </div>
            </div>
            <div className="checkoutpay__footer flex justify-center mt-[73px]">
                <button
                    className="px-[73px] py-5 rounded bg-app-yellow text-black font-medium hover:bg-app-yellow-hover"
                    onClick={() => setShowModal(!showModal)}
                >
                    Pay
                </button>
            </div>
        </div>
    );
};
export default CheckoutPay;
