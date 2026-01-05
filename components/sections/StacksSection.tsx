"use client";

import Card from "../ui/Card";
import clsx from "clsx";
import Image from "next/image";

import { useEffect, useRef } from "react";
import { titleAnimation } from "@/animations/title";
import { stackAnimation } from "@/animations/stack";

type StackProps = {
  stacksList: {
    _id: string;
    title: string;
    logo: {
      src: string;
    };
  }[];
};

const StacksSection = (props: StackProps) => {
  const { stacksList } = props;

  const titleRef = useRef(null);
  const stackRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) titleAnimation(titleRef.current);
    if (stackRef.current) stackAnimation(stackRef.current);
  }, []);

  return (
    <section
      ref={stackRef}
      className="cards-gap grid auto-rows-[1fr] grid-cols-5"
    >
      <Card className="bg-grey-200 col-span-3 flex flex-col justify-center md:justify-between md:p-6">
        <h2
          ref={titleRef}
          className="text-title relative ml-6 md:ml-0"
        >
          Стек
        </h2>
        <p className="text-24 hidden opacity-80 md:block">
          Изучу новое под задачу
        </p>
      </Card>

      {stacksList.map((item, id) => {
        return (
          <Card
            className={clsx(
              "bg-grey-200 flex flex-col rounded-[20px]",
              id === 0 && "aspect-square",
              (id === 3 || (id % 19 === 0 && id !== 0)) &&
                "col-span-2 row-span-2",
              (id === 4 || (id % 20 === 0 && id !== 0)) &&
                "col-span-2 aspect-auto",
              (id === 10 || (id % 26 === 0 && id !== 0)) &&
                "col-span-3 row-span-2",
            )}
            key={item._id}
          >
            <div className="flex w-full flex-1 items-center justify-center">
              <Image
                className="h-[calc(100%/3)] w-auto"
                width={24}
                height={24}
                alt={item.title}
                src={`/cms${item.logo.src}`}
              />
            </div>
            <div className="hidden px-6 pb-6 md:block">
              <p className="text-16 truncate text-center">
                {item.title.split(/(\s+)/).map((word) => {
                  if (word === word.toUpperCase()) {
                    return (
                      <span className="tracking-widest" key={word}>
                        {word}
                      </span>
                    );
                  }
                  return word;
                })}
              </p>
            </div>
          </Card>
        );
      })}
    </section>
  );
};

export default StacksSection;
