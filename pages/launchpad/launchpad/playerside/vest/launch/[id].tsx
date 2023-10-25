import React from "react";
import PlayerHeader from "@launchpad/components/header/PlayerHeader";
import VestInner from "@launchpad/pages-components/Frontend/PlayerSide/Vest/ProjectSingle/VestInner";

function Player() {
    return (
        <>
            <PlayerHeader headerType="player" />
            <main className=" pt-11">
                <VestInner />
            </main>
        </>
    );
}

export default Player;
