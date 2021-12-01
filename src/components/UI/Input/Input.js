import { forwardRef } from "react";
import classes from "./Input.module.css";

export const Input = /* forwarding refs */ forwardRef((ref, props) => (
  <input ref={ref} className={classes.Input} {...props} />
));
