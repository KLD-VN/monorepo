import React from "react";
import List from "@/components/atoms/List";
import ListItem from "@/components/atoms/ListItem";
import SearchTitle from "../../../molecules/SearchTitle";
import SearchItem from "../../../molecules/SearchItem";
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
              {/* --$-- */}
              <ListItem>
                <SearchTitle />
              </ListItem>
              {/* --/$-- */}

              {/* --$-- */}
              <List>
                <ListItem>
                  <SearchItem />
                </ListItem>
                <ListItem>
                  <SearchItem />
                </ListItem>
                <ListItem>
                  <SearchItem />
                </ListItem>
                <ListItem>
                  <SearchItem />
                </ListItem>
              </List>
              {/* --/$-- */}
            </List>
          </div>
          {/* --/$-- */}

          {/* --$-- */}
          <div className={`${PREFIX_SCROLL}__layout`}></div>
          <div className={`${PREFIX_SCROLL}__scrollbar`}>
            <div className={`${PREFIX_SCROLL}__bar`}></div>
          </div>
          {/* --/$-- */}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
