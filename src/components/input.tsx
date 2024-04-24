import { InputProps } from "../interface";

export default function Input(props: InputProps) {
  return (
    <p>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" {...props}></input>
    </p>
  );
}
