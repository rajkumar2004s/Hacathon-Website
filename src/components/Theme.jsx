import React, { useState } from "react";
import tracks from "../data/tracksData"; // Adjust according to your project

const ThemesSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div id="themessection">
      <div className="p-8 bg-[radial-gradient(ellipse_at_top_left,_#0b1a33,_#070b13)]">
        <div className="pt-[40px]">
          <h1 className="theme text-center text-[60px] font-bold bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent">
            Themes & Tracks
          </h1>

          <p className="text-center text-white font-inter text-2xl pt-4">
            Choose your path to innovation and compete for amazing prizes!
          </p>
        </div>

        <div className="pt-[45px] p-4">
          <h1 className="text-[30px] text-center text-[#6387f2] theme">
            Hackathon Themes
          </h1>

          <div className="flex justify-center">
            <div>
              <p className="text-center text-white text-[18px] font-inter pt-4">
                The problem statements will be designed around these themes.
                There can be multiple themes in a single problem statement.
              </p>

              <p className="text-center text-white text-[18px] font-inter pt-2">
                Full details will be released along with the problem
                statements!!
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex md:gap-6 md:justify-center md:items-center grid grid-cols-1 pt-[40px] gap-4">
          <div className="bg-[#161F2F] shadow-xl rounded-[20px] md:w-[26vw] md:h-[50vh] h-[40vh] p-4 flex flex-col justify-center items-center border-gray-500 border bg-img-1">
            <div className="img-1 flex justify-center">
              <img
                src="https://res.cloudinary.com/dwdekki8t/image/upload/v1744861785/Screenshot_2025-04-17_091838-removebg-preview_rs4rk7.png"
                alt="AI"
                className="w-24 h-22"
              />
            </div>

            <h3 className="text-white text-[30px] font-bold xsai">AI/ML</h3>

            <p className="text-[#bec4d1] text-[18px] text-center p-2 font-semibold font-inter">
              Harness the power of artificial intelligence and machine learning
              to solve complex problems and create intelligent applications.
            </p>
          </div>

          <div className="bg-[#161F2F] shadow-xl rounded-[20px] md:w-[26vw] md:h-[50vh] h-[40vh] p-4 flex flex-col justify-center items-center border-gray-500 border bg-img-2">
            <div className="img-2 flex justify-center">
              <img
                src="https://res.cloudinary.com/dwdekki8t/image/upload/v1744884345/Screenshot_2025-04-17_153429-removebg-preview_pbjjzm.png"
                alt="Web3"
                className="w-28 h-24"
              />
            </div>

            <h3 className="text-white text-[30px] xsai">Web3/Blockchain</h3>

            <p className="text-[#bec4d1] text-[18px] text-center p-2 font-semibold font-inter">
              Build decentralized applications and explore blockchain technology
              to create transparent, secure, and innovative solutions.
            </p>
          </div>

          <div className="bg-[#161F2F] shadow-xl rounded-[20px] md:w-[26vw] md:h-[50vh] h-[40vh] p-4 flex flex-col justify-center items-center border-gray-500 border bg-img-3">
            <div className="img-3 flex justify-center">
              <img
                src="https://res.cloudinary.com/dwdekki8t/image/upload/v1744860916/Screenshot_2025-04-17_090429-removebg-preview_o5fm0w.png"
                alt="Software"
                className="w-28 h-24"
              />
            </div>

            <h3 className="text-white text-[30px] font-bold text-center">
              Software Development
            </h3>

            <p className="text-[#bec4d1] text-[18px] text-center p-2 font-semibold font-inter">
              Create cutting-edge software solutions using modern frameworks and
              techniques to solve real-world challenges.
            </p>
          </div>
        </div>

        <div className="pt-[45px] p-4">
          <h1 className="text-[30px] text-center text-[#6387f2] theme">
            Hackathon Tracks
          </h1>

          <div className="flex justify-center">
            <div>
              <p className="text-center text-white text-[18px] font-inter pt-4 md:w-[1200px]">
                The problem statements will be based on these tracks + bonus
                points for choosing specific tracks. Full details will be
                released along with the problem statements.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:flex md:flex-wrap gap-8 p-4 justify-center">
          {tracks.map((item, index) => (
            <div
              key={index}
              className={`card-1 md:w-[26vw] w-full ${
                activeCard === index ? "active" : ""
              }`}
            >
              <div
                className="flex p-4 cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div className="relative w-16 h-16 flex items-center justify-center rounded-full p-2 border border-gray-700 shadow-md mr-[14px]">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-12 p-1"
                  />
                </div>

                <div className="pl-4 pt-1">
                  <h1 className="text-xl text-white font-bold">{item.title}</h1>

                  <p className="text-[#85878c] font-semibold">
                    View details{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </p>
                </div>
              </div>

              {activeCard === index && (
                <div className="pt-3 flex justify-center flex-col items-center gap-2">
                  <div className="bg-[radial-gradient(ellipse_at_top_left,_#034d61,_#040a29)] rounded-[12px] w-[90%] p-3 border border-[#02082b] expandhover">
                    <p className="text-[17px] text-[#2f77eb] font-bold">
                      Challenge description:
                    </p>

                    <p className="text-white text-[16px] font-semibold">
                      {item.challenge}
                    </p>
                  </div>

                  <div className="bg-[radial-gradient(ellipse_at_top_left,_#10182b,_#1b0c26)] rounded-[12px] w-[90%] p-3 border border-[#02082b] expandhover">
                    <p className="text-[17px] text-[#5d07b3] font-bold">
                      Prize:
                    </p>

                    <p className="text-white text-[16px] font-semibold">
                      {item.prize}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemesSection;
