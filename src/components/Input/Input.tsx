import React from "react";
import "./input.css";

type InputProps = {
  handleClick: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ onChange, handleClick }: InputProps) => {
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <input
      placeholder="Search..."
      onChange={onChange}
      onKeyDown={(e) => handleSubmit(e)}
    />
  );
};
