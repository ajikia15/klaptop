import { useState, useEffect } from "react";

export default function Hover3d(ref, { x = 0, y = 0, z = 0 }) {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        const { offsetWidth: width, offsetHeight: height } = ref.current;
        const { clientX, clientY } = e;
        const x = (clientX - width / 2) / width;
        const y = (clientY - height / 2) / height;
        setCoords({ x, y });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        const { current } = ref;
        current.addEventListener("mousemove", handleMouseMove);
        current.addEventListener("mouseenter", handleMouseEnter); // Corrected event names
        current.addEventListener("mouseleave", handleMouseLeave); // Corrected event names
        return () => {
            current.removeEventListener("mousemove", handleMouseMove);
            current.removeEventListener("mouseenter", handleMouseEnter); // Corrected event names
            current.removeEventListener("mouseleave", handleMouseLeave); // Corrected event names
        };
    }, [ref]);

    const { x: xCoord, y: yCoord } = coords;
    const xTransform = isHovering ? xCoord * x : 0;
    const yTransform = isHovering ? yCoord * y : 0;
    const zTransform = isHovering ? z : 0;

    const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${xTransform}deg) translateZ(${zTransform}px)`;

    const transition = "all 0.1s linear";

    return { transform, transition };
}
