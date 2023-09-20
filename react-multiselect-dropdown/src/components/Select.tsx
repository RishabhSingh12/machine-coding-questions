import styles from "./select.module.css";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
  options: SelectOption[];
};

export function Select({ value, onChange, options }: SelectProps) {
  return (
    <div className={styles.container}>
      <span className={styles.value}>Value</span>
    </div>
  );
}
