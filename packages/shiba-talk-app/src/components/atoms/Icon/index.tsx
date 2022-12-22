import React from "react";
import classNames from "classnames";

import "./index.scss";

const PREFIX = "shiba-icon";

/** The Icon Props  */

export interface IconProps {
  /** SVG code of custom icon */
  children?: React.ReactNode;

  /** Fill color of icon */
  color?:
  | "default"
  | "primary";

  /** Visual size of icon */
  size?: "sm" | "md" | "lg";

  /** Descriptive text to communicate icon meaning to screen readers. Required if "hidden" is false. */
  title?: string;

  /** Hide icon from screen readers. Should be used when icon is purely decorative.  */
  hidden?: boolean;

  /** Set of CSS style properties */
  style?: React.CSSProperties;
}

/** Icons help clarify actions, status, and feedback on the interface. Check out the full `Icon` Library for specific icons. */

const Icon: React.FC<IconProps> = ({
  children,
  color,
  size = "md",
  title,
  hidden = false,
  style
}: IconProps) => {
  const className = classNames(
    PREFIX,
    size !== "md" && `${PREFIX}--${size}`,
    color && `shiba-color--${color}`
  )

  return (
    <i
      className={className}
      role="img"
      arial-label={title}
      aria-hidden={hidden}
      style={style}
    >
      {children}
    </i>
  )
}

export default Icon
