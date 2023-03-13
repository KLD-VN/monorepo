import React from "react";
import './index.scss';

const PREFIX = "shiba-complementary";

export interface ComplementaryProps {}

const Complementary: React.FC<ComplementaryProps> = () => {
   return (
      <div className={PREFIX}>
         hello
      </div>
   );
}

export default Complementary;