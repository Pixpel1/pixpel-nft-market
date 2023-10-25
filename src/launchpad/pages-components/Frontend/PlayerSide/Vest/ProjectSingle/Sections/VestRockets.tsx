import RocketCard from "@launchpad/components/Cards/RocketCard";
import { useEffect, useState } from "react";

interface VestRockets {
    selectedRocket: {
        token_release_data: { release_time: string; per_cycle_release: number; id: number }[];
        ownedToken: number;
        cis2_price: number;
        isDisabled: boolean;
        next_release_amount: number;
        claimed_token: number;
        next_release_date: string | number;
        completed_cycle: number;
    };
    nextRelease: {
        ownedToken: number;
        isDisabled: boolean;
        next_release_amount: number;
        claimed_token: number;
        next_release_date: string | number;
        completed_cycle: number;
    };
}

const VestRockets = ({ selectedRocket, nextRelease }: VestRockets) => {
    const [releaseData, setReeleaseData] = useState<
        {
            id: number;
            year: number | string;
            cards: {
                title: string;
                month: string;
                tokens: string;
            }[];
        }[]
    >([]);

    function stringifyNumber(n: number) {
        const special = [
            "zeroth",
            "first",
            "second",
            "third",
            "fourth",
            "fifth",
            "sixth",
            "seventh",
            "eighth",
            "ninth",
            "tenth",
            "eleventh",
            "twelfth",
            "thirteenth",
            "fourteenth",
            "fifteenth",
            "sixteenth",
            "seventeenth",
            "eighteenth",
            "nineteenth",
        ];
        const deca = ["twent", "thirt", "fort", "fift", "sixt", "sevent", "eight", "ninet"];
        if (n < 20) return special[n];
        if (n % 10 === 0) return deca[Math.floor(n / 10) - 2] + "ieth";
        return deca[Math.floor(n / 10) - 2] + "y-" + special[n % 10];
    }

    const getYearsData = () => {
        try {
            const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];

            const arr: {
                id: number;
                year: number | string;
                cards: {
                    title: string;
                    month: string;
                    tokens: string;
                }[];
            }[] = [];
            const clone_all_data = selectedRocket?.token_release_data;

            const arr_cards: { id: number; tokens: string; title: string; month: string }[] = [];

            let year = 0;

            clone_all_data.forEach((element, index: number) => {
                const d = new Date(element.release_time);

                const release = stringifyNumber(index + 1);

                const str = ((nextRelease?.ownedToken * element.per_cycle_release) / 100).toString();
                const card = {
                    id: element.id,
                    tokens: str,
                    title: `${release} Release`,
                    month: months[d.getMonth()],
                };

                arr_cards.push(card);

                const data = {
                    id: 1,
                    year: d.getFullYear(),
                    cards: arr_cards,
                };

                if (year !== d.getFullYear()) {
                    arr.push(data);
                }
                year = d.getFullYear();
            });

            setReeleaseData(arr);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getYearsData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="grid bg-app-black px-6 py-8">
            <div className="flex flex-wrap  gap-8">
                <RocketCard
                    headColor="#0196c91a"
                    title="Angel Investors"
                    yearCardsData={releaseData}
                    // rockets={selectedRocket}
                    nextRelease={nextRelease}
                />
            </div>
        </div>
    );
};

export default VestRockets;
