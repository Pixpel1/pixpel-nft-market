import React from "react";
import PlayerHeader from "@launchpad/components/header/PlayerHeader";
import GameLobby from "@launchpad/pages-components/Frontend/PlayerSide/GameLobby/GameLobby";

function Player() {
    return (
        <>
            <PlayerHeader headerType="player" />
            <main>
                <GameLobby />
            </main>
        </>
    );
}

export default Player;
