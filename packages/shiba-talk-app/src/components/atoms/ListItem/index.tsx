import React from "react";
import "./index.scss";

const PREFIX = "shiba-list-item";

/** The props of ListItem component */
export interface ListItemProps {
   /** The node on which to put a content of item */
   children?: React.ReactNode;
}

/** The component of ListItem */
const ListItem: React.FC<ListItemProps> = ({
   children
}: ListItemProps) => {

   return <li className={PREFIX}>{children}</li>
}

export default ListItem;