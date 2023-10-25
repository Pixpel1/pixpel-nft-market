import Link from "next/link";
import React from "react";

interface MenuType {
    elemClass: string;
}

const Menu = (props: MenuType) => {
    const nameClass = `${props.elemClass} menu`;
    return (
        <nav className={nameClass.trim()}>
            <ul className="menu__list">
                <li className="menu__item">
                    <Link href="/swap-master" className="menu__link">
                        Buy Crypto
                    </Link>
                </li>
                <li className="menu__item">
                    <Link href="/nft-market" className="menu__link">
                        Markets
                    </Link>
                </li>
                <li className="menu__item">
                    <Link href="/exchange" className="menu__link">
                        Trade
                    </Link>
                </li>
                <li className="menu__item">
                    <a href="/derivatives" className="menu__link">
                        Derivatives
                    </a>
                </li>
                {/* <li className="menu__item">
                    <a href="/stacking" className="menu__link">
                        Earn
                    </a>
                </li> */}
                <li className="menu__item">
                    <a href="/finance" className="menu__link">
                        Finance
                    </a>
                </li>
                <li className="menu__item">
                    <Link href="/inventory" className="menu__link">
                        NFT
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
Menu.defaultProps = {
    elemClass: "",
};
export default Menu;
