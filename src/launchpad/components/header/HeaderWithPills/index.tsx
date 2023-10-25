import React from "react";
import HeaderWithPills from "./HeaderWithPills";

interface HeaderWithPillsProps {
    slug: string;
    title: string;
    tabs: boolean;
}
const index = (props: HeaderWithPillsProps) => {
    return <HeaderWithPills {...props} />;
};

export default index;
