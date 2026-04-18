"use client";

import { useEffect, useState } from "react";

export default function ParallaxBackground() {
  const [offsetY, setOffsetY] = useState(0);
  const [bgImage, setBgImage] = useState("/images/profile.jpg");

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const mq = window.matchMedia("(orientation: portrait)");

    const setImage = () => {
      if (mq.matches) {
        setBgImage("/images/profile.jpg"); // Fall back a profile.jpg
      } else {
        setBgImage("/images/profile.jpg");
      }
    };

    setImage();
    mq.addEventListener("change", setImage);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mq.removeEventListener("change", setImage);
    };
  }, []);

  return (
    <div
      className="
        fixed top-0 left-0 w-full h-full z-0
        bg-no-repeat bg-cover
        bg-[position:80%_center] md:bg-[position:center]
      "
      style={{
        backgroundImage: `url('${bgImage}')`,
        transform: `translateY(${offsetY * -0.03}px)`,
        willChange: "transform",
      }}
    />
  );
}
