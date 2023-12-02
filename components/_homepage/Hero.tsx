"use client";
import { useRef } from "react";
import hover3d from "./Hover";
export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const hoverHero = hover3d(heroRef, {
    x: 20,
    y: -10,
    z: 20,
  });
  const hoverGlass = hover3d(glassRef, {
    x: 30,
    y: -15,
    z: 30,
  });
  return (
    <div
      ref={heroRef}
      className="grid grid-cols-[11fr_7fr] gap-x-6 lg:gap-x-8 xl:gap-x-12 py-6 lg:py-12 xl:py-12"
    >
      <section
        ref={glassRef}
        className="grid text-2xl font-bold rounded-2xl  aspect-[2/1] bg-primary grid-cols-2 px-4 gap-x-4"
        style={{
          transform: hoverHero.transform,
          transition: hoverGlass.transition,
        }}
      >
        <div
          className="flex  items-center justify-center w-full my-4 bg-gray-900 bg-opacity-30 rounded-xl bg-clip backdrop-filter backdrop-blur-md  "
          style={{
            transform: hoverGlass.transform,
            transition: "all 0.3s linear",
          }}
        >
          <p className="text-center">
            "არ არსებობს ცუდი ლეპტოპი, არსებობს მხოლოდ ცუდი ფასი"
          </p>
        </div>
        <div className="grid place-items-center">pic here</div>
      </section>
      <section className="grid text-2xl font-bold rounded-2xl bg-secondary place-items-center">
        Top users
      </section>
    </div>
  );
}
