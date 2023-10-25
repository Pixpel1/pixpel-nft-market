import React from "react";
import HeaderWithPills from "./HeaderWithPills";
interface TabsItem {
    id: number;
    title: string;
    active: boolean;
}
interface CollectionCardType {
    slug?: string;
    title?: string;
    tabs?: boolean;
    tabsData?: TabsItem[];
    setTabsActiveIndex?: (value: number) => void;
    filterButtons?: boolean;
}
const HeaderWithPill = (props: CollectionCardType) => {
    return <HeaderWithPills {...props} />;
};

export default HeaderWithPill;
