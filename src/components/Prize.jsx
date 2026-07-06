import { FaIndianRupeeSign, FaPaw, FaTrophy } from "react-icons/fa6";

import { prizeCards, nationalWinners, benefitsCard } from "../data/prizesData";

const Prizes = () => {
  return (
    <section id="prizessection">
      <div className="bg-gradient-to-r from-[#000000] to-[#132545] min-h-screen p-8">
        <div className="pt-10">
          <h1 className="prize text-center text-[40px] md:text-[80px] font-bold bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent">
            Prizes & Rewards
          </h1>

          <p className="text-center text-[#c2b9b8] text-[23px]">
            Recognizing and rewarding innovation across all
          </p>

          <p className="text-center text-[#c2b9b8] text-[23px]">dimensions</p>
        </div>

        <div className="pt-8 flex justify-center items-center p-4">
          <div className="bg-[#161F2F] shadow-xl rounded-[20px] md:w-[80vw] w-[90vw] p-8 flex flex-col justify-center items-center border border-gray-500">
            <h3 className="bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent text-[40px] font-bold text-center">
              Unleash Your Potential
            </h3>

            <p className="text-center text-[#bcc2e8] text-[20px] md:text-[24px] pt-2">
              Massive Rewards Await : Over{" "}
              <span className="font-bold text-[#207be3]">
                <FaIndianRupeeSign className="inline mr-2" />
                8.5 Lakh
              </span>{" "}
              in Cash, Swags and Track Prizes for
            </p>

            <p className="text-center text-[#bcc2e8] text-[20px] md:text-[24px] pt-2">
              the Winners and{" "}
              <span className="font-bold text-[#207be3]">$250,000</span> in
              Benefits for All Participants to Fuel Your
            </p>

            <p className="text-center text-[#bcc2e8] text-[20px] md:text-[24px] pt-2">
              Innovation
            </p>

            <div className="pt-8 md:flex gap-4 p-4 m-4">
              {prizeCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.id}
                    className="part bg-[radial-gradient(#022854,#030508)] rounded-[10px] border border-gray-500 md:w-[24vw] md:h-[40vh] w-[60vw]  p-3 flex flex-col items-center justify-center"
                  >
                    <div
                      className={`bg-gradient-to-r ${card.gradient} w-20 h-20 rounded-full flex justify-center items-center`}
                    >
                      <Icon className="text-white text-3xl" />
                    </div>

                    <p className="font-bold text-[30px] text-white pt-2">
                      {card.amount.includes("$") ? (
                        card.amount
                      ) : (
                        <>
                          <FaIndianRupeeSign className="inline mr-1" />
                          {card.amount}
                        </>
                      )}
                    </p>

                    <p className="font-bold text-[25px] text-[#0d80de] pt-1">
                      {card.title}
                    </p>

                    <p className="text-[18px] text-[#99a3ad] text-center pt-2">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="bg-[radial-gradient(#022854,#030508)] rounded-[10px] border border-gray-500 w-full md:w-[74vw] md:h-[40vh] p-4 flex flex-col items-center justify-center part">
              {(() => {
                const Icon = benefitsCard.icon;

                return (
                  <>
                    <div className="bg-gradient-to-r from-[#80a653] to-[#121f02] w-20 h-20 rounded-full flex justify-center items-center">
                      <Icon className="text-white text-3xl" />
                    </div>

                    <p className="font-bold text-[30px] text-white pt-2">
                      {benefitsCard.amount}
                    </p>

                    <p className="font-bold text-[25px] text-[#0d80de] pt-1">
                      {benefitsCard.title}
                    </p>

                    <p className="text-[18px] text-[#99a3ad] text-center pt-2">
                      {benefitsCard.description}
                    </p>

                    <h3 className="bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent text-[20px] md:text-[30px] font-bold text-center pt-4">
                      Over{" "}
                      <FaIndianRupeeSign className="inline text-[20px] md:text-2xl" />{" "}
                      2.1 Crore in Digital Credits, Vouchers and Benefits
                    </h3>
                  </>
                );
              })()}
            </div>
          </div>
        </div>

        <h3 className="bg-gradient-to-r from-[#1567eb] to-[#E680FF] bg-clip-text text-transparent text-center text-[30px] md:text-[35px] font-bold pt-4">
          National Winners of HACKHAZARDS'25
        </h3>

        <div className="pt-8 md:flex grid grid-cols-1 items-center justify-center gap-4 p-4 m-4">
          {nationalWinners.map((winner) => (
            <div
              key={winner.id}
              className="trophy rounded-[10px] w-full md:w-[24vw] h-[40vh] p-3 flex flex-col items-center justify-center"
            >
              <div className="trophy-icon bg-gradient-to-r from-[#0591a3] to-[#ae65f7] w-20 h-20 rounded-full flex justify-center items-center relative">
                <div className="absolute top-0 right-0">
                  <p className="bg-white rounded-full w-[30px] text-center">
                    {winner.rank}
                  </p>
                </div>

                <FaTrophy className="text-white text-3xl" />
              </div>

              <p className="font-bold text-[30px] text-white pt-2">
                <FaIndianRupeeSign className="inline mr-1" />
                {winner.amount}
              </p>

              <p className="font-bold text-[25px] text-[#0d80de] pt-1">
                {winner.title}
              </p>

              <p className="text-[18px] text-[#99a3ad] text-center pt-2">
                {winner.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center pt-6">
          <div className="bg-[radial-gradient(#12263d,#050508)] rounded-[20px] border border-gray-500 w-full md:w-[50vw] md:h-[50vh] h-[60vh] p-4 flex flex-col items-center justify-center">
            <div className="paws">
              <FaPaw className="text-[50px] text-[#2472f0]" />
            </div>

            <h3 className="bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent text-center text-[30px] md:text-[40px] font-bold pt-4">
              T-shirts Worth ₹2,00,000
            </h3>

            <p className="text-[#7eabd9] font-semibold text-center md:text-[23px] text-[19px] pt-3">
              Exclusive brand T-shirts will be distributed to the top
            </p>

            <p className="text-[#7eabd9] font-semibold text-center md:text-[23px] text-[19px] pt-2">
              100 teams participating in HACKHAZARDS'25 !!
            </p>

            <div className="pt-5">
              <button className="bg-gradient-to-r from-[#4287f5] to-[#55388f] md:px-8 px-6 py-4 rounded-full font-bold text-white hover:scale-105 duration-300">
                Top 100 Teams Eligible
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
