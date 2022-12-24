import React from "react";
import classNames from "classnames";
import useDebounce from "@/utils/useDebounce";

import { Icon, SearchSVG, Input } from "@atoms";

import "./index.scss";

export const PREFIX = "shiba-search-input";
export const PREFIX_ID = "shiba-search-input-id";

export interface SearchInputProps {
  /** Unique ID to associate the label with the InputField */
  id: string;

  /**
   * Assists the browser with filling out field values.
   * Refer to [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values) for a list of values
   */
  autoComplete?: string;
  /**
   * Automatically give input focus when the page loads
   */
  autoFocus?: boolean;

  /** Initial input value (for uncontrolled components) */
  defaultValue?: string;

  /** Indicates the InputField is not available for interaction */
  disabled?: boolean;

  /** The name of the InputField, submitted with the form data */
  name?: string;

  /** Callback when InputField loses focus */
  onBlur?(evt?: React.ChangeEvent<HTMLInputElement>): void;

  /** Callback when InputField value changes */
  onSearch?(evt?: React.ChangeEvent<HTMLInputElement>): void;

  /** Callback when InputField receives focus */
  onFocus?(evt?: React.FocusEvent<HTMLInputElement>): void;

  /** Callback when InputField receives a keypress event */
  onKeyDown?(evt?: React.KeyboardEvent<HTMLInputElement>): void;

  /** Callback when InputField clicked */
  onClick?(evt?: React.MouseEvent<HTMLInputElement>): void;

  /** A hint to the user of what can be entered in the control */
  placeholder?: string;

  /**
   * The role attribute can provide semantics.
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
   */
  role?: string;

  /**
   * The type of input control to render. Not all types are supported equally
   * cross-browser
   */
  type?:
  | "date"
  | "datetime-local"
  | "month"
  | "number"
  | "tel"
  | "text"
  | "time"
  | "week"
  | "search";

  /** Indicates whether the element is expanded or collapsed */
  ariaExpanded?: boolean;

  /** Provides a label for the search input for accessibility purposes */
  ariaLabel?: string;

  /** Enables or disables spell checking for the search input */
  spellCheck?: boolean;

  /** Controlled InputField value (for controlled components). Requires `onChange` handler */
  value?: string;
}

const SearchInput: React.FC<SearchInputProps> = React.memo(
  ({
    id,
    autoFocus,
    autoComplete,
    defaultValue,
    disabled,
    name,
    onBlur,
    onSearch,
    onFocus,
    onKeyDown,
    onClick,
    placeholder,
    role,
    type = "text",
    ariaExpanded,
    ariaLabel,
    spellCheck,
    value,
  }: SearchInputProps) => {
    const className = classNames(PREFIX);

    const iconClassName = classNames(`${PREFIX}__icon`);

    const [searchValue, setSearchValue] = React.useState("");
    const debouncedSearchValue = useDebounce(searchValue, 500);

    const handleFocus = (
      event: React.FocusEvent<HTMLInputElement, Element>
    ) => {
      event.target.select();
      onFocus && onFocus(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
      onBlur && onBlur(event);
    };

    const handleSearchChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        onSearch;
      },
      []
    );

    React.useEffect(() => {
      onSearch && onSearch(debouncedSearchValue);
    }, [debouncedSearchValue]);

    return (
      <div className={className}>
        <label className={`${PREFIX}__label`}>
          {/* --$-- */}
          <span className={iconClassName}>
            <Icon style={iconStyle}>
              <SearchSVG />
            </Icon>
          </span>
          {/* --/$-- */}

          {/* --$-- */}
          <Input
            id={PREFIX_ID}
            type="search"
            role="combobox"
            ariaLabel="Tìm kiếm trên shiba"
            placeholder="Tìm kiếm trên shiba"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleSearchChange}
            autoComplete="off"
          />
          {/* --/$-- */}
        </label>
      </div>
    );
  }
);

const iconStyle: React.CSSProperties = {
  height: "1rem",
  width: "1rem",
  transitionDuration: "var(--fds-fast)",
  transitionTimingFunction: "var(--fds-soft)",
  transitionProperty: "fill, stroke",
  fill: "var(--secondary-icon)",
};

export default SearchInput;