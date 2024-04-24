import { ButtonComponentProps } from "../interface";

export default function Button(props: ButtonComponentProps) {
  if (props.el === "anchor") {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
