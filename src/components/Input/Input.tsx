import React from "react";
import "./input.css";

type InputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ onChange }: InputProps) => {
  return <input />;
};
