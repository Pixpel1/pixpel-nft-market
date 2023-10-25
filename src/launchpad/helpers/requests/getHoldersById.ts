/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@launchpad/config/config";
import { DocumentData, Query, collection, getDocs, query, where } from "firebase/firestore";

export const getHolderById = async (id: string | number, account: string) => {
    const queryRef = query(collection(db, `holders`));

    let q: Query<DocumentData>;
    if (id) {
        q = query(queryRef, where("launchpad_id", "==", id));
    }
    q = query(queryRef, where("address", "==", account));
    const querySnapshot = await getDocs(q);
    const lockupHolders: any[] = [];
    querySnapshot.forEach((doc: any) => {
        lockupHolders.push({ ...doc.data(), doc_id: doc.id });
    });

    if (id) {
        return lockupHolders.find((item) => item.launchpad_id === id);
    }
    return lockupHolders;
};
