import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="mt-40 space-y-8">
        <h1 className="font-bold text-7xl ">
          AL BASED FACE TECOGNITION <br /> ATTENDANCE MONITORING SYSTEM
        </h1>
        <p className="text-3xl">
          Advanced Facial Recongnition Technology for Your Business
        </p>
      </div>
      <br />
      <div className="flex gap-4 mt-16">
        <button className=" text-white font-bold rounded-full h-14 w-32  bg-[#2b59e1] hover:font-[500] ease-in duration-300 text-center">
          Login
        </button>
        <button className=" text-white font-bold rounded-full h-14 w-44  bg-[#060607] hover:font-[500] ease-in duration-300 text-center">
          Reports/Analytics
        </button>
      </div>
    </div>
  );
}
