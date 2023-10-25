import React, { useState } from "react";
import { Tabs } from "antd";

import Active from "./sections/Active";
import Finished from "./sections/Finished";
const { TabPane } = Tabs;

const Bids = () => {
    const tabItems = [
        {
            key: 1,
            label: "Active",
            children: <Active />,
        },
        {
            key: 2,
            label: "Finished",
            children: <Finished />,
        },
    ];

    const [activeTabKey, setActiveTabKey] = useState<string>("1");
    const handleTabChange = (key: string) => {
        setActiveTabKey(key as string);
    };

    return (
        <>
            <div className="flex  ">
                <Tabs
                    defaultActiveKey={activeTabKey}
                    type="card"
                    className="w-full shoppingTabs"
                    onChange={handleTabChange}
                >
                    {tabItems.map((item) => (
                        <TabPane key={item.key.toString()} tab={item.label}>
                            {item.children}
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        </>
    );
};

export default Bids;
