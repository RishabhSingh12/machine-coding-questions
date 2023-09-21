import styles from "./select.module.css";
import { useState } from "react";

type SelectOption = {
  value: any;
  label: string;
};

type SelectProps = {
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
  options: SelectOption[];
};

export function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openOptionHandler = () => {
    setIsOpen((prev) => !prev);
  };

  //clearing options
  const clearHandler = (e: any) => {
    e.stopPropagation();
    onChange(undefined);
  };

  //check for the current selected option
  const isOptionSelected = (option: SelectOption) => {
    return option === value;
  };

  //choosing a single option
  const selectOption = (option: SelectOption) => {
    onChange(option);
  };

  const selectOptionHandler = (e: any, option: SelectOption) => {
    e.stopPropagation();
    selectOption(option);
    setIsOpen(false);
  };

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={openOptionHandler}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>{value?.label}</span>
      <button onClick={clearHandler} className={styles["clear-btn"]}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      {/* showing list of options */}
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option) => {
          return (
            <li
              onClick={(e) => selectOptionHandler(e, option)}
              key={option.label}
              className={`${styles.option} ${
                isOptionSelected(option) ? styles.selected : ""
              }`}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
