import React from "react";
import TeamSection from "./TeamSection";

function PixpelStudios({ edit }: { edit?: boolean }) {
    return (
        <div className="py-8 bg-app-black mb-60 px-6 lg:px-32">
            <p className="text-[40px] font-bold text-center mb-11">PIXPEL STUDIOS</p>
            <div className="flex justify-center flex-col lg:flex-row gap-8 text-lg font-medium items-center">
                <p className="text-app-black-duration">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis placerat nunc at mollis.
                    Aliquam porta malesuada imperdiet. Etiam malesuada finibus ipsum, quis porttitor nulla. Ut magna
                    augue, interdum at sem at, sodales volutpat libero. Nullam sed dui et erat congue ullamcorper.
                    Quisque egestas dolor eu odio sagittis, eu tincidunt leo feugiat. Duis posuere urna non tempor
                    consequat. Nunc tellus libero, pulvinar eu elit id, luctus fermentum nisi. Vestibulum fringilla
                    justo molestie, hendrerit ex sed, bibendum nulla. Phasellus hendrerit nulla in enim imperdiet
                    posuere. Phasellus at tellus at lorem dapibus porttitor.
                </p>
                <p className="text-app-black-duration">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis placerat nunc at mollis.
                    Aliquam porta malesuada imperdiet. Etiam malesuada finibus ipsum, quis porttitor nulla. Ut magna
                    augue, interdum at sem at, sodales volutpat libero. Nullam sed dui et erat congue ullamcorper.
                    Quisque egestas dolor eu odio sagittis, eu tincidunt leo feugiat. Duis posuere urna non tempor
                    consequat. Nunc tellus libero, pulvinar eu elit id, luctus fermentum nisi. Vestibulum fringilla
                    justo molestie, hendrerit ex sed, bibendum nulla. Phasellus hendrerit nulla in enim imperdiet
                    posuere. Phasellus at tellus at lorem dapibus porttitor.
                </p>
            </div>
            <TeamSection edit={edit} />
        </div>
    );
}

export default PixpelStudios;
