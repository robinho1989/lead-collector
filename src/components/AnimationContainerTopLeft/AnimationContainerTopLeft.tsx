import React from "react";
import { useLeadCollectorContext } from "../../context/LeadCollectorContext";
import { GameboyColumn } from "../Gameboy/GameboyColumn";
import { GameboyRow } from "../Gameboy/GameboyRow";
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
        <GameboyRow />
      </div>
      <div className={styles.desktopView}>
        <GameboyColumn />
      </div>
    </div>
  );
};
