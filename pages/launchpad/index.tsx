import React from "react";
import Login from "@launchpad/pages-components/Auth/Login";
import Header from "@launchpad/components/header/Header";

const Home = () => {
    return (
        <>
            <Header />
            <main className="flex pt-11">
                <Login />
            </main>
        </>
    );
};

export default Home;
