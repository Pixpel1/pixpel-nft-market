import React from "react";
import Marquee from "react-fast-marquee";

interface text {
    text?: string;
}

const SlidingText: React.FC<text> = ({ text }) => {
    return (
        <div className="relative mt-3 overflow-hidden">
            <Marquee
                className="flex text-[135px] font-semibold font-[poppins] opacity-30 max-sm:text-[24px] max-lg:text-[40px] w-fit"
                style={{
                    WebkitTextFillColor: "transparent",
                    WebkitTextStroke: "1px",
                }}
            >
                {`${text} ${text} ${text}`}
            </Marquee>
        </div>
    );
};

export default SlidingText;
