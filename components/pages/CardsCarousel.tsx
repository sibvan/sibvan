"use client";

import {
  initCarousel,
  startWheel,
  hideModal,
} from "@/animations/cards-carousel";
import { useRef, useEffect, useState } from "react";

export default function CardsCarousel() {
  const cardsBlockRef = useRef(null);
  const modalWindowRef = useRef(null);

  const [res, setRes] = useState("");

  useEffect(() => {
    if (cardsBlockRef.current && modalWindowRef.current)
      initCarousel(cardsBlockRef.current, modalWindowRef.current, setRes);
  }, []);

  return (
    <>
      <div
        ref={modalWindowRef}
        className="pointer-events-none fixed z-1 flex h-full w-full items-center justify-center bg-black/90 opacity-0 transition duration-300 ease-in-out"
      >
        <div className="bg-grey-200 flex w-[calc(100%-24px)] flex-col items-center gap-[calc(100px*8/24)] rounded-[20px] p-6 md:w-[80%] md:gap-[calc(100px*16/24)] xl:w-[50%] xl:gap-[100px]">
          <div>
            <h2 className="text-24 pb-2 text-center opacity-80">
              Вам выпало число {res}
            </h2>
            <p className="text-16 text-center opacity-50">
              Нажмите кнопку «Закрыть»
            </p>
          </div>
          <button
            onClick={hideModal}
            className="text-24 hover:bg-grey-100 cursor-pointer rounded-[20px] bg-white px-6 py-4 text-black transition duration-300 ease-in-out hover:text-white md:py-3.5 xl:py-3"
          >
            Закрыть
          </button>
        </div>
      </div>

      <div className="flex w-full min-w-[320px] flex-col items-center gap-[calc(100px*8/24)] overflow-hidden px-3 pt-[calc(200px*8/24)] pb-[calc(300px*8/24)] md:gap-[calc(100px*16/24)] md:pt-[calc(200px*16/24)] md:pb-[calc(300px*16/24)] xl:gap-[100px] xl:pt-[200px] xl:pb-[300px]">
        <div>
          <h1 className="pb-2 text-center text-[63px]/[100%] font-bold opacity-80">
            Анимация
          </h1>
          <p className="text-16 text-center opacity-50">
            Нажмите кнопку «Вращать»
          </p>
        </div>
        <div
          ref={cardsBlockRef}
          className="relative h-[calc((100dvw-24px)*16/9)] w-[calc((100dvw-24px)*5)] md:h-[calc((100dvw-24px)/3*16/9)] md:w-[calc((100dvw-24px)/3*5)] xl:h-[calc((100dvw-24px)/5*16/9)] xl:w-full"
        >
          <div className="absolute top-0 left-0 flex aspect-9/16 w-[calc(100%/5)] items-center justify-center will-change-transform">
            <div className="bg-grey-200 flex aspect-9/16 w-[calc(100%-8px*2)] items-center justify-center rounded-[20px] transition duration-300 ease-in-out md:w-[calc(100%-16px*2)] xl:w-[calc(100%-24px*2)] will-change-transform">
              <p className="text-[63px]/[100%] font-extralight opacity-20">1</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 flex aspect-9/16 w-[calc(100%/5)] items-center justify-center will-change-transform">
            <div className="bg-grey-200 flex aspect-9/16 w-[calc(100%-8px*2)] items-center justify-center rounded-[20px] transition duration-300 ease-in-out md:w-[calc(100%-16px*2)] xl:w-[calc(100%-24px*2)] will-change-transform">
              <p className="text-[63px]/[100%] font-extralight opacity-20">2</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 flex aspect-9/16 w-[calc(100%/5)] items-center justify-center will-change-transform">
            <div className="bg-grey-200 flex aspect-9/16 w-[calc(100%-8px*2)] items-center justify-center rounded-[20px] transition duration-300 ease-in-out md:w-[calc(100%-16px*2)] xl:w-[calc(100%-24px*2)] will-change-transform">
              <p className="text-[63px]/[100%] font-extralight opacity-20">3</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 flex aspect-9/16 w-[calc(100%/5)] items-center justify-center will-change-transform">
            <div className="bg-grey-200 flex aspect-9/16 w-[calc(100%-8px*2)] items-center justify-center rounded-[20px] transition duration-300 ease-in-out md:w-[calc(100%-16px*2)] xl:w-[calc(100%-24px*2)] will-change-transform">
              <p className="text-[63px]/[100%] font-extralight opacity-20">4</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 flex aspect-9/16 w-[calc(100%/5)] items-center justify-center will-change-transform">
            <div className="bg-grey-200 flex aspect-9/16 w-[calc(100%-8px*2)] items-center justify-center rounded-[20px] transition duration-300 ease-in-out md:w-[calc(100%-16px*2)] xl:w-[calc(100%-24px*2)] will-change-transform">
              <p className="text-[63px]/[100%] font-extralight opacity-20">5</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 flex aspect-9/16 w-[calc(100%/5)] items-center justify-center will-change-transform">
            <div className="bg-grey-200 flex aspect-9/16 w-[calc(100%-8px*2)] items-center justify-center rounded-[20px] transition duration-300 ease-in-out md:w-[calc(100%-16px*2)] xl:w-[calc(100%-24px*2)] will-change-transform">
              <p className="text-[63px]/[100%] font-extralight opacity-20">6</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 flex aspect-9/16 w-[calc(100%/5)] items-center justify-center will-change-transform">
            <div className="bg-grey-200 flex aspect-9/16 w-[calc(100%-8px*2)] items-center justify-center rounded-[20px] transition duration-300 ease-in-out md:w-[calc(100%-16px*2)] xl:w-[calc(100%-24px*2)] will-change-transform">
              <p className="text-[63px]/[100%] font-extralight opacity-20">7</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 flex aspect-9/16 w-[calc(100%/5)] items-center justify-center will-change-transform">
            <div className="bg-grey-200 flex aspect-9/16 w-[calc(100%-8px*2)] items-center justify-center rounded-[20px] transition duration-300 ease-in-out md:w-[calc(100%-16px*2)] xl:w-[calc(100%-24px*2)] will-change-transform">
              <p className="text-[63px]/[100%] font-extralight opacity-20">8</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 flex aspect-9/16 w-[calc(100%/5)] items-center justify-center will-change-transform">
            <div className="bg-grey-200 flex aspect-9/16 w-[calc(100%-8px*2)] items-center justify-center rounded-[20px] transition duration-300 ease-in-out md:w-[calc(100%-16px*2)] xl:w-[calc(100%-24px*2)] will-change-transform">
              <p className="text-[63px]/[100%] font-extralight opacity-20">9</p>
            </div>
          </div>
        </div>

        <button
          onClick={startWheel}
          className="text-24 hover:bg-grey-100 cursor-pointer rounded-[20px] bg-white px-6 py-4 text-black transition duration-300 ease-in-out hover:text-white md:py-3.5 xl:py-3"
        >
          Вращать
        </button>
      </div>
    </>
  );
}
