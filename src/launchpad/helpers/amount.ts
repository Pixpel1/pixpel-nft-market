export function microCcdToCcdString(amount: number) {
    const int = amount / 1e6;
    const frac = amount % 1e6;
    return Number(int) < 1000000 ? int : `${int}.${frac.toString().padStart(2, "0")}`;
}
