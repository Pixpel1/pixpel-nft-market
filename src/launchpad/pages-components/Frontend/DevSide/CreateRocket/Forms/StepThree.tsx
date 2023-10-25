import { Form, Input } from "antd";
import Image from "next/image";
import DiscordUrlIcon from "@launchpad/assets/developer/icons/discord_url.png";
import FBUrlIcon from "@launchpad/assets/developer/icons/facebook_url.png";
import GithubUrlIcon from "@launchpad/assets/developer/icons/github_url.png";
import InstagramUrlIcon from "@launchpad/assets/developer/icons/instagram_url.png";
import RedditUrlIcon from "@launchpad/assets/developer/icons/reddit_url.png";
import TelegramUrlIcon from "@launchpad/assets/developer/icons/telegram_url.png";
import TwitterUrlIcon from "@launchpad/assets/developer/icons/twitter_url.png";
import WebsiteUrlIcon from "@launchpad/assets/developer/icons/website_url.png";

interface StepThree {
    stepOneValidate: (val: number) => void;
    classes: string;
}

const StepThree = ({ stepOneValidate, classes }: StepThree) => {
    return (
        <div className={classes}>
            <div className="flex flex-col">
                <h2 className="text-3xl text-app-blue font-semibold mt-8">Social Networks</h2>
                <div className="grid grid-cols-2 gap-x-32 gap-y-6 mt-8">
                    <Form.Item label="Facebook" name="fb_url" className="mb-0 rounded-xl">
                        <Input
                            onChange={() => {
                                stepOneValidate(3);
                            }}
                            placeholder="Ex: https://facebook.com/..."
                            prefix={<Image src={FBUrlIcon} alt="fb_url" />}
                        />
                    </Form.Item>
                    <Form.Item label="Website" name="website_url" className="mb-0 rounded-xl">
                        <Input
                            onChange={() => {
                                stepOneValidate(3);
                            }}
                            placeholder="https://pixpel.io"
                            prefix={<Image src={WebsiteUrlIcon} alt="website_url" />}
                        />
                    </Form.Item>
                    <Form.Item label="Github" name="github_url" className="mb-0 rounded-xl">
                        <Input
                            onChange={() => {
                                stepOneValidate(3);
                            }}
                            placeholder="Ex: https://github.com/..."
                            prefix={<Image src={GithubUrlIcon} alt="github_url" />}
                        />
                    </Form.Item>
                    <Form.Item label="Twitter" name="twitter_url" className="mb-0 rounded-xl">
                        <Input
                            onChange={() => {
                                stepOneValidate(3);
                            }}
                            placeholder="Ex: https://twitter.com/..."
                            prefix={<Image src={TwitterUrlIcon} alt="twitter_url" />}
                        />
                    </Form.Item>

                    <Form.Item label="Instagram" name="instagram_url" className="mb-0 rounded-xl">
                        <Input
                            onChange={() => {
                                stepOneValidate(3);
                            }}
                            placeholder="Ex: https://instagram.com/..."
                            prefix={<Image src={InstagramUrlIcon} alt="instagram_url" />}
                        />
                    </Form.Item>
                    <Form.Item label="Telegram" name="telegram_url" className="mb-0 rounded-xl">
                        <Input
                            onChange={() => {
                                stepOneValidate(3);
                            }}
                            placeholder="Ex: https://t.me/..."
                            prefix={<Image src={TelegramUrlIcon} alt="telegram_url" />}
                        />
                    </Form.Item>
                    <Form.Item label="Reddit" name="reddit_url" className="mb-0 rounded-xl w-full">
                        <Input
                            onChange={() => {
                                stepOneValidate(3);
                            }}
                            placeholder="Ex: https://reddit.com/..."
                            prefix={<Image src={RedditUrlIcon} alt="reddit_url" />}
                        />
                    </Form.Item>
                    <Form.Item label="Discord" name="discord_url" className="mb-0 rounded-xl">
                        <Input
                            onChange={() => {
                                stepOneValidate(3);
                            }}
                            placeholder="Ex: https://discord.com/..."
                            prefix={<Image src={DiscordUrlIcon} alt="discord_url" />}
                        />
                    </Form.Item>
                </div>
            </div>
        </div>
    );
};

export default StepThree;
