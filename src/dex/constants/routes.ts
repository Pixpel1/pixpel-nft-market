export enum BridgeDirection {
    Deposit = "deposit",
    Withdraw = "withdraw",
}

export const routes = {
    deposit: {
        path: "/dex/bridge/",
        overview: "/dex/bridge/deposit/overview",
        tx: (ethTxHash: string) => `/dex/bridge/deposit/${ethTxHash}`,
    },
    withdraw: {
        path: "/dex/bridge/withdraw",
        overview: "/dex/bridge/withdraw/overview",
        tx: (ccdTxHash: string) => `/dex/bridge/withdraw/${ccdTxHash}`,
    },
    history: (direction = BridgeDirection.Deposit) => `/dex/bridge/history/${direction}`,
};
