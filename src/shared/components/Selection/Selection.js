import { useState } from "react";
import { Select } from "antd";

import classes from "./Selection.module.css";

const { Option } = Select;

const Selection = ({ options, placeholder, defaultValue, onChange }) => {
  const [value, setValue] = useState();

  const _onChange = (value) => {
    onChange(value);
    setValue(value);
  };

  let display;
  const selectedOptions = options.find((o) => o.value === value);
  if (selectedOptions) {
    display = selectedOptions.children;
  }

  return (
    <Select
      className={classes.select}
      placeholder={placeholder}
      onChange={_onChange}
      defaultValue={defaultValue}
      value={display}
    >
      {options.map((o) => (
        <Option value={o.value} key={o.value}>
          {o.children}
        </Option>
      ))}
    </Select>
  );
};

export default Selection;
