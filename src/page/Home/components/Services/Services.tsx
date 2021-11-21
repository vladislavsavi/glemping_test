import { FC } from "react";

import { AboutGlamping } from "../AboutGlamping";
import { AboutMarket } from "../AboutMarket";
import { AboutLand } from "../AboutLand";
import classes from "./Services.module.less";

export const Services: FC = () => {
  return (
    <section className={classes.services}>
      <div className={classes.grid}>
        <AboutGlamping />
        <AboutMarket />
        <AboutLand />
      </div>
    </section>
  );
};
