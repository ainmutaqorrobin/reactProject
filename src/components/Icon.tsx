import { IconProps } from "../interface";

export default function Icon(props: IconProps) {
  return (
    <button>
      <span>
        <props.Icon />
      </span>
      <span>{props.children}</span>
    </button>
  );
}

function HeartIcon() {
  return <span>❤️</span>;
}

export function Demo() {
  return (
    <Icon Icon={HeartIcon} onClick={() => console.log("button clicked")}>
      Like
    </Icon>
  );
}
