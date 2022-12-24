import React from "react";
import "./index.scss";
import Flex from "@/components/atoms/Flex";
import Space from "@/components/atoms/Space";
import Link from "@/components/atoms/Link";

const PREFIX = "shiba-search-title";

export interface SearchTitleProps {
  /** The node on which to put a title */
  children?: React.ReactNode;
}

const SearchTitle: React.FC<SearchTitleProps> = ({
  children,
}: SearchTitleProps) => {
  return (
    <div className={PREFIX}>
      <Flex direction="row" justify="between">
        <Flex spacing="half">
          <Space type="inline">Search</Space>
          <Link href="/">Edit</Link>
        </Flex>
      </Flex>
    </div>
  );
};

export default SearchTitle;
