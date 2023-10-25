import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Transfer from "@dex/components/templates/transfer";
import { routes } from "@dex/constants/routes";
import Layout from "@dex/components/templates/Layout";

const Withdraw: NextPage = () => {
    const { prefetch } = useRouter();

    useEffect(() => {
        prefetch(routes.withdraw.overview);
        prefetch(routes.deposit.path);
    }, [prefetch]);

    return (
        <Layout>
            <Transfer isDeposit={false} />
        </Layout>
    );
};

export default Withdraw;
