import { AnchorProps, ButtonComponentProps } from "../interface";

export default function Button(props: ButtonComponentProps) {
  function identifyAnchorOrButton(
    props: ButtonComponentProps
  ): props is AnchorProps {
    return "href" in props;
  }

  if (identifyAnchorOrButton(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
