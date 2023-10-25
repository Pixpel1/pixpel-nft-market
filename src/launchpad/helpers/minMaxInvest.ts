export const minMaxInvest = (rocket: {
    cancel: boolean;
    cis2_amount: number;
    cis2_price: number;
    cliff_duration: number;
    id: string;
    doc_id: string;
    cliff_period: string;
    description: string;
    dev_paid: number;
    discord_url: string;
    end_time: string;
    fb_url: string;
    github_url: string;
    launchpad_id: string;
    hard_cap: number;
    holders: {
        length: number;
        wallet: string;
    };
    address: string;
    amount: number;
    instagram_url: string;
    invest_amount: number;
    live: boolean;
    live_pause_count: number;
    logo_url: string;
    maximum_invest: number;
    minimum_invest: number;
    owner: string;
    pause_start: string;
    pause_until: string;
    reddit_url: string;
    soft_cap: number;
    start_time: string;
    telegram_url: string;
    title: string;
    token_release_data: {
        id: number;
        per_cycle_release: number;
        release_time: string;
    }[];
    total_tx: number;
    twitter_url: string;
    website_url: string;
}) => {
    try {
        if (!rocket) {
            return {
                min: 0,
                max: 0,
            };
        }
        return {
            min: Number(rocket.minimum_invest),
            max: Number(rocket.maximum_invest),
        };
    } catch (err) {
        console.log(err);
        return null;
    }
};
