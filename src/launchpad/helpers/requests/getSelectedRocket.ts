import { db } from "@launchpad/config/config";
import { doc, getDoc } from "firebase/firestore";

export const getSelectedRocket = async (id: string) => {
    const docRef = doc(db, "rockets", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log(docSnap.data());
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        return null;
    }
};
