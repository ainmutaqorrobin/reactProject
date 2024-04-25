import { ComponentPropsWithoutRef } from "react";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
}

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  href?: never;
}

export interface AnchorProps extends ComponentPropsWithoutRef<"a"> {
  href?: string;
}

export type ButtonComponentProps = ButtonProps | AnchorProps;
   