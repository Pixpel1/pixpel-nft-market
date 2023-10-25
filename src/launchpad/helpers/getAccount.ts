import { detectConcordiumProvider } from "@concordium/browser-wallet-api-helpers";

export const getAcount = async () => {
    const provider = await detectConcordiumProvider();
    const account = await provider.getMostRecentlySelectedAccount();
    return account;
};
