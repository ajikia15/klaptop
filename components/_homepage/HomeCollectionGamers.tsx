"use client";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Card from "@/components/_homepage/Card";
import supabase from "@/utils/supabase";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

function HomeCollectionGamers() {
  // const { data: posts } = await supabase.from('posts').select()

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3">
        {[1, 2, 3].map((_, index) => (
          <LazyMotion features={domAnimation}>
            <m.li
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}>
              <Card />
            </m.li>
          </LazyMotion>
        ))}
      </ul>
    </>
  );
}

export default HomeCollectionGamers;
