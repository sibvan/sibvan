import Card from "../ui/Card";
import Image from "next/image";

type HeroProps = {
  age: number;
};

const Hero = (props: HeroProps) => {
  const { age } = props;

  return (
    <section className="cards-gap grid grid-cols-2 md:auto-rows-[1fr] md:grid-cols-3 xl:row-span-4 xl:grid-cols-4">
      <div className="cards-gap col-span-full flex flex-col md:col-span-1 md:row-span-4 xl:-order-3">
        <Card className="card-default flex aspect-square flex-col justify-between md:aspect-auto md:flex-1">
          <h1 className="text-title font-bold">
            Привет
            <br />я Ваня
          </h1>
          <p className="text-24 opacity-80">
            Фулстек-разработчик на JavaScript
          </p>
        </Card>
        <Card className="card-default border-grey-200 border-8 bg-[url(/hero/tgik.webp)] bg-cover bg-center bg-no-repeat">
          <p className="text-16 pb-4">Образование</p>
          <p className="text-24 pb-2 text-right tracking-widest opacity-80">
            ТГИК
          </p>
          <p className="text-16 text-right opacity-50">бизнес-информатика</p>
        </Card>
      </div>
      <Card className="card-default col-span-full flex aspect-296/144 justify-between md:col-span-2 md:row-span-2 md:aspect-auto xl:-order-2">
        <p className="text-16">Возраст</p>
        <p className="text-age">{age}</p>
      </Card>
      <Card className="card-default aspect-square md:row-span-2">
        <Image
          className="w-full"
          alt="Моё фото"
          width={312}
          height={312}
          src="/hero/me.webp"
        />
      </Card>
      <Card className="card-default relative aspect-square md:aspect-auto">
        <p className="text-16">Статус</p>
        <Image
          className="absolute top-6 right-6 h-[calc(100%-48px)] w-auto animate-[spin_10s_linear_infinite]"
          alt="#opentowork"
          width={120}
          height={120}
          src="/hero/opentowork.webp"
        />
      </Card>
      <Card className="card-default relative col-span-full aspect-296/144 md:col-span-1 md:aspect-auto">
        <p className="text-16">Языки</p>
        <div className="absolute top-6 right-6 flex h-[calc(100%-48px)] w-[calc(100%-48px)] items-end">
          <div className="bg-red flex h-[calc(100%/3)] flex-1 items-center justify-center rounded-[10px]">
            <p className="text-16 text-black opacity-20">Ru</p>
          </div>
          <div className="bg-yellow flex h-[calc(100%/3*2)] flex-1 items-center justify-center rounded-[10px]">
            <p className="text-16 text-black opacity-50">En</p>
          </div>
          <div className="bg-green flex h-full flex-1 items-center justify-center rounded-[10px]">
            <p className="text-16 text-black opacity-80">Ge</p>
          </div>
        </div>
      </Card>
      <Card className="card-default border-grey-200 col-span-full aspect-296/144 border-8 bg-[url(/hero/map.webp)] bg-cover bg-center bg-no-repeat md:aspect-auto xl:-order-1 xl:col-span-1 xl:row-span-4">
        <p className="text-16">Город</p>
      </Card>
    </section>
  );
};

export default Hero;
