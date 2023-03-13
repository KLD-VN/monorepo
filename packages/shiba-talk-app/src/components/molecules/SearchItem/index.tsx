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
      'url("https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/326977212_1823541088020999_8175488239865928615_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=103&ccb=1-7&_nc_sid=3170a5&_nc_ohc=Z-iVpTJIbu0AX9g9XZL&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfB6XcBwUWP8lqVYHah__zoE4QotXd6fLxwZd971ImPgmQ&oe=63F793C1")',
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
                id="4"
                href="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/326977212_1823541088020999_8175488239865928615_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=3170a5&_nc_ohc=RNWCDn4K01YAX8JIV6Z&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfAkAUxz55SKnFw9OM8psk5c5WvwZARcb_-E6WzEOENFYg&oe=64153D81"
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
