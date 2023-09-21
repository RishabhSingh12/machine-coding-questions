import styles from "./select.module.css";
import { useEffect, useState } from "react";

export type SelectOption = {
  value: string | number;
  label: string;
};

//for multiple select
type MultipleSelectProps = {
  multiple: true;
  value?: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

//for single select
type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

export function Select({ multiple, value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const openOptionHandler = () => {
    setIsOpen((prev) => !prev);
  };

  //clearing options
  const clearHandler = (e: any) => {
    e.stopPropagation();
    multiple ? onChange([]) : onChange(undefined);
  };

  //check for the current selected option
  const isOptionSelected = (option: SelectOption) => {
    return multiple ? value?.includes(option) : option === value;
  };

  //choosing a single option
  const selectOption = (option: SelectOption) => {
    if (multiple) {
      if (value?.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  };

  const selectOptionHandler = (e: any, option: SelectOption) => {
    e.stopPropagation();
    selectOption(option);
    setIsOpen(false);
  };

  //useEffect for always setting the highLightedindex to 0 on open and close
  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={openOptionHandler}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>
        {multiple
          ? value?.map((ele, idx) => {
              return (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    selectOption(ele);
                  }}
                  key={ele.value}
                  className={styles["option-badge"]}
                >
                  {ele.label}
                  <span className={styles["remove-btn"]}>&times;</span>
                </button>
              );
            })
          : value?.label}
      </span>
      <button onClick={clearHandler} className={styles["clear-btn"]}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      {/* showing list of options */}
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, idx) => {
          return (
            <li
              onClick={(e) => selectOptionHandler(e, option)}
              key={option.value}
              onMouseEnter={() => setHighlightedIndex(idx)}
              className={`${styles.option} ${
                isOptionSelected(option) ? styles.selected : ""
              } ${idx === highlightedIndex ? styles.highlighted : ""}`}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
