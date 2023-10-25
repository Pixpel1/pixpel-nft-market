import { Tabs } from "antd";
import type { TabsProps } from "antd";
import OrdersView from "./sections/OrdersView";
import OrdersCancelled from "./sections/OrdersCancelled";

const Orders = () => {
    const cardItems: TabsProps["items"] = [
        {
            key: "1",
            label: "Orders",
            children: <OrdersView />,
        },
        {
            key: "2",
            label: "Cancelled",
            children: <OrdersCancelled />,
        },
    ];
    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <>
            <Tabs
                defaultActiveKey="1"
                type="card"
                className="w-full shoppingTabs"
                items={cardItems}
                onChange={onChange}
            />
        </>
    );
};

export default Orders;
