import Image from "next/image";
// import { useRouter } from "next/router";
import { useRef } from "react";

import AddRocketCircle from "@launchpad/assets/developer/icons/create_rocket_plus.png";
import AddRocketCircleLine from "@launchpad/assets/developer/icons/create_rocket_plus_hover.png";
import Link from "next/link";

interface NewRocket {
    borderRight: boolean;
}

const NewRocket = (props: NewRocket) => {
    // eslint-disable-next-line
    const addCircle = useRef<any>(null);
    // const navigate = useRouter();
    const handleMouseIn = () => {
        if (addCircle.current) {
            addCircle.current.src = AddRocketCircleLine;
        }
    };
    return (
        <div
            className={
                "flex flex-col  max-w-screen-1xs " +
                (props?.borderRight
                    ? "relative after:border-r after:border-app-gray-gray_5 after:absolute after:-right-4 2xl:after:-right-12 after:h-full"
                    : "")
            }
        >
            <div className="flex bg-app-black-select py-3  px-24 rounded-tl-2xl rounded-tr-2xl border-b-2 border-app-gray-gray_5 text-center">
                <h2 className="text-4xl font-semibold uppercase invisible">Funding Round</h2>
            </div>
            <div className="flex flex-col items-center bg-app-black-button rounded-bl-2xl rounded-br-2xl px-10 pt-5 pb-10">
                <Link href="/launchpad/launchpad/developerside/create-rocket">
                    <button
                        onMouseEnter={handleMouseIn}
                        // onClick={() => {
                        //     navigate.push("/launchpad/launchpad/developerside/create-rocket");
                        // }}
                        onMouseLeave={() => {
                            if (addCircle.current) addCircle.current.src = AddRocketCircle;
                        }}
                    >
                        <Image src={AddRocketCircle} ref={addCircle} className="filter mb-2" alt="add_rocket" />
                    </button>
                </Link>
                <p className="text-base font-semibold mt-4 uppercase">CREATE ROCKET</p>
            </div>
        </div>
    );
};

export default NewRocket;
