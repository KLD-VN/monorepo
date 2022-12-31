import React from "react";
import "./index.scss";

const PREFIX = "shiba-header-background";

export interface HeaderBackgroundProps {}

export const HeaderBackground: React.FC<HeaderBackgroundProps> = (props) => {
  return (
    <div className={PREFIX}>
      <div className={`${PREFIX}__wrap`}></div>
      <div className={`${PREFIX}__border-bottom`}></div>
    </div>
  );
};

export default HeaderBackground;
