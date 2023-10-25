import { IconContext } from "react-icons";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Paginate = () => {
    return (
        <div className="flex mx-auto mt-36 mb-16">
            <ul className="flex items-center space-x-2 paginateContainer">
                <li className="border border-white px-3 py-3 rounded-full cursor-pointer">
                    <IconContext.Provider value={{ color: "#C8C8C8", size: "18px" }}>
                        <BsChevronDoubleLeft />
                    </IconContext.Provider>
                </li>

                <li>
                    <span className="border border-white flex justify-center items-center w-11 h-[42px] bg-app-white-offWhite rounded-full cursor-pointer text-xl">
                        1
                    </span>
                </li>
                <li className="border border-white rounded-full cursor-pointer px-3 py-3">
                    <IconContext.Provider value={{ size: "18px" }}>
                        <BsChevronDoubleRight />
                    </IconContext.Provider>
                </li>
            </ul>
        </div>
    );
};

export default Paginate;
