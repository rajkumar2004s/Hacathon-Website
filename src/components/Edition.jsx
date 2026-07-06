import statsData from "../data/statsData";

function Edition() {
  return (
    <div id="2024Editionsection">
      <div className="bg-[#0D1320] flex min-h-screen p-4 flex-col items-center">
        <div>
          <h1 className="edition text-center pt-[60px] font-bold bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-[60px] text-transparent">
            2024 Edition Stats
          </h1>

          <p className="text-[#bec4d1] text-[18px] text-center pt-3 font-semibold p-4">
            What makes HACKHAZARDS a truly remarkable event? Here are some stats
            from the previous edition.
          </p>

          <div className="flex justify-center pt-3">
            <button className="bg-gradient-to-r from-[#183dab] via-[#183dab] via-[#183dab] via-[#ab49ba] via-[#183dab] to-[#b00ec9] font-bold text-white rounded-[10px] p-4">
              View national top40 projects of last edition
            </button>
          </div>
        </div>

        <div className="pt-[50px] gap-8 grid md:grid-cols-3 grid-cols-1">
          <div className="bg-[#161F2F] shadow-xl rounded-[20px] md:w-[26vw] w-[90vw] p-4 flex flex-col justify-center items-center border border-gray-500 bg-card-1">
            <img
              src="https://res.cloudinary.com/dwdekki8t/image/upload/v1744826373/Screenshot_2025-04-16_232747-removebg-preview_ekyyap.png"
              alt="Participants"
              className="w-26 h-24"
            />

            <h3 className="bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent text-[40px] font-bold">
              2400+
            </h3>

            <p className="text-[24px] text-[#4388e8] font-bold">Participants</p>

            <p className="text-[#bec4d1] text-[18px] p-2 font-semibold">
              Brilliant minds united
            </p>
          </div>

          <div className="bg-[#161F2F] shadow-xl rounded-[20px] md:w-[26vw] w-[90vw] p-4 flex flex-col justify-center items-center border border-gray-500 bg-card-2">
            <img
              src="https://res.cloudinary.com/dwdekki8t/image/upload/v1744826485/Screenshot_2025-04-16_233004-removebg-preview_ag1pos.png"
              alt="Projects"
              className="w-26 h-24"
            />

            <h3 className="bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent text-[40px] font-bold">
              250+
            </h3>

            <p className="text-[24px] text-[#4388e8] font-bold">Projects</p>

            <p className="text-[#bec4d1] text-[18px] p-2 font-semibold">
              Innovation Unleashed
            </p>
          </div>

          <div className="bg-[#161F2F] shadow-xl rounded-[20px] md:w-[26vw] w-[90vw] p-4 flex flex-col justify-center items-center border border-gray-500 bg-card-3">
            <img
              src="https://res.cloudinary.com/dwdekki8t/image/upload/v1744826620/Screenshot_2025-04-16_233200-removebg-preview_lzhtsn.png"
              alt="Colleges"
              className="w-26 h-24"
            />

            <h3 className="bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent text-[40px] font-bold">
              250+
            </h3>

            <p className="text-[24px] text-[#4388e8] text-center font-bold">
              Colleges and Universities
            </p>

            <p className="text-[#bec4d1] text-[18px] p-2 font-semibold">
              National Reach
            </p>
          </div>

          <div className="bg-[#161F2F] shadow-xl rounded-[20px] md:w-[26vw] w-[90vw] p-4 flex flex-col justify-center items-center border border-gray-500 bg-card-4">
            <img
              src="https://res.cloudinary.com/dwdekki8t/image/upload/v1744826699/Screenshot_2025-04-16_233410-removebg-preview_htwydd.png"
              alt="Lines of Code"
              className="w-22 h-20"
            />

            <h3 className="bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent text-[40px] font-bold">
              5000000+
            </h3>

            <p className="text-[24px] text-[#4388e8] font-bold">
              Lines of Code
            </p>

            <p className="text-[#bec4d1] text-[18px] p-2 font-semibold">
              Written with passion
            </p>
          </div>

          <div className="bg-[#161F2F] shadow-xl rounded-[20px] md:w-[26vw] w-[90vw] p-4 flex flex-col justify-center items-center border border-gray-500 bg-card-5">
            <img
              src="https://res.cloudinary.com/dwdekki8t/image/upload/v1744826770/Screenshot_2025-04-16_233525-removebg-preview_u758of.png"
              alt="Community Partners"
              className="w-26 h-24"
            />

            <h3 className="bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent text-[40px] font-bold">
              50+
            </h3>

            <p className="text-[24px] text-[#4388e8] font-bold">
              Community Partners
            </p>

            <p className="text-[#bec4d1] text-[18px] p-2 font-semibold">
              Strength in collaboration
            </p>
          </div>

          <div className="bg-[#161F2F] shadow-xl rounded-[20px] md:w-[26vw] w-[90vw] p-4 flex flex-col justify-center items-center border border-gray-500 bg-card-6">
            <img
              src="https://res.cloudinary.com/dwdekki8t/image/upload/v1744826844/Screenshot_2025-04-16_233634-removebg-preview_m6fyip.png"
              alt="Sponsors and Partners"
              className="w-26 h-24"
            />

            <h3 className="bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent text-[40px] font-bold">
              25+
            </h3>

            <p className="text-[24px] text-[#4388e8] text-center font-bold">
              Sponsors and Partners
            </p>

            <p className="text-[#bec4d1] text-[18px] p-2 font-semibold">
              Delivering value and trust
            </p>
          </div>
        </div>

        <div className="pt-[50px]">
          <h1 className="edition text-center font-bold bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-[60px] text-transparent xsnotjust">
            Not Just a Hackathon
          </h1>

          <p className="text-center pt-[25px] font-inter text-xl text-white">
            Get connected with{" "}
            <span className="text-[#144e96] font-semibold">
              The NAMESPACE Community
            </span>{" "}
            ecosystem
          </p>
        </div>

        <div className="pt-[80px]">
          <h1 className="text-center font-bold text-[40px] text-[#4f8ae8]">
            17,000+
          </h1>

          <p className="text-[30px] text-white text-center font-sans xspart">
            Participants Reached Nationally
          </p>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-4 pt-[30px] text-center">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#161F2F] shadow-xl rounded-[12px] md:w-[18vw] w-[43vw] p-3 flex flex-col justify-center items-center new-card"
            >
              <p className="text-[40px] text-[#4388e8] font-bold">
                {item.data}
              </p>

              <p className="text-[#bec4d1] text-[18px] font-inter">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Edition;
