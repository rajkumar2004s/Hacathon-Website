import React from "react";
import { participateData } from "../data/participateData";

const WhyParticipate = () => {
  return (
    <div className="bg-gradient-to-r from-[#260e42] to-[#0b0b0d] p-6">
      <div className="pt-[30px]">
        <h1 className="text-center text-[62px] font-bold bg-gradient-to-r from-[#5d4ecf] to-[#13a4e8] bg-clip-text text-transparent">
          Why Participate?
        </h1>

        <p className="text-center text-[#c2b9b8] pt-2 font-inter text-[20px]">
          Unleash your potential, connect with innovators, and win exciting
          rewards.
        </p>
      </div>

      <div className="pt-16 grid md:grid-cols-3 gap-8 justify-items-center md:mx-28">
        {participateData.map((item) => (
          <div
            key={item.title}
            className={`rounded-[25px] p-6 h-[30vh] w-full md:w-[23vw] participate ${item.bg}`}
          >
            <div className="flex justify-center items-center">
              <div
                className={`${item.iconBg} rounded-full w-16 h-16 flex justify-center items-center`}
              >
                <i
                  className={`fa-solid ${item.icon} text-white text-[30px]`}
                ></i>
              </div>
            </div>

            <p className="text-white font-bold text-[22px] pt-5">
              {item.title}
            </p>

            <p className="text-[#c8e3d3] font-inter text-[14px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-8 flex justify-center">
        <div className="bg-gradient-to-r from-[#4287f5] to-[#55388f] pt-[15px] w-full md:w-[23vw] p-3 rounded-full flex justify-center items-center xyz">
          <p className="text-white font-bold">Register Now</p>
        </div>
      </div>
    </div>
  );
};

export default WhyParticipate;
