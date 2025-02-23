import React from "react";

const ButtonLink = ({ url, text, padding }) => {
  return (
    <a
      href={url}
      target="_blank"
      className={`flex justify-center items-center transition ease-in-out duration-300 ${padding} rounded-md text-white border-2 hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1 cursor-pointer mt-5 w-1/3 mx-auto`}
    >
      {text}
    </a>
  );
};

export default ButtonLink;
