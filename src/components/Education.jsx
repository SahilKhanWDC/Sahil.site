import React from "react";

const Education = () => {
  return (
    <section className="py-8 px-3">
      <div className="heading flex items-center gap-3 p-3">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-blue-400"
          aria-hidden
        >
          <rect
            x="2"
            y="7"
            width="20"
            height="14"
            rx="2"
            ry="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          ></rect>
          <path
            d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          ></path>
        </svg>
        <h2 className="text-xl">Education</h2>
      </div>

      <hr className="h-[2px] w-full bg-gradient-to-r from-black via-violet-700 to-black border-0 rounded-full" />

      <div className="edu flex flex-col md:flex-row justify-center items-center gap-5 pt-10 px-3">
        <img src="/manitlogo.png" alt="MANIT Logo" className="w-20 md:w-30 lg:w-40" />
        <div className="text-center md:text-left">
          <h1 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold">
            Maulana Azad <br /> National Institute of Technology Bhopal
          </h1>
          <h2 className="text-muted text-xs md:text-sm lg:text-lg xl:text-xl mt-2">
            Bachelor of Technology (2022-2026)
          </h2>
          <h2 className="text-muted text-xs md:text-sm lg:text-lg xl:text-xl text-gray-400">
            Materials & Metallurgical Engineering
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Education;
