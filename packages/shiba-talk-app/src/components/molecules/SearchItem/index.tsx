import React from "react";
import { CircleImage, Icon, Link } from "@atoms";
import "./index.scss";

const PREFIX = "shiba-search-item";

export interface SearchItemProps {
  /** The node on which to put a title */
  children?: React.ReactNode;
}

const SearchItem: React.FC<SearchItemProps> = ({
  children,
}: SearchItemProps) => {
  const iconStyle: React.CSSProperties = {
    backgroundImage:
      'url("https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/Z2YEYn_Ao6e.png")',
    backgroundPosition: "-13px -164px",
    backgroundSize: "auto",
    width: "12px",
    height: "12px",
    backgroundRepeat: "no-repeat",
    display: "inline-block",
  };

  const [isHoverDelete, setIsHoverDelete] = React.useState(false);

  const handleMouseEnterDelete = () => {
    setIsHoverDelete(true);
  };

  const handleMouseLeaveDelete = () => {
    setIsHoverDelete(false);
  };

  const styleHoverDelete: React.CSSProperties = isHoverDelete
    ? {
        opacity: 1,
      }
    : { opacity: 0 };

  return (
    <div className={PREFIX}>
      <Link href="/">
        <div className={`${PREFIX}__wrap`}>
          {/* --$-- */}
          <div className={`${PREFIX}__image-padding`}>
            <div className={`${PREFIX}__image-wrap`}>
              <CircleImage
                href="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/305208692_447959430690207_8876650612638079685_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=110&ccb=1-7&_nc_sid=c6021c&_nc_ohc=5ICbUi01niMAX_hn68Y&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCwTXMk-az7v9W90hlZsbliYHdtlYU_DxWFx-fv-cpLIQ&oe=63AF959E"
                height="36"
                width="36"
              />
            </div>
          </div>
          {/* --/$-- */}

          {/* --$-- */}
          <div className={`${PREFIX}__title-padding`}>
            <div className={`${PREFIX}__title-wrap`}>
              <div className={`${PREFIX}__title-margin-top-bottom`}>
                <span className={`${PREFIX}__title-box`}>
                  <span className={`${PREFIX}__title-content`}>
                    Mini Cinema n Couple Event Zone7
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* --/$-- */}

          {/* --$-- */}
          <div className={`${PREFIX}__delete`}>
            <div className={`${PREFIX}__delete-container`}>
              <div className={`${PREFIX}__delete-wrap`}>
                <div
                  className={`${PREFIX}__delete-content`}
                  onMouseEnter={handleMouseEnterDelete}
                  onMouseLeave={handleMouseLeaveDelete}
                >
                  <Icon style={iconStyle} />
                  <div
                    className={`${PREFIX}__overlay`}
                    style={styleHoverDelete}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* --/$-- */}
        </div>
      </Link>
    </div>
  );
};

export default SearchItem;
