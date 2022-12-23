import React from "react";
import { ControlSettings } from "@/components/molecules";

import './index.scss';

const PREFIX = "shiba-header-control-settings";

const HeaderControlSettings: React.FC<{}> = () => {
    return (
        <div className={PREFIX}>
            <ControlSettings />
        </div>
    );
}

export default HeaderControlSettings;