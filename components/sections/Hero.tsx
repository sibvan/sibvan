import Card from "../ui/Card";

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
        <p>{age}</p>
      </Card>
      <Card className="card-default aspect-square md:row-span-2">Фото</Card>
      <Card className="card-default aspect-square md:aspect-auto">Статус</Card>
      <Card className="card-default col-span-full aspect-296/144 md:col-span-1 md:aspect-auto">
        Языки
      </Card>
      <Card className="card-default col-span-full aspect-296/144 md:aspect-auto xl:-order-1 xl:col-span-1 xl:row-span-4">
        Город
      </Card>
    </section>
  );
};

export default Hero;
