"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

export function PhoneCarousel() {
  const centerSlideRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const center = centerSlideRef.current;
    const scroll = scrollRef.current;
    if (!center || !scroll) return;
    // Set scroll position before paint so there's no visible jump
    const scrollLeft =
      center.offsetLeft - (scroll.clientWidth - center.offsetWidth) / 2;
    scroll.scrollLeft = Math.max(0, scrollLeft);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="scrollbar-hide mt-10 -mx-4 snap-x snap-mandatory overflow-x-auto overflow-y-hidden px-4 md:-mx-6 md:overflow-visible md:px-6"
    >
      <div className="flex flex-nowrap items-center justify-start gap-6 py-2 md:justify-center md:gap-8">
        <div className="min-w-[200px] shrink-0 snap-center sm:min-w-[240px] md:min-w-0 md:flex-1 md:max-w-[280px]">
          <Image
            src="/img/Untitled.png"
            alt="ShapePal feature"
            width={320}
            height={240}
            className="h-auto w-full -rotate-6 rounded-xl object-contain"
          />
        </div>
        <div
          ref={centerSlideRef}
          className="min-w-[200px] shrink-0 snap-center sm:min-w-[240px] md:min-w-0 md:flex-1 md:max-w-[280px]"
        >
          <Image
            src="/img/calendar.png"
            alt="Plan your workouts"
            width={320}
            height={240}
            className="h-auto w-full rounded-xl object-contain"
          />
        </div>
        <div className="min-w-[200px] shrink-0 snap-center sm:min-w-[240px] md:min-w-0 md:flex-1 md:max-w-[280px]">
          <Image
            src="/img/workout.png"
            alt="Track your workouts"
            width={320}
            height={240}
            className="h-auto w-full rotate-6 rounded-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
}
