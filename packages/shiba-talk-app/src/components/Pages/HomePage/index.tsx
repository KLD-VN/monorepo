import React from "react";
import "./index.scss";
import Header from "@/components/organisms/Header";
import Navigation from "@/components/organisms/Navigation";
import HeaderBackground from "@/components/organisms/Header/Background";

const PREFIX = "shiba-home-page";

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <div className={PREFIX}>
      <Header />
      <Navigation />
      <HeaderBackground />
    </div>
  );
};

export default HomePage;
