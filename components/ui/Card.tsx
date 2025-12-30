import { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = (props: CardProps) => {
  const { children, className } = props;

  return <div className={clsx(className, "rounded-[20px]")}>{children}</div>;
};

export default Card;
