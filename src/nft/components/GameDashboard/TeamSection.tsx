import Image from "next/image";
import React from "react";
import AddImage from "@public/icons/add_team_circle.svg";

function TeamSection({ edit }: { edit?: boolean }) {
    return (
        <div className="py-8 bg-app-black mt-[52px] mb-60 lg:px-24">
            <p className="text-[40px] font-bold text-center mb-16">ADD TEAM</p>
            <div className="flex flex-wrap gap-8">
                <div className="flex shrink-0 grow basis-[content] justify-center">
                    <div className="flex flex-col text-center justify-center">
                        <div className="w-[300px] h-[300px] bg-app-black-light rounded-full"></div>
                        <h3 className="text-base sm:text-xl text-app-black-duration mt-6 mb-0.5 font-medium">
                            Job title
                        </h3>
                        <div className="flex justify-center items-center gap-x-2 ">
                            <h2 className="text-xl sm:text-2xl font-medium">Name</h2>
                        </div>
                    </div>
                </div>
                <div className="flex shrink-0 grow basis-[content] justify-center">
                    <div className="flex flex-col text-center justify-center">
                        <div className="w-[300px] h-[300px] bg-app-black-light rounded-full"></div>
                        <h3 className="text-base sm:text-xl text-app-black-duration mt-6 mb-0.5 font-medium">
                            Job title
                        </h3>
                        <div className="flex justify-center items-center gap-x-2">
                            <h2 className="text-xl sm:text-2xl font-medium">Name</h2>
                        </div>
                    </div>
                </div>
                <div className="flex shrink-0 grow basis-[content] justify-center">
                    <div className="flex flex-col text-center justify-center">
                        <div className="w-[300px] h-[300px] bg-app-black-light rounded-full"></div>
                        <h3 className="text-base sm:text-xl text-app-black-duration mt-6 mb-0.5 font-medium">
                            Job title
                        </h3>
                        <div className="flex justify-center items-center gap-x-2">
                            <h2 className="text-xl sm:text-2xl font-medium">Name</h2>
                        </div>
                    </div>
                </div>
            </div>
            {edit && (
                <div className="flex mt-[150px] items-center lg:items-start lg:px-24 flex-col text-center justify-center">
                    <Image src={AddImage} alt="" />
                </div>
            )}
        </div>
    );
}

export default TeamSection;
