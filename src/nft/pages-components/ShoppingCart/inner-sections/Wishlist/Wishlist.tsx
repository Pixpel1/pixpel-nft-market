import React, { useEffect, useMemo, useState } from "react";
import { Tabs, Tooltip } from "antd";
import Modal from "../../../../components/Modal/Modal";
import Wish from "./sections/Wish";
import Christmas from "./sections/Christmas";
import Birthday from "./sections/Birthday";
import { relative } from "path";

const { TabPane } = Tabs;

const Wishlist = () => {
    const cardItems = useMemo(
        () => [
            {
                key: 1,
                label: "WISH",
                children: <Wish />,
            },
            {
                key: 2,
                label: "CHRISTMAS",
                children: <Christmas />,
            },
            {
                key: 3,
                label: "BIRTHDAY",
                children: <Birthday />,
            },
            {
                key: 4,
                label: "BABY",
                children: <></>,
            },
            {
                key: 5,
                label: (
                    <Tooltip placement="top" color="#29313C" title={"Create List"} overlayClassName={"create_nft_list"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                            <g clip-path="url(#clip0_696_14245)">
                                <path
                                    d="M18.7374 24.5695C18.1886 24.5809 17.6548 24.3893 17.2379 24.0313C16.821 23.6733 16.5503 23.1739 16.4774 22.6286C16.4082 22.2719 16.2431 21.9409 15.9999 21.6714C15.6829 21.288 15.2417 21.0283 14.7532 20.9375C14.4125 20.8839 14.0891 20.7509 13.8089 20.5494C13.4311 20.2917 13.1464 19.9187 12.9972 19.4858C12.9009 19.1583 12.865 18.8159 12.8911 18.4755C12.918 18.2494 12.9678 18.0267 13.0396 17.8108C13.0979 17.6245 13.1997 17.4549 13.3367 17.3162C13.6248 16.9443 14.0278 16.6788 14.4826 16.5611C14.7387 16.5 14.9903 16.4219 15.236 16.3271C15.5823 16.1911 15.8798 15.954 16.0901 15.6465C16.2903 15.3778 16.4264 15.0667 16.488 14.7372C16.5664 14.2452 16.8074 13.7938 17.1724 13.4556C17.4017 13.2641 17.6594 13.1098 17.9363 12.9983C18.1653 12.9122 18.408 12.869 18.6526 12.8707C18.8987 12.8559 19.1454 12.8884 19.3794 12.9664C19.5964 13.0317 19.8035 13.1265 19.9948 13.2482C20.2532 13.4254 20.4715 13.6553 20.6351 13.9229C20.7988 14.1905 20.9042 14.4897 20.9444 14.801C21.0152 15.1465 21.1722 15.4685 21.4007 15.7369C21.6485 16.0388 21.9729 16.2684 22.3397 16.4016C22.5307 16.4654 22.727 16.5133 22.9233 16.5611C23.2294 16.6328 23.515 16.7741 23.7579 16.9743C24.0008 17.1744 24.1944 17.4278 24.3239 17.715C24.4277 17.9354 24.4975 18.1703 24.5308 18.4117C24.5549 18.6831 24.5442 18.9565 24.4989 19.2253C24.4666 19.4711 24.3776 19.7059 24.239 19.9112C23.9809 20.3099 23.612 20.6241 23.1779 20.8152C23.0247 20.8799 22.8645 20.9263 22.7004 20.9535C22.3206 21.0145 21.9645 21.1779 21.6701 21.4261C21.3758 21.6743 21.1543 21.998 21.0293 22.3627C20.9719 22.5364 20.9276 22.7141 20.8967 22.8944C20.7602 23.4498 20.4116 23.9291 19.9258 24.2292C19.6722 24.4053 19.3745 24.5066 19.0664 24.5217C18.9558 24.5308 18.846 24.5468 18.7374 24.5695Z"
                                    fill="#FFC700"
                                />
                                <path
                                    d="M18.7941 0C15.077 0 11.4433 1.11433 8.35267 3.20208C5.26199 5.28982 2.85311 8.25722 1.43062 11.729C0.00814268 15.2008 -0.364043 19.0211 0.361132 22.7067C1.08631 26.3924 2.87627 29.7778 5.50468 32.435C8.13308 35.0922 11.4819 36.9018 15.1276 37.6349C18.7733 38.368 22.5521 37.9918 25.9863 36.5537C29.4205 35.1156 32.3557 32.6804 34.4209 29.5558C36.486 26.4313 37.5882 22.7578 37.5882 19C37.5882 13.9609 35.6081 9.12816 32.0836 5.56497C28.559 2.00178 23.7786 0 18.7941 0ZM18.7941 33.2088C16.0143 33.2088 13.297 32.3755 10.9857 30.8142C8.67438 29.2529 6.87294 27.0338 5.80916 24.4375C4.74539 21.8411 4.46705 18.9842 5.00936 16.228C5.55167 13.4718 6.89026 10.94 8.85586 8.95287C10.8215 6.96573 13.3258 5.61248 16.0522 5.06423C18.7785 4.51598 21.6045 4.79736 24.1727 5.87279C26.7408 6.94822 28.9359 8.7694 30.4803 11.106C32.0246 13.4426 32.8489 16.1898 32.8489 19C32.8489 22.7684 31.3682 26.3825 28.7324 29.0471C26.0966 31.7118 22.5217 33.2088 18.7941 33.2088Z"
                                    fill="#FFC700"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_696_14245">
                                    <rect width="38" height="38" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Tooltip>
                ),
            },
        ],
        []
    );

    // State to keep track of the active tab key
    const [activeTabKey, setActiveTabKey] = useState<string>("1");

    // State to control the visibility of the modal
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [lastTabClicked, setLastTabClicked] = useState(false);

    // Function to handle tab change
    const handleTabChange = (key: string) => {
        setActiveTabKey(key as string);
    };

    // Function to handle the last tab click and show the modal
    const handleLastTabClick = () => {
        setIsModalVisible(true);
        setLastTabClicked(true); // Set the lastTabClicked state to true
    };

    // Function to handle modal close
    const handleModalClose = () => {
        setIsModalVisible(false);
        setActiveTabKey("1");
        setLastTabClicked(false);
    };
    useEffect(() => {
        if (lastTabClicked) {
            const lastTabKey = cardItems[cardItems.length - 1].key.toString();
            const lastTabButton = document.querySelector(`.ant-tabs-tab[data-node-key="${lastTabKey}"]`);

            if (lastTabButton) {
                lastTabButton.classList.add("add-nft-item");
            }

            setLastTabClicked(false); // Reset the lastTabClicked state after adding the class
        }
    }, [cardItems, lastTabClicked]);
    useEffect(() => {
        setActiveTabKey("1");
    }, [isModalVisible, activeTabKey]);
    const onTabClick = (key: string) => {
        if (key === "5") {
            handleLastTabClick();
        }
    };

    return (
        <>
            <Tabs
                defaultActiveKey={activeTabKey}
                type="card"
                className="w-full shoppingTabs add_list_item"
                onChange={handleTabChange}
                onTabClick={onTabClick}
            >
                {cardItems.map((item) => (
                    <TabPane key={item.key.toString()} tab={item.label}>
                        {item.children}
                    </TabPane>
                ))}
            </Tabs>

            {isModalVisible && (
                <>
                    <Modal handleClose={handleModalClose} header={"Create New List"} ShoppingListItem={true} />
                </>
            )}
        </>
    );
};

export default Wishlist;
