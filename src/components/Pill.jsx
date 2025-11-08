import React, { useEffect, useRef } from "react";

const Pill = () => {
  const pillRef = useRef(null);

  useEffect(() => {
    const pill = pillRef.current;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let pillX = mouseX;
    let pillY = mouseY;
    const ease = 0.2;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      pill.style.opacity = 1;
    };

    const handleOut = (e) => {
      if (!e.relatedTarget && !e.toElement) pill.style.opacity = 0;
    };

    const rafLoop = () => {
      const dx = mouseX - pillX;
      const dy = mouseY - pillY;
      pillX += dx * ease;
      pillY += dy * ease;
      pill.style.transform = `translate3d(${pillX}px, ${pillY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(rafLoop);
    };
    rafLoop();

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <div
      ref={pillRef}
      className="
        fixed top-0 left-0 z-[9999] pointer-events-none
        w-[14px] h-[14px] rounded-full opacity-90
        border-green-600 border
    shadow-[0_0_50px_#00aa00,0_0_10px_#00aa00]
        transition-all duration-150 ease-[cubic-bezier(.2,.9,.3,1)]
        will-change-transform
      "
      aria-hidden="true"
    ></div>
  );
};

export default Pill;
