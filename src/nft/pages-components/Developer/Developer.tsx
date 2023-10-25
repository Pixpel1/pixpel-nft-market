import React from "react";
import SelectWorking from "../../components/Developer/SelectWorking";
import { workingList } from "./dataList";
import { useRouter } from "next/router";

const Developer = () => {
    const navigate = useRouter();
    const handleWorking = (idx: number) => () => {
        switch (idx) {
            case 0:
                navigate.push("/mycollection");
                break;
            case 1:
                navigate.push("/create-nft");
                break;
            case 2:
                navigate.push("/mysterybox");
                break;
            case 3:
                navigate.push("/");
                break;
            default:
                break;
        }
    };
    return (
        <div className="flex flex-col xl:px-12 lg:px-8 sm:px-4 px-2 pb-20 gap-11">
            {workingList.map((working, idx) => {
                return (
                    <SelectWorking
                        key={idx}
                        title={working.title}
                        content={working.content}
                        button={working.button}
                        handleClick={handleWorking(idx)}
                    />
                );
            })}
        </div>
    );
};

export default Developer;
