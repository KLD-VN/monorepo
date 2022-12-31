import FooterMenu from "@/components/molecules/FooterMenu";
import HomeMenu from "@/components/molecules/HomeMenu";
import MainMenu from "@/components/molecules/MainMenu";
import React from "react";
import "./index.scss";

const PREFIX = "shiba-navigation";

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <div className={PREFIX} role="navigation">
      <div className={`${PREFIX}__container`}>
        <div className={`${PREFIX}__wrap`}>
          {/* --$-- */}
          <div className={`${PREFIX}__nav`}>
            <div className={`${PREFIX}__nav-wrap`}>
              {/* --$-- */}
              <div className={`${PREFIX}__nav-content`}>
                {/* --$-- */}
                <div className={`${PREFIX}__nav-content-box`}>
                  <div className={`${PREFIX}__nav-content-box-container`}>
                    {/* --$-- */}
                    <HomeMenu />
                    {/* --/$-- */}
                    {/* --$-- */}
                    <MainMenu />
                    {/* --/$-- */}
                    {/* --$-- */}
                    <FooterMenu />
                    {/* --/$-- */}
                  </div>
                </div>

                {/* --/$-- */}
              </div>
              <div className={`${PREFIX}__nav-scroll-layout`}></div>
              <div className={`${PREFIX}__nav-scroll`}>
                <div className={`${PREFIX}__nav-scroll-bar`}></div>
              </div>
              {/* --/$-- */}
            </div>
          </div>
          {/* --/$-- */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
