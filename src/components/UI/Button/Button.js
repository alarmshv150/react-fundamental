import classes from "./Button.module.css";

/* Proxy Component */
export const Button = ({ children, ...props }) => (
  <button
    {...props}
    className={/* style as properties of an object */ classes.Btn}
  >
    {children}
  </button>
);
