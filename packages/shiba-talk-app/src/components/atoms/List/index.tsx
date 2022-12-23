import React from "react";
import "./index.scss";

const PREFIX = "shiba-list";

/** The props of List component */

export interface ListProps {
   /** The node on which to put a list item */
   children?: React.ReactNode;
}

/** The component of List */

const List: React.FC<ListProps> = ({
   children,
}: ListProps) => {

   return (
      <ul className={PREFIX}>
         {children}
      </ul>
   )
}

export default List;