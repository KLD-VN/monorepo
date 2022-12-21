import React from "react"

// lib
import classNames from "classnames"

// style
import "./index.scss"

const PREFIX = "shiba-icon"

/** Icon Props  */

export interface IconProps {
  /** SVG code of custom icon */
  children?: React.ReactNode

  /** Fill color of icon */
  color?:
    | "default"
    | "primary"
    | "white"
    | "black"
    | "cerulean"
    | "cerulean-dark"
    | "slate"
    | "red"
    | "orange"
    | "green"
    | "blue"
    | "purple"
    | "yellow"
    | "teal"
    | "magenta"

  /** Visual size of icon */
  size?: "sm" | "md" | "lg" | "custom"

  /** Descriptive text to communicate icon meaning to screen readers. Required if "hidden" is false. */
  title?: string

  /** Hide icon from screen readers. Should be used when icon is purely decorative.  */
  hidden?: boolean

  /** Set of CSS style properties */
  style?: React.CSSProperties
}

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
