import React from "react";
import DropDownRounded from "@launchpad/components/DropDown/DropDownRounded";
import FilterDropDown from "@launchpad/components/DropDown/FilterDropDown";
import filterIcon from "@launchpad/assets/icons/filter.png";

const options = [
    {
        id: 1,
        title: "Highest",
        value: "Highest",
    },
    {
        id: 2,
        title: "Lowest",
        value: "Lowest",
    },
];
const filterOptions = [
    {
        id: 1,
        title: "Rockets",
        value: "rockets",
    },
    {
        id: 2,
        title: "Ships",
        value: "ships",
    },
    {
        id: 3,
        title: "All",
        value: "all",
    },
];
interface LaunchPadFilter {
    classNames: string;
}
const LaunchPadFilter = (props: LaunchPadFilter) => {
    return (
        <div className={props?.classNames + " flex mb-7"}>
            <div className="flex gap-3 2xl1:flex-row flex-col w-full flex-wrap">
                <div className="flex w-full">
                    <div className="flex gap-3 items-center flex-wrap ml-auto">
                        <DropDownRounded
                            initialContent={"Sort"}
                            contentList={options}
                            fontSize={""}
                            textColor={""}
                            backgroundColor={""}
                        />
                        <FilterDropDown
                            filterIcon={filterIcon}
                            contentList={filterOptions}
                            initialContent={""}
                            fontSize={""}
                            textColor={""}
                            backgroundColor={""}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaunchPadFilter;
