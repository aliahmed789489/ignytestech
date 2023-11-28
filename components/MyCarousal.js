"use client"
// import portImage from "../public/slideimg.jpg"
import Image from "next/image"
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">

     <div className=" py-4 flex justify-center gap-3 w-full">
  {slides.map((s, i) => (
    <div
      onClick={() => {
        setCurrent(i);
      }}
      key={"circle" + i}
      style={{backgroundColor:`${
        i === current ? "#ff8300" : "#fff"
      }`}}
      className="rounded-full w-5 h-5 cursor-pointer"
    ></div>
  ))}
</div>



      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <Image src={s}  />;
        })}
      </div>

      <div className=" absolute top-0 h-full w-full justify-between items-center flex text-white px-12 text-3xl"
      style={{display:"flex",justifyContent:"space-between", padding:"30px 10px 0px 10px"}}>
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill style={{ color: '#000' }}/>
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill style={{ color: '#000' }}/>
        </button>
      </div>

      
    </div>
  );
}

