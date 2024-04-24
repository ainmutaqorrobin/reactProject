import { ComponentPropsWithoutRef } from "react";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  id: string;
}

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  el: "button";
}

export interface AnchorProps extends ComponentPropsWithoutRef<"a"> {
  el: "anchor";
}

export type ButtonComponentProps = ButtonProps | AnchorProps;
