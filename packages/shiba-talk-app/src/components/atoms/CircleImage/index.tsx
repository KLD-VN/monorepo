import React from "react"

// style
import "./index.scss"

const PREFIX = "shiba-circle-image"

/** Props shared across multiple button type */
export interface CircleImageProps {
  /** `href` for link destination */
  href: string

  /** Width of the image, in pixels or percentage */
  width: string

  /** Height of the image, in pixels or percentage */
  height: string
}

const CircleImage: React.FC<CircleImageProps> = ({ href, width, height }) => {
  return (
    <div className={PREFIX}>
      <svg
        className={`${PREFIX}__svg`}
        role="none"
        style={{
          width: width,
          height: height
        }}
      >
        <mask id="person">
          <circle cx={Number(width)/2} cy={Number(width)/2} fill="white" r={Number(width)/2}></circle>
        </mask>
        <g mask="url(#person)">
          <image
            style={{
              width: width,
              height: height
            }}
            x="0"
            y="0"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            width="100%"
            href={href}
          ></image>
          <circle
            className={`${PREFIX}__svg__circle`}
            cx="14"
            cy="14"
            r="14"
          ></circle>
        </g>
      </svg>
    </div>
  )
}

export default CircleImage
