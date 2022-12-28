import React from "react";
import classNames from "classnames";

import SearchInput from "@molecules/SearchInput";
import SearchResult from "../SearchResult";

import "./index.scss";

const PREFIX = "shiba-header-search";

const HeaderSearch: React.FC<{}> = () => {
  const [isFocus, setIsFocus] = React.useState(false);

  const wrapClassName = classNames(`${PREFIX}__wrap`, {
    [`${PREFIX}__wrap--default`]: !isFocus,
    [`${PREFIX}__wrap--focused`]: isFocus,
  });
  const handleFocus = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    event.target.select();
    setIsFocus(true);
  };

  const handleBlur = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setIsFocus(false);
  };

  return (
    <div className={PREFIX}>
      <div className={`${PREFIX}__container`}>
        <div className={wrapClassName}>
          <div className={`${PREFIX}__content`}>
            <div className={`${PREFIX}__border-radius`}>
              <div className={`${PREFIX}__border-radius-wrap`}>
                <div>
                  <div className={`${PREFIX}__border-radius-content`}>
                  <div className={`${PREFIX}__search-input`}>
                  <div className={`${PREFIX}__search-wrap`}>
                  <SearchInput
                      id={"search-input-id"}
                      onFocus={handleFocus}
                      onKeyDown={handleBlur}
                    />
                  </div>
                  </div>
                    
                    {isFocus && <SearchResult />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
