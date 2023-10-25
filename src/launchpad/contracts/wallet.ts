/* eslint-disable @typescript-eslint/no-explicit-any */
import { WalletApi, detectConcordiumProvider } from "@concordium/browser-wallet-api-helpers";

export async function connectClient(dispatchSetWallet: any) {
    const client = await detectConcordiumProvider();

    // Listen for relevant events from the wallet.
    client.on("accountChanged", (account) => {
        console.debug("browserwallet event: accountChange", { account });
        dispatchSetWallet(account);
    });

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    client.on("accountDisconnected", async () => {
        console.debug("browserwallet event: accountDisconnected");
    });

    client.on("chainChanged", (chain) => {
        console.debug("browserwallet event: chainChanged", { chain });
    });

    return client;
}

export async function connectWallet(client: WalletApi) {
    const wallet = await client.connect();
    return wallet;
}

// Check if the user is connected to the testnet chain by checking if the testnet genesisBlock exists.
// The smart contract voting module is deployed on the testnet chain.
