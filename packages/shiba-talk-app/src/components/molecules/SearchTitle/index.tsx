import React from "react";
import Link from "@/components/atoms/Link";
import Title from "@/components/atoms/Title";
import SearchTitleLayout from "./Layout";
import "./index.scss";

const PREFIX = "shiba-search-title";

export interface SearchTitleProps {
  /** The node on which to put a title */
  children?: React.ReactNode;
}

const SearchTitle: React.FC<SearchTitleProps> = ({
  children,
}: SearchTitleProps) => {
  return (
    <SearchTitleLayout>
      {/* --$-- */}
      <div className={`${PREFIX}__title`}>
        <Title size="h1" color="primary" weight="bold">
          <span className={`${PREFIX}__title-wrap`}>Tìm kiếm gần đây</span>
        </Title>
      </div>
      {/* --/$-- */}

      {/* --$-- */}
      <div className={`${PREFIX}__edit`}>
        <div className={`${PREFIX}__edit-container`}>
          <div className={`${PREFIX}__edit-space`}>&nbsp;</div>
          <div className={`${PREFIX}__edit-content`}>
            <div className={`${PREFIX}__edit-wrap`}>
              <Link href="/search/edit">
                <span className={`${PREFIX}__edit-span-wrap`}>
                  <span className={`${PREFIX}__edit-span-content`}>
                    Chỉnh sửa
                  </span>
                </span>
                <div className={`${PREFIX}__edit-span-overlay`}></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* --/$-- */}
    </SearchTitleLayout>
  );
};

export default SearchTitle;
