"use client";
import { useTransition, animated } from "@react-spring/web";
import { useRef } from "react";
import Card from "./Card";
import Link from "next/link";
function HomeCollectionGamers() {
  const items = [1, 2, 3];
  const transitions = useTransition(items, {
    from: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0 },
    trail: 100,
    duration: 1,
  });

  return (
    <div className="grid grid-cols-1 gap-y-4">
      <div className="flex flex-row items-center justify-between">
        <div className="text-3xl font-semibold text-text">
          <h4 className="text-sm font-bold text-third">
            T R E N D I N G
          </h4>
          <h2>#გეიმერებისთვის</h2>
        </div>
        <Link
          href="/"
          className="mr-3 font-bold cursor-pointer hover:underline underline-offset-2 text-primary">
          იხილეთ მეტი &rarr;
        </Link>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3">
        {transitions((props, item) => (
          <animated.li key={item} style={props}>
            <Card />
          </animated.li>
        ))}
      </ul>
    </div>
  );
}

export default HomeCollectionGamers;
