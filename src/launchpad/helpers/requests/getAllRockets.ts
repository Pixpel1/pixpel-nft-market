/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@launchpad/config/config";
import { collection, query, getDocs } from "firebase/firestore";

export const getAllRockets = async () => {
    const q = query(collection(db, "rockets"));
    const querySnapshot = await getDocs(q);
    const launchpad: any[] = [];
    querySnapshot.forEach((doc: any) => {
        launchpad.push({ id: doc.id, ...doc.data() });
    });
    return launchpad;
};
