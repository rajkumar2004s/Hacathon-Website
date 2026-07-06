import React, { useState } from "react";
import problemStatements from "../data/problemStatement";

const ProblemStatements = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <section id="problemstatementsection">
      <div className="bg-gradient-to-r from-[#132545] to-[#000000] p-6">
        <div className="pt-10">
          <h1 className="prob text-center md:text-[80px] text-[55px] font-bold bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent">
            Problem Statements
          </h1>

          <p className="text-center text-[#c2b9b8] font-inter text-[20px] mt-3">
            Choose your challenge, innovate, and create impactful solutions.
            More problem statements might be added before the hackathon!
          </p>
        </div>

        <div className="flex justify-center pt-8">
          <div className="bg-gradient-to-r from-[#4f8dff] via-[#5987de] via-[#924fff] to-[#7a09e3] md:p-4 p-5 rounded-2xl md:rounded-full w-full md:w-[83%] text-center">
            <a
              href="https://docs.google.com/document/d/1yuwgeEVT6q6cUaQd-vof4ckVydK_Y1y43B4N8sKUrb8/edit?tab=t.0"
              target="_blank"
              rel="noreferrer"
              className="text-white font-semibold"
            >
              The problem statement descriptions given below are in concise
              form. Go to the detailed problem statement document to learn more.
              <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 pt-16">
          {problemStatements.map((item, index) => (
            <div
              key={index}
              className="problemstatement-card-1 w-full md:w-[90%] bg-[#161F2F] border border-gray-700 rounded-xl cursor-pointer overflow-hidden"
            >
              <div
                className="flex justify-between items-center p-4"
                onClick={() => toggleCard(index)}
              >
                <div className="flex">
                  <div className="bg-[radial-gradient(#171717,#030203)] md:w-24 md:h-24 w-20 h-20 rounded-lg flex items-center justify-center shadow-xl">
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  <div className="pl-5">
                    <h2 className="text-white md:text-2xl text-lg font-bold">
                      {item.title}
                    </h2>

                    <p className="text-[#85878c] md:text-base text-sm mt-2">
                      {item.data}
                    </p>
                  </div>
                </div>

                <i
                  className={`fa-solid fa-angle-down text-blue-500 text-2xl transition-transform duration-300 ${
                    activeCard === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {activeCard === index && (
                <div className="p-4 pt-0">
                  <div className="bg-[#364254] rounded-xl p-4 border border-[#02082b]">
                    <p className="text-[#2f77eb] font-bold mb-3">
                      About this challenge
                    </p>

                    <p className="text-white leading-7">{item.challenge}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-14">
          <div className="bg-[#161F2F] border border-gray-600 rounded-2xl md:w-[55%] w-full p-8 flex flex-col items-center">
            <h2 className="bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent text-3xl font-bold text-center">
              Ready to Take on the Challenge?
            </h2>

            <p className="text-center text-[#bcc2e8] mt-4">
              Get all the details you need to participate in the hackathon and
              start building your solutions!
            </p>

            <a
              href="https://docs.google.com/document/d/1yuwgeEVT6q6cUaQd-vof4ckVydK_Y1y43B4N8sKUrb8/edit?tab=t.0"
              target="_blank"
              rel="noreferrer"
              className="mt-8 bg-gradient-to-r from-[#4287f5] to-[#55388f] px-8 py-4 rounded-full text-white font-bold"
            >
              <i className="fa-regular fa-file mr-2"></i>
              View Detailed Problem Statements
              <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
            </a>

            <div className="mt-5 border border-gray-600 rounded-full px-8 py-4 text-center text-white">
              <i className="fa-solid fa-book-open text-[#4a208a] mr-2"></i>
              Participation guidelines & rules will be updated soon...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;
