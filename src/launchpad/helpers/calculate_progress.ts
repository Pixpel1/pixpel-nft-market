/* eslint-disable import/no-anonymous-default-export */
export default (invest_amount: string | number, hard_cap: string | number) =>
    (Number(invest_amount) * 100) / Number(hard_cap);
