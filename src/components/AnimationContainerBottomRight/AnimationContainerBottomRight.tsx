import React from "react";
import { useLeadCollectorContext } from "../../context/LeadCollectorContext";
import { GameboyColumn } from "../Gameboy/GameboyColumn";
import { GameboyRow } from "../Gameboy/GameboyRow";
import { PatternRow } from "../Pattern/Pattern";

import * as styles from "./AnimationContainerBottomRight.module.scss";

export const AnimationContainerBottomRight = () => {
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
        <div className={styles.columnFirst}>
          <GameboyColumn />
        </div>
        <div className={styles.columnSecond}>
          <GameboyColumn />
        </div>
        <div className={styles.columnThird}>
          <GameboyColumn />
        </div>
        <div className={styles.columnFourth}>
          <GameboyColumn />
        </div>
      </div>
    </div>
  );
};
