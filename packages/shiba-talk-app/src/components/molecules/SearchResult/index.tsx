import Link from "@/components/atoms/Link";
import List from "@/components/atoms/List";
import ListItem from "@/components/atoms/ListItem";
import Overlay from "@/components/atoms/Overlay";
import Title from "@/components/atoms/Title";
import React from "react";
import "./index.scss";

const PREFIX = "shiba-card-search-result";
const PREFIX_SCROLL = "shiba-scroll";

const SearchResult: React.FC<{}> = () => {

   return (
      <div>
         <div className={PREFIX}>
               <div className={`${PREFIX}__scroll`}>
                  {/* --$-- */}
                  <div className={`${PREFIX}__item`}>
                     <List>
                        <ListItem>
                           <Title> Tìm kiếm gần đây </Title>
                           <Link href="https://google.com">
                              <span style={{maxWidth: "100%"}}>
                              Chỉnh sửa
                              </span>
                              <Overlay />
                              
                           </Link>
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