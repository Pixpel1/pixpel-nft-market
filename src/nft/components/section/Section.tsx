import React from "react";
import { Button, Menu } from "@nft/components";
import Image, { StaticImageData } from "next/image";
import Logo from "@public/assets/images/logo.svg";

interface header {
    styles: StyleMedia;
}

const Header = (props: header) => {
    const styles = {
        marginBottom: "60px",
    };
    if (props.styles) Object.assign(styles, props.styles);
    return (
        <header className="header" style={styles}>
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <Image src={Logo as StaticImageData} className="logo" alt="" />
                    </div>
                    <Menu />
                    <div className="header__group">
                        <Button
                            title={""}
                            fontStyle={""}
                            buttonStyle={""}
                            onClick={function (): void {
                                console.log("Function not implemented.");
                            }}
                            selected={false}
                            classes={""}
                        >
                            Log in
                        </Button>
                        <Button
                            buttonStyle="btn--brand"
                            title={""}
                            fontStyle={""}
                            onClick={function (): void {
                                console.log("Function not implemented.");
                            }}
                            selected={false}
                            classes={""}
                        >
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
