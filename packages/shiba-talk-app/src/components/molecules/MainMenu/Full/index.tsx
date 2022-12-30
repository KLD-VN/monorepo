import React from "react";
import "./index.scss";
import ItemMenu from "../../ItemMenu";

const PREFIX = "shiba-full-menu";

export interface FullMenuProps {}

const items = [
  {
    title: "Bạn bè",
    iconUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/cHoMfSsiHSi.png",
    position: "0px",
  },
  {
    title: "Nhóm",
    iconUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/CGp-6SWWRyX.png",
    position: "-25px",
  },
  {
    title: "Gần đây nhất",
    iconUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/dCdhgcZwziT.png",
  },
  {
    title: "Marketplace",
    iconUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/CGp-6SWWRyX.png",
    position: "-50px",
  },
  {
    title: "Watch",
    iconUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/CGp-6SWWRyX.png",
    position: "-75px",
  },
];
const FullMenu: React.FC<FullMenuProps> = () => {
  return (
    <div className={PREFIX}>
      <div className={`${PREFIX}__container`}>
        <div className={`${PREFIX}__separator`}>
          <hr className={`${PREFIX}__hr`} />
        </div>
        <div className={`${PREFIX}__wrap`}>
          {items.map((item, index) => (
            <ItemMenu
              key={index}
              title={item.title}
              iconUrl={item.iconUrl}
              position={item.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullMenu;
