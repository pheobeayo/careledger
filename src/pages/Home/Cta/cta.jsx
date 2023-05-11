import React from "react";
import Ctaimg from "../../../assets/md.png";

const Cta = () => {
  return (
    <div className="w-full pb-[120px]">
      <div className="w-full max-w-[85%] m-auto">
        <div className="w-full bg-[#121212] card-shadow flex-col lg:flex-row py-[25px] items-center flex shadow-xl">
          <div className="lg:w-[50%] p-[5%]">
            <div className=" md:w-[420px]">
              <p className="text-white text-[15px] sm:text-[20px] font-semibold line ">
                Own your record
              </p>
              <h3 className="sm:text-[30px] text-[23px] leading-[28px] sm:leading-[35px] font-bold my-[15px] text-white">
                Want to have the best way of securing your patients details?
              </h3>

              <p className="text-white text-[15px]">
                Get the best working experience that you never feel before
              </p>

              <button className="border mt-[30px] border-[#00b4b6] bg-[#00b4b6] w-full text-[color:var(--text-color)] px-3 py-[11px] rounded-[7px] hover:bg-[#00b4b6] transition-all">
                Get started
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] flex justify-center mt-[20px] sm:mt-[0px] ">
            <img src={Ctaimg} alt="" className="" />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Cta;
