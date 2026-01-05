import { CSSProperties, ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Card = (props: CardProps) => {
  const { children, className, style } = props;

  return (
    <div style={style} className={clsx(className, "rounded-[20px]")}>
      {children}
    </div>
  );
};

export default Card;
