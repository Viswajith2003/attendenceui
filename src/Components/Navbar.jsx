import React from "react";

function Navbar() {
  return (
    <header
      className="h-[100px] leading-[80px]  text-white flex items-center"
      data-aos="fade-down"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo= */}
          <div className="flex items-center gap-[10px] mt-4">
            <span className="w-[35px] h-[42px] bg-[#013be8] text-white text-[18px] font-[500] rounded-sm  flex items-center justify-center">
              VJ
            </span>
            <div className="leading-[20px]">
              <h2 className="text-2xl text-smallTextColor font-[700]">
                IdentifEye
              </h2>
              <p className="text-sm text-[14px] font-[500]">Attendence</p>
            </div>
          </div>
          {/* Logo End */}
          {/* menu start */}
          <div className="menu">
            <ul className="flex items-center gap-14 bg-black rounded-full pl-10 pr-10 h-16">
              <li>
                <a className="font-[600] hover:text-blue-500" href="#home">
                  Service
                </a>
              </li>
              <li>
                <a className="font-[600] hover:text-blue-500" href="#skill">
                  About
                </a>
              </li>
              <li>
                <a className="font-[600] hover:text-blue-500" href="#project">
                  Contact
                </a>
              </li>
              <li>
                <a className="font-[600] hover:text-blue-500" href="#contact">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          {/* menu end */}

          {/* menu right btn start */}
          <div className="flex items-center">
            <button className="flex items-center hover:bg-white hover:text-black hover:text-[20px] gap-2 font-[600] py-2 px-4 rounded-full h-14   bg-[#2b59e1] ease-in duration-300">
              <i className="ri-send-plane-line"></i> Notifications
            </button>
          </div>
          {/* menu right btn end */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
