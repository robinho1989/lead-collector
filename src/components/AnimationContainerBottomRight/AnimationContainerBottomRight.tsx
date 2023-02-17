import React from "react";
import { GameboyColumn } from "../Gameboy/GameboyColumn";
import { GameboyRow } from "../Gameboy/GameboyRow";
import * as styles from "./AnimationContainerBottomRight.module.scss";

export const AnimationContainerBottomRight = () => {
  return (
    <div className={styles.animationContainer}>
      <div className={styles.mobileView}>
        <GameboyRow />
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
