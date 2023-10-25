import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Dropdown, Space } from "antd";

interface TokenDropDown {
    title: string;
    items: {
        label: string;
        key: string;
        value: string;
        type?: string;
    }[];
}

const TokenDropDown = ({ items, title }: TokenDropDown) => {
    const [selectedItem, setSelectedItem] = useState("");

    const handleItemClick = (ItemValue: string) => {
        setSelectedItem(ItemValue);
    };

    return (
        <>
            <Dropdown
                menu={{
                    items: items.map((item) => ({
                        ...item,
                        onClick: () => handleItemClick(item.value),
                    })),
                }}
                overlayClassName="token-dropdown"
                trigger={["click"]}
            >
                <div className="bg-app-black-button text-xl cursor-pointer px-3 py-1 rounded-md font-medium">
                    <Space className="space-x-4">
                        <span className="text-xl font-medium">{selectedItem ? selectedItem : title}</span>
                        <BsChevronDown />
                    </Space>
                </div>
            </Dropdown>
        </>
    );
};

export default TokenDropDown;
