import React from "react";
import { GameboyColumn } from "../Gameboy/GameboyColumn";
import { GameboyRow } from "../Gameboy/GameboyRow";
import * as styles from "./AnimationContainerTopLeft.module.scss";

export const AnimationContainerTopLeft = () => {
  return (
    <div className={styles.animationContainer}>
      <div className={styles.mobileView}>
        <GameboyRow />
      </div>
      <div className={styles.desktopView}>
        <GameboyColumn />
      </div>
    </div>
  );
};
