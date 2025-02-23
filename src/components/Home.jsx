import React from "react";
import { useState, useEffect, useRef } from "react";
import { name } from "../constants";
import Footer from "./Footer";

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText(() => text + name[ref.current - 1]);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="area relative z-0 bg-black w-screen h-screen">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div
        className="hero relative h-screen flex justify-center items-center text-white px-4 sm:px-8 lg:px-16"
        id="hero"
      >
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 h-auto backdrop-blur-sm rounded-3xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-2">
            Hi, I'm{" "}
            <span className="text-yellow-200 font-extrabold">{text}</span>
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl">
            I love to learn and build scalable, optimized full-stack systems.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

