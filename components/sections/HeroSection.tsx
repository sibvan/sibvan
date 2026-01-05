"use client";

import Card from "@/components/ui/Card";
import Image from "next/image";
import { langAnimation, ageAnimation } from "@/animations/header";
import { titleAnimation } from "@/animations/title";
import { useEffect, useRef } from "react";

type HeroProps = {
  age: number;
};

const HeroSection = (props: HeroProps) => {
  const { age } = props;

  const langChartRef = useRef(null);
  const ageRef = useRef(null);
  const hiRef = useRef(null);

  useEffect(() => {
    if (langChartRef.current) langAnimation(langChartRef.current);
    if (ageRef.current) ageAnimation(ageRef.current);
    if (hiRef.current) titleAnimation(hiRef.current);
  }, []);

  return (
    <section className="cards-gap grid grid-cols-2 md:auto-rows-[1fr] md:grid-cols-3 xl:row-span-4 xl:grid-cols-4">
      <div className="cards-gap col-span-2 flex flex-col md:col-span-1 md:row-span-4 xl:-order-3">
        <Card className="bg-grey-200 aspect-square md:aspect-auto md:flex-1">
          <div className="flex flex-col justify-between p-6 h-full">
            <h1 ref={hiRef} className="text-title relative font-bold">
              Привет
              <br />я Ваня
            </h1>
            <p className="text-24 opacity-80">
              Фулстек-разработчик на JavaScript
            </p>
          </div>
        </Card>
        <Card className="card-default inset-shadow-grey-200 bg-[url(/hero/tgik.webp)] bg-size-[100%_auto] bg-center bg-no-repeat inset-shadow-[0px_0px_0px_8px] transition-[background-size] duration-300 ease-in-out hover:bg-size-[120%_auto]">
          <p className="text-16 pb-4">Образование</p>
          <p className="text-24 pb-2 text-right tracking-widest opacity-80">
            ТГИК
          </p>
          <p className="text-16 text-right opacity-50">бизнес-информатика</p>
        </Card>
      </div>
      <Card className="card-default col-span-full flex aspect-296/144 justify-between md:col-span-2 md:row-span-2 md:aspect-auto xl:-order-2">
        <p className="text-16">Возраст</p>
        <p ref={ageRef} className="text-age relative">
          {age}
        </p>
      </Card>
      <Card className="card-default group aspect-square md:row-span-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-full">
          <Image
            className="transition duration-300 ease-in-out group-hover:scale-120"
            alt="Моё фото"
            width={312}
            height={312}
            src="/hero/me.webp"
          />
        </div>
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
        <div
          ref={langChartRef}
          className="absolute top-6 right-6 flex h-[calc(100%-48px)] w-[calc(100%-48px)] items-end"
        >
          <div className="bg-red flex h-[calc(100%/3)] flex-1 items-center justify-center rounded-[10px]">
            <p className="text-16 text-black opacity-20">Ge</p>
          </div>
          <div className="bg-yellow flex h-[calc(100%/3*2)] flex-1 items-center justify-center rounded-[10px]">
            <p className="text-16 text-black opacity-50">En</p>
          </div>
          <div className="bg-green flex h-full flex-1 items-center justify-center rounded-[10px]">
            <p className="text-16 text-black opacity-80">Ru</p>
          </div>
        </div>
      </Card>
      <Card className="inset-shadow-grey-200 card-default col-span-full aspect-296/144 bg-[url(/hero/map.webp)] bg-size-[100%_auto] bg-center bg-no-repeat inset-shadow-[0px_0px_0px_8px] transition-[background-size] duration-300 ease-in-out hover:bg-size-[120%_auto] md:row-span-2 md:aspect-auto xl:-order-1 xl:col-span-1 xl:row-span-4 xl:bg-size-[auto_100%] xl:hover:bg-size-[auto_120%]">
        <p className="text-16">Город</p>
      </Card>
    </section>
  );
};

export default HeroSection;
