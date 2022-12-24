import classNames from 'classnames';
import React from 'react';
import "./index.scss";

const PREFIX = "shiba-overlay";

interface OverlayProps {
   /** Element node */
   children?: React.ReactNode;
   /** Callback when clicked */
   onClick?: () => void;
}

/**
 * Overlay is a simple component that displays a semi-transparent
 * layer on top of its children. It takes an `onClick` prop that
 * is called when the overlay is clicked.
 */

const Overlay: React.FC<OverlayProps> = ({
   children,
   onClick
}: OverlayProps) => {
   const [isHovered, setIsHovered] = React.useState(false);

   const className = classNames(
      PREFIX,
      isHovered && `${PREFIX}--active`
   );

   return (
      <div
         className={className}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         onClick={onClick}
      >
         {children}
      </div>
   );
};

export default Overlay;