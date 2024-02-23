import React from "react";

function Navbar() {
  return (
    <header className="h-[100px] leading-[80px] bg-[#2544a1] text-white flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo= */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[42px] bg-blue-800 text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
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
            <ul className="flex items-center gap-14 bg-black rounded-full pl-8 pr-8 h-14">
              <li>
                <a className="font-[600]" href="#home">
                  Service
                </a>
              </li>
              <li>
                <a className="font-[600]" href="#skill">
                  About
                </a>
              </li>
              <li>
                <a className="font-[600]" href="#project">
                  Contact
                </a>
              </li>
              <li>
                <a className="font-[600]" href="#contact">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          {/* menu end */}

          {/* menu right btn start */}
          <div className="flex items-center">
            <button className="flex items-center gap-2 font-[600] border-2 border-solid border-white py-2 px-4 rounded-full h-14   bg-[#2b59e1] hover:text-white hover:font-[500] ease-in duration-300">
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
