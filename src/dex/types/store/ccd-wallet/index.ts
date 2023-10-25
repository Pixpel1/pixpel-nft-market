interface CCDWalletState {
    account?: string | undefined;
    isActive?: boolean;
}

interface CCDWalletActions {
    setWallet: (ccdWallet: string) => void | null;
    deleteWallet: () => void | null;
}

export type CCDWalletStore = CCDWalletState & CCDWalletActions;
