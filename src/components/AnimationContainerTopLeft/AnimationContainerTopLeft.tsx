import React from "react";
import { useLeadCollectorContext } from "../../context/LeadCollectorContext";
import { GameboyColumn } from "../Gameboy/GameboyColumn";
import { GameboyRow } from "../Gameboy/GameboyRow";
import { PatternRow } from "../Pattern/Pattern";
import { SingleGameboy } from "../SingleGameboy/SingleGameboy";
import * as styles from "./AnimationContainerTopLeft.module.scss";

export const AnimationContainerTopLeft = () => {
  const { theme } = useLeadCollectorContext();
  return (
    <div
      className={
        theme ? styles.animationContainer__disabled : styles.animationContainer
      }
    >
      <div className={theme ? styles.mobileView__disabled : styles.mobileView}>
        <PatternRow />
      </div>
      <div className={styles.desktopView}>
        <PatternRow />
      </div>
    </div>
  );
};
