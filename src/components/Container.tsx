import { ElementRef, ElementType } from "react";
import { ContainerProps } from "../interface";

export default function Container<Y extends ElementType>(
  props: ContainerProps<Y>
) {
  const Component = props.as || "div";
  return <Component {...props}>{props.children}</Component>;
}
