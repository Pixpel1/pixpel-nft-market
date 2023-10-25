import React from "react";

interface CheckoutSuccessCard {
    setShowModal: (value: boolean) => void;
    showModal: boolean;
}

const CheckoutSuccessCard = ({ showModal, setShowModal }: CheckoutSuccessCard) => {
    const handleModalCLick = () => {
        setShowModal(!showModal);
    };
    if (!showModal) {
        return;
    }
    return (
        <>
            <div className="flex flex-col items-center w-full px-16 pt-6 pb-[30px] max-w-lg bg-app-black rounded-xl xs:w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
                    <circle cx="65" cy="65" r="64.5" stroke="#2EBD85" stroke-dasharray="2 2" />
                    <circle cx="65" cy="65" r="50" fill="#2EBD85" />
                    <path
                        d="M84.186 48.0339L70.0869 62.0222L58.5303 73.5829L46.9737 62.0222C46.3147 61.3669 45.4225 61.0003 44.4933 61.003C43.5641 61.0057 42.6741 61.3775 42.0189 62.0367C41.3638 62.6959 40.9973 63.5886 41 64.5182C41.0027 65.4477 41.3744 66.3381 42.0334 66.9934L56.0168 80.9818C56.3406 81.3123 56.7271 81.5747 57.1538 81.7534C57.5805 81.9321 58.0388 82.0235 58.5014 82.0224C58.9553 82.0224 59.4043 81.9301 59.8215 81.7512C60.2386 81.5724 60.6152 81.3106 60.9282 80.9818L88.9532 52.976C89.6083 52.3168 89.9748 51.4243 89.972 50.4947C89.9693 49.5652 89.5977 48.6748 88.9387 48.0194C88.2797 47.3641 87.3875 46.9973 86.4583 47C85.5291 47.0027 84.639 47.3747 83.9839 48.0339"
                        fill="white"
                    />
                </svg>
                <div className="flex justify-center mt-[23px] mb-[82px]">
                    <div className="text-lg font-medium text-center">
                        Your order has been submitted. <br />
                        Please check your email.
                    </div>
                </div>
                <div className="flex flex-row justify-center w-full gap-4">
                    <button
                        className="flex items-center justify-center w-56 h-16 py-5 text-base font-medium 2xs:text-lg rounded-lg cursor-pointer bg-app-green hover:bg-app-green-hover"
                        onClick={() => {
                            handleModalCLick();
                        }}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </>
    );
};

export default CheckoutSuccessCard;
