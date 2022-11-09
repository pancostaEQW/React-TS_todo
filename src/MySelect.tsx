import React, { FC } from "react";

interface MySelectProps {
  options?: any;
  defaultValue?: string;
  value?: string;
  onClick?: any;
}

const MySelect: FC<MySelectProps> = ({
  options,
  defaultValue,
  value,
  onClick,
}) => {
  return (
    <select value={value} onChange={(e) => onClick(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
