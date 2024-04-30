import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, ReactNode } from "react";

export interface InputProps extends ComponentPropsWithRef<"input"> {
  label: string;
}

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  href?: never;
}

export interface AnchorProps extends ComponentPropsWithoutRef<"a"> {
  href?: string;
}

export type ButtonComponentProps = ButtonProps | AnchorProps;

export type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export interface IconProps extends ComponentPropsWithoutRef<'button'>{
  Icon:ElementType;
  onClick: ()=> void;
  children : ReactNode;
}
