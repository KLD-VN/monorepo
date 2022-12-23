import React from "react";
import classNames from "classnames";

import "./index.scss";

const PREFIX = "shiba-link";

/** Link Props */

export interface LinkProps {
   /** Content to display inside link */
   children: React.ReactNode;

   /** `href` for link destination */
   href: string;

   /** Opens URL in new window or tab */
   external?: boolean;

   /** Callback when link is clicked */
   onClick?(evt?: React.MouseEvent): void;
}

/** Links are used to navigate to a new page or view, changing the URL, or jumping internally to anchors on the same page. */

const Link: React.FC<LinkProps> = ({
   children,
   href,
   external,
   onClick
}) => {
   const className = classNames(PREFIX);

   return (
      <a 
         className={className}
         href={href}
         onClick={onClick}
         rel={external ? "noopener noreferrer" : undefined}
         target={external ? "_blank" : undefined}
      >
         {children}
      </a>
   )
}

export default Link;