import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = (props: CardProps) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default Card;
