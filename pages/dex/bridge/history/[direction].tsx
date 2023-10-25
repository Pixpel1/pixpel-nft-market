import { NextPage } from "next";

import History from "@dex/components/templates/history";
import { useRouter } from "next/router";
import { QueryRouter } from "@dex/types/config";
import { BridgeDirection, routes } from "@dex/constants/routes";
import { useEffect } from "react";
import Layout from "@dex/components/templates/Layout";

const TransferHistory: NextPage = () => {
    const { query, prefetch, isReady } = useRouter() as QueryRouter<{ direction: BridgeDirection }>;

    useEffect(() => {
        if (isReady) {
            prefetch(
                routes.history(
                    query.direction === BridgeDirection.Deposit ? BridgeDirection.Withdraw : BridgeDirection.Deposit
                )
            );
        }
    }, [isReady, prefetch, query.direction]);

    return (
        <Layout>
            <History depositSelected={query.direction === BridgeDirection.Deposit} />
        </Layout>
    );
};

export default TransferHistory;
