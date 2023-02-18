import { Button, Checkbox, Link, TextField } from "nerdux-ui-system";
import { Switch } from "nerdux-ui-system/dist/inputs/Switch/Switch";
import React from "react";
import { useLeadCollectorContext } from "../../context/LeadCollectorContext";
import * as styles from "./Form.module.scss";

export const Form = () => {
  const { theme, handleTheme } = useLeadCollectorContext();
  return (
    <form className={styles.formContainer} action="">
      <div className={styles.flexContainer}>
        <header className={styles.formHeader}>
          <h1 className={styles.formHeading}>
            Join the Gameboy{" "}
            <span className={styles.formHeadingSpan}>waiting list</span>
          </h1>
          <div className={styles.toggleSwitchContainer}>
            <p className={styles.toggleSwitchText}>
              I swear, I’m a classic gameboy fan
            </p>
            <Switch checked={!theme} id="switch-1" onChange={handleTheme} />
          </div>
        </header>
        <div className={styles.inputContainer}>
          <TextField
            disabled={theme}
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
            disabled={theme}
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
            disabled={theme}
            id=""
            name=""
            checked={true}
            onChange={(e) => {
              console.log(e.target.checked);
            }}
          />
          <p
            className={
              !theme
                ? styles.privacyPolicyText
                : styles.privacyPolicyTextDisabled
            }
          >
            I have read and accept the{" "}
            <Link disabled={theme} to="">
              privacy policy
            </Link>
          </p>
        </div>
        <Button
          onClick={() => {
            console.log("clicked");
          }}
          disabled={theme}
          type={"button"}
        >
          Sign me up!
        </Button>
      </div>
    </form>
  );
};
