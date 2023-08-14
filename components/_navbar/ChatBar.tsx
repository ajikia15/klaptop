"use client";
import { motion } from "framer-motion";

function ChatBar() {
  return (
    <div className="fixed right-0 grid w-16 -translate-x-1/2 rounded-full cursor-pointer bottom-24 aspect-square place-items-center bg-primary">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        className={"text-text"}
        viewBox="0 0 48 48"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}>
        <g
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="4">
          <motion.path
            d="M44 28H28v16h16V28Z"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.path
            d="M13 4l9 16H4l9-16Z"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.path
            d="M36 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.path
            stroke-linecap="round"
            d="m4 28l16 16m0-16L4 44"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default ChatBar;
