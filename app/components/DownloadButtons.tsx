"use client";

import { useLayoutEffect, useState } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/id/app/shapepal-calorie-counter/id6754196328";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.bohdan.shapepal";

function getMobilePlatform(): "ios" | "android" | null {
  if (typeof navigator === "undefined") return null;
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  if (/Android/.test(ua)) return "android";
  return null;
}

export function DownloadButtons() {
  const [platform, setPlatform] = useState<"ios" | "android" | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    setPlatform(getMobilePlatform());
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const showSingleButton = isMobile && platform;

  if (showSingleButton && platform === "ios") {
    return (
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-16 w-full max-w-sm items-center justify-center gap-3 rounded-xl border-2 border-black bg-white px-6 py-3 transition hover:bg-zinc-50 sm:h-[4.25rem] sm:px-8 sm:py-4"
        aria-label="Download on the App Store"
      >
        <svg
          className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
          viewBox="0 0 24 24"
          fill="black"
          aria-hidden
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <span className="text-base font-bold text-black sm:text-lg">
          Download
        </span>
      </a>
    );
  }

  if (showSingleButton && platform === "android") {
    return (
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-16 w-full max-w-sm items-center justify-center gap-3 rounded-xl border-2 border-black bg-white px-6 py-3 transition hover:bg-zinc-50 sm:h-[4.25rem] sm:px-8 sm:py-4"
        aria-label="Get it on Google Play"
      >
        <svg
          className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
          viewBox="0 0 24 24"
          fill="black"
          aria-hidden
        >
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
        </svg>
        <span className="text-base font-bold text-black sm:text-lg">
          Download
        </span>
      </a>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-5">
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-16 items-center gap-4 rounded-xl border-2 border-black bg-white px-6 py-3 transition hover:bg-zinc-50 sm:h-[4.25rem] sm:px-8 sm:py-4"
        aria-label="Download on the App Store"
      >
        <svg
          className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
          viewBox="0 0 24 24"
          fill="black"
          aria-hidden
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <span className="text-left text-black">
          <span className="block text-xs font-normal leading-tight sm:text-sm">
            Download on the
          </span>
          <span className="block text-base font-bold leading-tight sm:text-lg">
            App Store
          </span>
        </span>
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-16 items-center gap-4 rounded-xl border-2 border-black bg-white px-6 py-3 transition hover:bg-zinc-50 sm:h-[4.25rem] sm:px-8 sm:py-4"
        aria-label="Get it on Google Play"
      >
        <svg
          className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
          viewBox="0 0 24 24"
          fill="black"
          aria-hidden
        >
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
        </svg>
        <span className="text-left text-black">
          <span className="block text-xs font-normal leading-tight sm:text-sm">
            GET IT ON
          </span>
          <span className="block text-base font-bold leading-tight sm:text-lg">
            Google Play
          </span>
        </span>
      </a>
    </div>
  );
}
