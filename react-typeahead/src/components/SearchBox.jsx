import React from "react";
import { useState } from "react";
import { useFetch } from "./useFetch";

const SearchBox = ({
  id,
  name,
  label,
  placeholder,
  autoComplete,
  style,
  maxItems,
  debounceWait,
  listBox,
  noItemMsg,
  errorMsg,
}) => {
  const [value, setValue] = useState("");
  const [] = useFetch(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <label className={style.label}>{label}</label>
      <br />
      <input
        name={name}
        className={style.input}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBox;
