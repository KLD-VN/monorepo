import { Icon, Link } from "@/components/atoms";
import React from "react";
import "./index.scss";

const PREFIX = "shiba-item-menu";

export interface ItemMenuProps { }

const ItemMenu: React.FC<ItemMenuProps> = () => {
   return (
      <div className={PREFIX}>
         <span className={`${PREFIX}__span`}>
            <div className={`${PREFIX}__wrap`}>
               <Link href="/">
                  <div className={`${PREFIX}__mark`}></div>
                  <Icon />
                  <div className={`${PREFIX}__content`}>
                     <span className={`${PREFIX}__content-wrap`}>
                        <span className={`${PREFIX}__content-title`}>
                           Trang chủ
                        </span>
                     </span>
                  </div>
                  <div className={`${PREFIX}__overlay`}></div>
               </Link>
            </div>
         </span>
      </div>
   );
};

export default ItemMenu;