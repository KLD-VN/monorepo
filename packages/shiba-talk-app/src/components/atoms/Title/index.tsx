import classNames from 'classnames';
import React from 'react';
import './index.scss';

const PREFIX = 'shiba-title';

/** The props of Title component */
export interface TitleProps {
   /** The node on which to put a title */
   children?: React.ReactNode;

   /** The size of title */
   size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

   /** The color of title */
   color?: 'primary' | 'secondary' | 'tertiary';

   /** The weight of title */
   weight?: 'light' | 'regular' | 'bold';

   /** The align of title */
   align?: 'left' | 'center' | 'right';

}

/** The component of Title */

const Title: React.FC<TitleProps> = ({
   children,
   size = 'h1',
   color = 'primary',
   weight = 'regular',
   align = 'left',
}: TitleProps) => {

   const className = classNames(
      PREFIX,
      size && `${PREFIX}--${size}`,
      color && `${PREFIX}--${color}`,
      weight && `${PREFIX}--${weight}`,
      align && `${PREFIX}--${align}`,
   );

   const combineAttributes = {
      className,
   };

   const contentClassName = classNames(
      `${PREFIX}__content`,
   );

   const Element = size;
   
   return (
      <Element {...combineAttributes}>
         <span className={contentClassName}>
            {children}
         </span>
      </Element>
   )
}

export default Title;
