import "./button.css";

type ButtonProps = {
  onClick?: () => void;
  children: JSX.Element | string;
};

export const Button = ({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
