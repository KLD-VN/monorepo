import React from "react";
import classNames from "classnames";

import SearchInput from "@molecules/SearchInput";

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

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsFocus(false);
  };

  return (
    <div className={PREFIX}>
      <div className={`${PREFIX}__container`}>
        <div className={wrapClassName}>
          <div className={`${PREFIX}__content`}>
            <SearchInput
              id={"search-input-id"}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {/* {isFocus && (
              <SearchSuggestions />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
