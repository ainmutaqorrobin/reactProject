import { forwardRef } from "react";
import { InputProps } from "../interface";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props: InputProps,
  ref
) {
  return (
    <p>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" {...props} ref={ref}></input>
    </p>
  );
});

export default Input;
