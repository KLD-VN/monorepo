import React from "react";
import "./index.scss";

const PREFIX = "shiba-search-title-layout";

export interface SearchTitleLayoutProps {
   /** The node on which to put a title */
   children?: React.ReactNode;
}

const SearchTitleLayout: React.FC<SearchTitleLayoutProps> = ({
   children,
}: SearchTitleLayoutProps) => {

   return (
      <div className={PREFIX}>
         <div className={`${PREFIX}__padding-top-bottom`}>
            <div className={`${PREFIX}__padding-top-bottom-wrap`}>
               <div className={`${PREFIX}__padding-right-left`}>
                  <div className={`${PREFIX}__padding-right-left-wrap`}>
                     <div className={`${PREFIX}__margin-top-bottom`}>
                        <span className={`${PREFIX}__content`}>
                           <div className={`${PREFIX}__wrap`}>
                              {children}
                           </div>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SearchTitleLayout;