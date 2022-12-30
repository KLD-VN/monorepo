import React from "react";
import "./index.scss";
import ItemMenu from "../ItemMenu";
import FullMenu from "./Full";

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
