import React from "react";
// import Footer from "@launchpad/components/footer/Footer";
import PlayerHeader from "@launchpad/components/header/PlayerHeader";
import Home from "@launchpad/pages-components/Frontend/PlayerSide/Rockets/Home";

function Player() {
    return (
        <>
            <PlayerHeader headerType="player" />
            <main className=" pt-11">
                <Home />
            </main>
            {/* <Footer /> */}
        </>
    );
}

export default Player;
