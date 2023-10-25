import React from "react";
import Register from "@launchpad/pages-components/Auth/Register";
import Header from "@launchpad/components/header/Header";

const Home = () => {
    return (
        <>
            <Header />
            <main className="flex pt-11">
                <Register />
            </main>
        </>
    );
};

export default Home;
