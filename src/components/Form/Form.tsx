import { Button, Checkbox, Link, TextField } from "nerdux-ui-system";
import { Switch } from "nerdux-ui-system/dist/inputs/Switch/Switch";
import React from "react";
import * as styles from "./Form.module.scss";

export const Form = () => {
  return (
    <form className={styles.formContainer} action="">
      <header className={styles.formHeader}>
        <h1 className={styles.formHeading}>
          Join the Gameboy{" "}
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
          label="Name"
          value=""
          name="Name"
          id="Name"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder={"e.g. Richard Parker"}
        />

        <TextField
          label="Email"
          value=""
          name="Email"
          id="Email"
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
        <p className={styles.privacyPolicyText}>
          I have read and accept the <Link to="">privacy policy</Link>
        </p>
      </div>
      <Button
        onClick={() => {
          console.log("clicked");
        }}
        type={"button"}
      >
        Sign me up!
      </Button>
    </form>
  );
};
