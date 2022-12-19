import React from "react";
import classNames from "classnames";
import "./index.scss";

const PREFIX = "shiba-button";

/** Props shared across multiple button type */

export interface ButtonBaseProps {
  /** Text label for the button. Always required for accessibility purposes. */
  label: string;

  /** Disable the button */
  disabled?: boolean;

  /** Opens href URL in new tab */
  external?: boolean;

  /** If href is provided, `Button` will render as an anchor tag */
  href?: string;

  /** Toggles loading state for asynchronous actions */
  loading?: boolean;

  /** Callback when clicked */
  onClick?(evt?: React.MouseEvent): void;

  /** Shrink size of the button */
  small?: boolean;

  /** A unique value for `data-testid` to serve as a hook for automated tests */
  testID?: string;

  /** Sets the HTML button [`type` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) */
  type?: "button" | "reset" | "submit";

  /** Button variant */
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "dark"
    | "destructive"
    | "minimal"
    | "minimal-inverse"
    | "circle";
}

export interface ButtonProps extends ButtonBaseProps {
  /** Stretch button to full width of its container */
  full?: boolean;

  /** The `Icon` component */
  icon?: React.ReactNode;

  /** The `Icon` component */
  iconRight?: React.ReactNode;

  /**
   * Icon-only button with visually hidden text
   *
   * @deprecated Use RoundButton instead
   */
  iconOnly?: boolean;

  /**
   * Align the icon to the right
   *
   * @deprecated Use `iconRight` instead
   */
  alignRight?: boolean;
}

/** Buttons trigger actions throughout the interface. They can also be used for navigation. */

const Button: React.FC<ButtonProps> = ({
  alignRight,
  label,
  disabled,
  external,
  full,
  href,
  icon,
  iconRight,
  iconOnly,
  loading,
  onClick,
  small,
  testID,
  type = "button",
  variant = "default",
}) => {
  // Classname Logic
  const className = classNames(
    PREFIX,
    variant && `${PREFIX}--${variant}`,
    small && `${PREFIX}--small`,
    full && `${PREFIX}--full`,
    loading && `${PREFIX}--loading`,
    (icon || iconRight) && `${PREFIX}__icon`,
    {
      [`${PREFIX}__icon--left`]: icon && !iconRight && !iconOnly,
      [`${PREFIX}__icon--right`]: !icon && iconRight && !iconOnly,
      [`${PREFIX}__icon--both`]: icon && iconRight,
    }
  );

  const contentClassName = `${PREFIX}__content`;

  // Consolidate Props
  const buttonAttributes = {
    className,
    "aria-busy": loading,
    disabled,
    onClick,
    type,
  };

  const linkAttributes = {
    className,
    href,
    onClick,
    role: "button",
    tabIndex: 0,
    target: external ? "_blank" : undefined,
  };

  const combineAttributes = href ? linkAttributes : buttonAttributes;

  // Show animation if loading
  const loadingMarkup = loading && (
    <div className={`${PREFIX}__loader`}>
      <div />
      <div />
      <div />
    </div>
  );

  // Use an anchor if link button
  const Element = href ? "a" : "button";

  return (
    <Element {...combineAttributes} data-testid={testID}>
      <span className={contentClassName}>
        {icon ? icon : null}
        {iconOnly ? null : label}
        {iconRight ? iconRight : null}
      </span>
      {loadingMarkup}
    </Element>
  );
};

export default Button;
