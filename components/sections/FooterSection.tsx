import Card from "../ui/Card";
import Button from "../ui/Button";
import Image from "next/image";

type FooterProps = {
  socialsList: {
    src: string;
    bg: string;
    alt: string;
    href: string;
  }[];
};

const FooterSection = (props: FooterProps) => {
  const { socialsList } = props;

  return (
    <footer className="cards-gap grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
      {socialsList.map((item) => {
        return (
          <a className="group" href={item.href} key={item.alt} target="_blank">
            <Card
              style={{ background: item.bg }}
              className="flex aspect-square flex-col p-6 transition-shadow duration-300 ease-in-out group-hover:inset-shadow-[0px_0px_0px_1000px] group-hover:inset-shadow-black group-hover:outline group-hover:-outline-offset-1 group-hover:outline-white/10"
            >
              <div className="flex-1">
                <Image
                  width={24}
                  height={24}
                  src={item.src}
                  alt={item.alt}
                  className="h-[calc(100%-8px)] w-auto md:h-[calc(100%-16px)] xl:h-[calc(100%-24px)]"
                />
              </div>
              <Button className="self-end" />
            </Card>
          </a>
        );
      })}
    </footer>
  );
};

export default FooterSection;
