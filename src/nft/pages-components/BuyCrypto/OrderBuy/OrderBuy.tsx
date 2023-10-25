import { useAppContext } from "@nft/contexts/AppContext";
import OrderCompleted from "./OrderCompleted";
import OrderConfirm from "./OrderConfirm";
import ReleaseAssets from "./ReleaseAssets";

const OrderBuy = () => {
    const context = useAppContext();
    return (
        <>
            {context.orderBuyState === 0 ? <OrderConfirm /> : null}
            {context.orderBuyState === 1 ? <OrderCompleted /> : null}
            {context.orderBuyState === 2 ? <ReleaseAssets /> : null}
        </>
    );
};

export default OrderBuy;
