import { Icon, Link } from "@/components/atoms";
import React from "react";
import "./index.scss";

const PREFIX = "shiba-item-menu";

export interface ItemMenuProps {
  /* The title of the item menu */
  title: string;

  /* The icon url of the item menu */
  iconUrl?: string;

  /* The position of the icon */
  position?: string;
}

const ItemMenu: React.FC<ItemMenuProps> = ({
  title,
  iconUrl,
  position,
}: ItemMenuProps) => {
  const [isFocus, setFocus] = React.useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const iconStyle = {
    backgroundImage: `url(${iconUrl})`,
    backgroundPosition: "0" + position,
  };
  const overlayStyle: React.CSSProperties = isFocus
    ? {
        opacity: 1,
        transitionDuration: "0s",
      }
    : {};

  return (
    <div className={PREFIX}>
      <span className={`${PREFIX}__span`}>
        <div
          className={`${PREFIX}__wrap`}
          onMouseOver={handleFocus}
          onMouseLeave={handleBlur}
        >
          <Link href="/">
            <div className={`${PREFIX}__mark`}></div>
            <Icon style={iconStyle} />
            <div className={`${PREFIX}__content`}>
              <span className={`${PREFIX}__content-wrap`}>
                <span className={`${PREFIX}__content-title`}>{title}</span>
              </span>
            </div>
            <div className={`${PREFIX}__overlay`} style={overlayStyle}></div>
          </Link>
        </div>
      </span>
    </div>
  );
};

export default ItemMenu;
