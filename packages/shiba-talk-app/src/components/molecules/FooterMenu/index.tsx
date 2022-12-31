import React from "react";
import "./index.scss";
import List from "@/components/atoms/List";
import ListItem from "@/components/atoms/ListItem";
import { Icon, Link } from "@/components/atoms";

const PREFIX = "shiba-footer-menu";

export interface FooterMenuProps {}

const FooterMenu: React.FC<FooterMenuProps> = () => {
  return (
    <div className={PREFIX}>
      <div className={`${PREFIX}__container`}>
        <footer aria-label="ShibaTalk" role="contentinfo">
          <span className={`${PREFIX}__content`}>
            <ul>
              <li>
                <Link href="/">Quyền riêng tư</Link>
                <span>
                  <span
                    style={{
                      fontFamily: "inherit",
                      clip: "rect(0,0,0,0)",
                      overflowX: "hidden",
                      width: "1px",
                      overflowY: "hidden",
                      position: "absolute",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span aria-hidden="true"> · </span>
                </span>
              </li>
              <li>
                <Link href="/">Điều khoản</Link>
                <span>
                  <span
                    style={{
                      fontFamily: "inherit",
                      clip: "rect(0,0,0,0)",
                      overflowX: "hidden",
                      width: "1px",
                      overflowY: "hidden",
                      position: "absolute",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span aria-hidden="true"> · </span>
                </span>
              </li>
              <li>
                <Link href="/">Quảng cáo</Link>
                <span>
                  <span
                    style={{
                      fontFamily: "inherit",
                      clip: "rect(0,0,0,0)",
                      overflowX: "hidden",
                      width: "1px",
                      overflowY: "hidden",
                      position: "absolute",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span aria-hidden="true"> · </span>
                </span>
              </li>
              <li>
                <Link href="/">
                  Lựa chọn quảng cáo
                  <span
                    style={{
                      fontFamily: "inherit",
                      position: "relative",
                      top: "-2px",
                    }}
                  >
                    <Icon
                      style={{
                        backgroundImage: `url(https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/SrPSbtGPw_3.png)`,
                        backgroundPosition: "-13px -164px",
                        backgroundSize: "auto",
                        width: "12px",
                        height: "12px",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                      }}
                    />
                  </span>
                </Link>

                <span>
                  <span
                    style={{
                      fontFamily: "inherit",
                      clip: "rect(0,0,0,0)",
                      overflowX: "hidden",
                      width: "1px",
                      overflowY: "hidden",
                      position: "absolute",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span aria-hidden="true"> · </span>
                </span>
              </li>
              <li>
                <Link href="/">Cookie</Link>
                <span>
                  <span
                    style={{
                      fontFamily: "inherit",
                      clip: "rect(0,0,0,0)",
                      overflowX: "hidden",
                      width: "1px",
                      overflowY: "hidden",
                      position: "absolute",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span aria-hidden="true"> · </span>
                </span>
              </li>
              <li>
                <Link href="/">Xem thêm</Link>
                <span>
                  <span
                    style={{
                      fontFamily: "inherit",
                      clip: "rect(0,0,0,0)",
                      overflowX: "hidden",
                      width: "1px",
                      overflowY: "hidden",
                      position: "absolute",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span aria-hidden="true"> · </span>
                </span>
              </li>
            </ul>
            Shiba © 2022
          </span>
        </footer>
      </div>
    </div>
  );
};

export default FooterMenu;
