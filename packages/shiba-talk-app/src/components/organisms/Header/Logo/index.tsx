import React from "react";
import Logo from "@atoms/Logo";

import './index.scss';

const PREFIX = "shiba-header-logo";

const HeaderLogo: React.FC<{}> = () => {
    return (
        <div className={PREFIX}>
            <Logo variant="icon" width="40px" height="40px" />
        </div>
    );
}

export default HeaderLogo;