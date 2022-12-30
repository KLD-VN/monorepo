import React from "react";
import "./index.scss";
import ItemMenu from "../ItemMenu";

const PREFIX = "shiba-home-menu";

export interface HomeMenuProps {}

const items = [
  {
    title: "Trang chủ",
    iconUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/YHLvfJvVfG6.png",
  },
  {
    title: "Duy Khánh",
    iconUrl:
      "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/290873204_1401951403641858_8722845100338118315_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=dVSz-y4TiDkAX_7ZjcT&_nc_ht=scontent.fhan14-1.fna&oh=00_AfD4nHedKww4K556yRYeQhAwRkBMxJORnERZxauacavgdQ&oe=63B30A90",
  },
];

const HomeMenu: React.FC<HomeMenuProps> = () => {

  /**
   *    .shiba-icon {
      -webkit-filter: var(--filter-accent);
   }
   */
  return (
    <div className={PREFIX}>
      <div className={`${PREFIX}__container`}>
        <div className={`${PREFIX}__wrap`}>
          {items.map((item, index) => (
            <ItemMenu key={index} title={item.title} iconUrl={item.iconUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;