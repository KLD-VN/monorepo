import React from "react";
import "./index.scss";

const PREFIX = "shiba-home-menu";

export interface HomeMenuProps { }

const HomeMenu: React.FC<HomeMenuProps> = () => {
  return (
    <div className={PREFIX}>
      <div className={`${PREFIX}__container`}>
        <div className={`${PREFIX}__wrap`}>

        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
