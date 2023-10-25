import React from "react";
import { activityList } from "@nft/pages-components/Profile/datalist";

const ProfileActivity = () => {
    return (
        <div className="h-auto lg:w-1/2 w-full py-6 px-8 bg-app-black flex flex-col rounded-lg">
            <div className="text-white text-2xl font-semibold">Activity</div>
            <div className="flex flex-col">
                {activityList.map((activity, idx) => {
                    return (
                        <div key={idx} className="flex flex-row justify-between border-b-2 border-app-black pb-4 my-2">
                            <div className="flex flex-col">
                                <p className="text-white font-medium text-base">{activity.title.skill}</p>
                                <p className="text-app-black-duration font-medium text-xs">{activity.title.locate}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-white font-medium text-base">{activity.title.level}</p>
                                <p className="text-app-black-duration font-medium text-xs">{activity.title.time}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProfileActivity;
