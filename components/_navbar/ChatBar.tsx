"use client";
import { useSpring, animated } from "@react-spring/web";

function ChatBar() {
  const spin = useSpring({
    from: {
      transform: "rotateY(0deg)",
    },
    to: {
      transform: "rotateY(360deg)",
    },
  });
  return (
    <div className="relative flex items-end justify-center py-12 ">
      <div className="sticky right-0 grid w-16 rounded-full bottom-12 aspect-square place-items-center bg-primary">
        <animated.div style={spin}>
          <img src="/chatball.svg" alt="" />
        </animated.div>
      </div>
    </div>
  );
}

export default ChatBar;
