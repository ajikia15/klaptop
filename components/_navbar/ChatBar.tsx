"use client";
import { motion } from "framer-motion";

function ChatBar() {
  const keyframes = {
    rotateY: [0, 360],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeOut",
    },
  };

  return (
    <div className="relative flex items-end justify-center py-12 ">
      <div className="sticky right-0 grid w-16 rounded-full bottom-12 aspect-square place-items-center bg-primary">
        <motion.div animate={keyframes} className="">
          <img src="/chatball.svg" alt="" />
        </motion.div>
      </div>
    </div>
  );
}

export default ChatBar;
