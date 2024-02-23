import React,{useEffect} from "react";
import Navbar from "../Components/Navbar";
import bg from "../Assets/bg.webp";
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos';


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can customize the duration
  }, []);

  return (
    <div className="relative">
      <img
        src={bg}
        className="w-full h-screen object-cover relative"
        alt="background img"
      />
      <div className="absolute inset-0">
        <Navbar />
        <div className="container">
          <div className="mt-40 space-y-8 text-white">
            <h1 className="font-bold text-7xl " data-aos="fade-right">
              AL BASED FACE TECOGNITION <br /> ATTENDANCE MONITORING SYSTEM
            </h1>
            <p className="text-3xl" data-aos="fade-left">
              Advanced Facial Recongnition Technology for Your Business
            </p>
          </div>
          <br />
          <div className="flex gap-4 mt-16 " data-aos="zoom-in">
            <button className=" text-white font-bold rounded-full h-14 w-32 hover:bg-white hover:text-black hover:text-[20px] bg-[#2b59e1] hover:font-[500] ease-in duration-300 text-center">
              Login
            </button>
            <button className=" text-white hover:bg-white hover:text-black hover:text-[15px] font-bold rounded-full h-14 w-44  bg-[#060607] hover:font-[500] ease-in duration-300 text-center">
              Reports/Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
