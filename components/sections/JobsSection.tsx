"use client";

import Card from "../ui/Card";
import clsx from "clsx";
import { useEffect, useRef } from "react";

import { titleAnimation } from "@/animations/title";

type ExperienceProps = {
  jobsList: {
    _id: string;
    title: string;
    company: {
      title: string;
      color: string;
      url: {
        _url: string;
        _target: string;
      };
    };
    period: string;
    responsibilities: {
      _id: string;
      description: string;
    }[];
  }[];
};

const JobsSection = (props: ExperienceProps) => {
  const { jobsList } = props;

  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) titleAnimation(titleRef.current);
  }, []);

  return (
    <section className="cards-gap flex flex-col">
      <Card className="card-default">
        <h2 ref={titleRef} className="text-title relative pb-2">
          Опыт
        </h2>
        <p className="text-24 opacity-80">
          До перехода в разработку работал дизайнером в течение 10 лет
        </p>
      </Card>
      {jobsList.map((item) => {
        return (
          <Card
            className="card-default flex flex-col gap-6 xl:flex-row"
            key={item._id}
          >
            <div className="xl:flex-1">
              <h3 className="text-title pb-4 opacity-20">{item.title}</h3>
              <div className="flex gap-6">
                <div>
                  <p className="text-16 pb-2 opacity-50">Компания</p>
                  <a
                    style={{ color: item?.company?.color }}
                    className={clsx(
                      "text-24 transition-color block underline opacity-80 duration-300 hover:opacity-100",
                      item.company.title === "ProSense" && "text-prosense",
                    )}
                    target={item.company.url._target}
                    href={item.company.url._url}
                  >
                    {item.company.title}
                  </a>
                </div>
                <div>
                  <p className="text-16 pb-2 opacity-50">Период</p>
                  <p className="text-24 opacity-80">{item.period}</p>
                </div>
              </div>
            </div>
            <div className="h-px bg-white opacity-10 xl:hidden"></div>
            <div className="xl:flex-1">
              <p className="text-16 pb-6 opacity-50">Обязанности</p>
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-1">
                {item.responsibilities.map((item) => {
                  return (
                    <li key={item._id}>
                      <p className="text-24-120">{item.description}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Card>
        );
      })}
    </section>
  );
};

export default JobsSection;
