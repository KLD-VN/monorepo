import Link from "@/components/atoms/Link";
import List from "@/components/atoms/List";
import ListItem from "@/components/atoms/ListItem";
import Title from "@/components/atoms/Title";
import React from "react";
import "./index.scss";

const PREFIX = "shiba-search-result";
const PREFIX_SCROLL = "shiba-scroll";

const SearchResult: React.FC<{}> = () => {

   return (
      <div className={PREFIX}>
         <div className={`${PREFIX}__container`}>
               <div className={`${PREFIX}__content`}>
                  {/* --$-- */}
                  <div className={`${PREFIX}__item`}>
                     <List>
                        <ListItem>
                           <Title> Tìm kiếm gần đây </Title>
                           <Link href="https://google.com" children="Chỉnh sửa"/>
                        </ListItem>
                        <List>
                           <ListItem> Item 1 </ListItem>
                           <ListItem> Item 2 </ListItem>
                           <ListItem> Item 3 </ListItem>
                           <ListItem> Item 4 </ListItem>
                           <ListItem> Item 5 </ListItem>
                        </List>
                     </List>
                  </div>
                  {/* --/$-- */}

                  {/* --$-- */}
                  <div className={`${PREFIX_SCROLL}__layout`}>
                  </div>
                  <div className={`${PREFIX_SCROLL}__scrollbar`}>
                     <div className={`${PREFIX_SCROLL}__bar`}>
                     </div>
                  </div>
                  {/* --/$-- */}
               </div>
            </div>
      </div>
   );
};

export default SearchResult;