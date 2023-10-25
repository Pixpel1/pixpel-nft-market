import React from "react";
import PlayerHeader from "@launchpad/components/header/PlayerHeader";
import Vest from "@launchpad/pages-components/Frontend/PlayerSide/Vest/Vest";

function Player() {
    return (
        <>
            <PlayerHeader headerType="player" />
            <main className=" pt-11">
                <Vest />
            </main>
        </>
    );
}

export default Player;
