import React from "react";
import FullMenu from "./Full";
import "./index.scss";

const PREFIX = "shiba-main-menu";

export interface MainMenuProps {}

const MainMenu: React.FC<MainMenuProps> = () => {
  return (
    <div className={PREFIX}>
      <div className={`${PREFIX}__container`}>
        <div className={`${PREFIX}__wrap`}>
          <FullMenu />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
