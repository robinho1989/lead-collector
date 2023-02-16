import { Checkbox, TextField } from "nerdux-ui-system";
import { Switch } from "nerdux-ui-system/dist/inputs/Switch/Switch";
import React from "react";

import * as styles from "./Form.module.scss";

export const Form = () => {
  return (
    <form className={styles.formContainer} action="">
      <header className={styles.formHeader}>
        <h1 className={styles.formHeading}>
          Join the Gameboy{""}
          <span className={styles.formHeadingSpan}>waiting list</span>
        </h1>
        <div className={styles.toggleSwitchContainer}>
          <p className={styles.toggleSwitchText}>
            I swear, I’m a classic gameboy fan
          </p>
          <Switch id="switch-1" onChange={function noRefCheck() {}} />
        </div>
      </header>
      <div className={styles.inputContainer}>
        <TextField
          value=""
          name="Name"
          id=""
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder={"e.g. Richard Parker"}
        />
        <TextField
          value=""
          name="Email"
          id=""
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder={"e.g. richard@gmail.com"}
        />
      </div>
      <div className={styles.privacyPolicyParagraph}>
        <Checkbox
          id=""
          name=""
          checked={false}
          onChange={(e) => {
            console.log(e.target.checked);
          }}
        />
      </div>
    </form>
  );
};
