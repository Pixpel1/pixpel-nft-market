import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <>
            <main className=" pt-11">
                <h2>404</h2>
                <p>That feels like an existential question, don&apos;t you think?</p>
            </main>
            <nav>
                <Link href="/">Home</Link>
            </nav>
        </>
    );
};

export default NotFound;
