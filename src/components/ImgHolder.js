import React from "react";
import "../index.css";

const ImgHolder = ({ children }) => {
  return <div className='bg-main-img h-[60vh] bg-cover'>{children}</div>;
};

export default ImgHolder;
