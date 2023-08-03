"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/_homepage/Card";
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
        {[1, 2, 3].map((_, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}>
            <Card />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default HomeCollectionGamers;
