import React, { createContext, useState, useContext, ReactNode, Context, Dispatch, SetStateAction } from "react";
import PropTypes from "prop-types";

interface AppContext {
    selectedDevWalletIndex: number;
    selectedIndex: number;
    selectStaking: number;
    setSelectedIndex?: Dispatch<SetStateAction<number>>;
    setSelectStaking?: Dispatch<SetStateAction<number>>;
    buyCryptoState: number;
    setBuyCryptoState?: Dispatch<SetStateAction<number>>;
    p2PState: number;
    setP2PState?: Dispatch<SetStateAction<number>>;
    depositState: number;
    setDepositState?: Dispatch<SetStateAction<number>>;
    orderBuyState: number;
    setOrderBuyState?: Dispatch<SetStateAction<number>>;
    orderSellState: number;
    setOrderSellState?: Dispatch<SetStateAction<number>>;
    developerHeader: number;
    playerHeader: number;
    setDeveloperHeader?: Dispatch<SetStateAction<number>>;
    setPlayerHeader?: Dispatch<SetStateAction<number>>;
    setSelectedDevWalletIndex?: Dispatch<SetStateAction<number>>;
    cartMenuClicked?: boolean;
    setCartMenuClicked?: Dispatch<SetStateAction<boolean>>;
    toggleCartClick?: () => void;
    addToCart?: boolean;
    setAddToCart?: Dispatch<SetStateAction<boolean>>;
    handleAddToCart?: () => void;
    handleCloseAddToCart?: () => void;
}

export const AppContext: Context<AppContext> = createContext({
    selectedIndex: 1,
    selectStaking: 1,
    buyCryptoState: 1,
    p2PState: 1,
    depositState: 1,
    orderBuyState: 1,
    orderSellState: 1,
    developerHeader: 1,
    playerHeader: 1,
    selectedDevWalletIndex: 1,
});

interface AppContextProvider {
    children: ReactNode;
}

const AppContextProvider = ({ children }: AppContextProvider) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedDevWalletIndex, setSelectedDevWalletIndex] = useState(0);
    const [selectStaking, setSelectStaking] = useState(0);
    const [buyCryptoState, setBuyCryptoState] = useState(2);
    const [p2PState, setP2PState] = useState(0);
    const [depositState, setDepositState] = useState(0);
    const [orderBuyState, setOrderBuyState] = useState(0);
    const [orderSellState, setOrderSellState] = useState(0);
    const [developerHeader, setDeveloperHeader] = useState(-1);
    const [playerHeader, setPlayerHeader] = useState(-1);
    const [cartMenuClicked, setCartMenuClicked] = useState<boolean>(false);
    const [addToCart, setAddToCart] = useState<boolean>(false);

    const toggleCartClick = () => {
        setCartMenuClicked((prevCartClicked) => !prevCartClicked);
    };
    const handleAddToCart = () => {
        setAddToCart(true);
    };
    const handleCloseAddToCart = () => {
        setAddToCart(false);
    };
    return (
        <AppContext.Provider
            value={{
                selectedDevWalletIndex,
                selectedIndex,
                selectStaking,
                setSelectedIndex,
                setSelectStaking,
                buyCryptoState,
                setBuyCryptoState,
                p2PState,
                setP2PState,
                depositState,
                setDepositState,
                orderBuyState,
                setOrderBuyState,
                orderSellState,
                setOrderSellState,
                developerHeader,
                playerHeader,
                setDeveloperHeader,
                setPlayerHeader,
                setSelectedDevWalletIndex,
                cartMenuClicked,
                setCartMenuClicked,
                toggleCartClick,
                addToCart,
                setAddToCart,
                handleAddToCart,
                handleCloseAddToCart,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    children: PropTypes.object,
};

export default AppContextProvider;
export const useAppContext: () => AppContext = () => useContext(AppContext);
