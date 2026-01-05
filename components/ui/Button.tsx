import Image from "next/image";
import clsx from "clsx";

type ButtonProps = {
  className?: string;
};

const Button = (props: ButtonProps) => {
  const { className } = props;

  return (
    <button
      className={clsx(
        "flex h-12 w-12 items-center justify-center rounded-full border border-white/20 group-hover:rotate-45 transition duration-300 ease-in-out",
        className,
      )}
    >
      <Image
        alt=""
        className="h-auto w-6"
        src="/ui/arrow.svg"
        width={24}
        height={24}
      />
    </button>
  );
};

export default Button;
