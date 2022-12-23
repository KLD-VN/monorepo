import React from "react";

import HeaderSearch from "./Search";
import HeaderLogo from "./Logo";
import HeaderControlSettings from "../Header/ControlSettings";

import './index.scss';

const PREFIX = "shiba-header";

const Header: React.FC<{}> = () => {

    return (
        <div className={PREFIX} role="banner">
            <HeaderLogo />
            <HeaderSearch />
            <HeaderControlSettings />
        </div>
    );
}

export default Header;