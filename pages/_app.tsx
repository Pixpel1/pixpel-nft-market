import React from "react";
import { Provider } from "react-redux";
import AppContextProvider from "@nft/contexts/AppContext";
import LaunchpadAppContextProvider from "@launchpad/context/AppContext";
import { Footer, Header } from "@nft/components/index";
import { store } from "@nft/store";
import Layout from "@dex/components/organisms/layout/Layout";
import { detectConcordiumProvider } from "@concordium/browser-wallet-api-helpers";
import connectors from "@dex/config/connectors";
import network from "@dex/config/network";
import useCCDWallet from "@dex/hooks/use-ccd-wallet";
import useMediaQuery from "@dex/hooks/use-media-query";
import moment from "moment";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { routes } from "@dex/constants/routes";
import { appContext, AppContext } from "@dex/root/app-context";
import WatchWithdrawals from "@dex/root/WatchWithdrawals";
import useCCDWalletStore from "@dex/store/ccd-wallet/ccdWalletStore";
import GlobalStyles from "@dex/theme/global";
import { QueryRouter } from "@dex/types/config";
import Web3Provider from "web3-react";
import { WagmiConfig, configureChains, createClient, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

// styles
import "@styles/scss/index.scss";
import "@styles/scss/variebles.scss";
// import "@styles/scss/_variables.scss";
import "@styles/scss/_frontend.scss";
import "@styles/scss/grid.scss";
import "@styles/scss/components/table.scss";
import "@styles/AddModal.scss";
import "@styles/Banner.scss";
import "@styles/Button.scss";
import "@styles/CardModal.scss";
import "@styles/Cart.scss";
import "@styles/checkbox.scss";
import "@styles/CheckoutPay.scss";
import "@styles/CollectionsBanner.scss";
import "@styles/Exchange.scss";
import "@styles/Filter.scss";
import "@styles/GameMarket.scss";
import "@styles/globals.css";
import "@styles/Header.scss";
import "@styles/Home.scss";
import "@styles/index.css";
import "@styles/index.scss";
import "@styles/InputDatePicker.scss";
import "@styles/Inventory.scss";
import "@styles/Menu.scss";
import "@styles/Modal.scss";
import "@styles/pagination.scss";
import "@styles/Rocket.scss";
import "@styles/stickyCart.scss";
// import "@styles/Section.scss";
// import "@styles/Table.scss";
// import "@styles/TableCell.scss";
// import "@styles/TableRow.scss";
// import "../src/launchpad/components/DropDown/styles/index.module.scss";
// import "../src/launchpad/components/Modal/index.module.scss";
import "../src/launchpad/components/checkbox/checkbox.module.scss";
// import "../src/launchpad/components/header/header.module.scss";
// import "../src/launchpad/components/header/index.module.scss";
import "@styles/vest.scss";
import "@styles/vestinner.scss";
import "@styles/PopularCrypto.scss";
import "@styles/PlayerHomeImage.css";
import "@styles/DeveloperHomeImage.css";

moment.updateLocale("en", {
    relativeTime: {
        future: "in ~%s",
        past: "%s ago",
        s: "1s",
        ss: "%ss",
        m: "1m",
        mm: "%dm",
        h: "1h",
        hh: "%dh",
        d: "1d",
        dd: "%dd",
        M: "1M",
        MM: "%dM",
        y: "1Y",
        yy: "%dY",
    },
});

const kava = {
    /** ID in number form */
    id: 2221,
    /** Human-readable name */
    name: "KAVA EVM TESTNET",
    /** Internal network name */
    network: "kava",
    /** Currency used by chain */
    nativeCurrency: {
        name: "KAVA",
        /** 2-6 characters long */
        symbol: "KAVA",
        decimals: 18,
    },
    /** Collection of RPC endpoints */
    rpcUrls: {
        default: { http: ["https://evm.testnet.kava.io"] },
    },
    // /** Collection of block explorers */
    // blockExplorers: {
    //     [key: string]: BlockExplorer;
    //     default: BlockExplorer;
    // };
    // /** Collection of contracts */
    // contracts: {
    //     ensRegistry: Contract;
    //     multicall3: Contract;
    // };
    /** Flag for test networks */
    testnet: true,
};

const { provider } = configureChains([kava, mainnet], [publicProvider()]);

const client = createClient({
    autoConnect: true,
    provider,
});

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

function UseConcordiumEvents() {
    const { refreshMostRecentlySelectedAccount } = useCCDWallet();
    const { setWallet, deleteWallet } = useCCDWalletStore();

    // Sets up event handlers once, globally.
    useEffect(() => {
        detectConcordiumProvider().then((p) => {
            p.on("accountChanged", setWallet);
            p.on("accountDisconnected", () => {
                deleteWallet();
            });
            p.on("chainChanged", (c) => {
                // There is a bug in the browser wallet not properly triggering this
                // if no account in the wallet is connected to the dapp for the network selected.
                // As such, this is unreliable for now.
                if (c === network.ccd.genesisHash) {
                    refreshMostRecentlySelectedAccount();
                } else {
                    deleteWallet();
                }
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const isTablet = useMediaQuery("(max-width: 1050px)"); // res at which cornucopia logo might touch the modal
    const isMobile = useMediaQuery("(max-width: 540px)"); // res at which the design looks a little weird
    const {
        asPath,
        query: { tx },
        pathname,
    } = useRouter() as QueryRouter<{ tx: string }>;

    UseConcordiumEvents();

    /**
     * Shows whether user is on withdraw progress page, in which case we should NOT watch for pending withdrawals
     */
    const isWithdrawProgressRoute = useMemo(() => tx !== undefined && asPath === routes.withdraw.tx(tx), [asPath, tx]);
    const appContextValue: AppContext = useMemo(() => ({ isTablet, isMobile }), [isTablet, isMobile]);

    return (
        <Provider store={store}>
            <AppContextProvider>
                <LaunchpadAppContextProvider>
                    <appContext.Provider value={appContextValue}>
                        <WagmiConfig client={client}>
                            <Web3Provider connectors={connectors} libraryName="ethers.js">
                                <GlobalStyles />
                                <QueryClientProvider client={queryClient}>
                                    <Layout>
                                        {!pathname.startsWith("/launchpad") && (
                                            <Header
                                                styles={
                                                    router.pathname === "/"
                                                        ? {
                                                              position: "absolute",
                                                              top: "0",
                                                              width: "100%",
                                                          }
                                                        : undefined
                                                }
                                            />
                                        )}
                                        {isWithdrawProgressRoute || <WatchWithdrawals />}
                                        <Component {...pageProps} />
                                        <Footer />
                                    </Layout>
                                </QueryClientProvider>
                            </Web3Provider>
                        </WagmiConfig>
                    </appContext.Provider>
                </LaunchpadAppContextProvider>
            </AppContextProvider>
        </Provider>
    );
}

export default MyApp;
