import hackathonData from "../data/hackathonData.js";

function About() {
  return (
    <div id="aboutsection">
      <div className="bg-[#0D1320] flex min-h-screen p-4 flex-col items-center">
        <h1 className="abouthack p-[42px] md:text-[60px] text-[50px] font-bold text-center bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent">
          About HACKHAZARDS
        </h1>

        <div className="pl-12 md:pl-0">
          <div className="pb-4">
            <div className="bg-[#161F2F] w-[90%] md:w-[80vw] p-[28px] shadow-xl border border-purple-900 rounded-[30px] card1">
              <p className="text-white text-center font-bold text-[25px]">
                A fully-digital 210-hour long beginner-friendly hackathon
              </p>
            </div>
          </div>

          <div className="pb-4">
            <div className="bg-[#161F2F] mt-[40px] w-[90%] md:w-[80vw] p-[28px] shadow-xl rounded-[20px] border border-gray-500 card1">
              <p className="text-white text-center text-[25px] xsdec">
                HACKHAZARDS is India's premier national-level hackathon, a
                celebration of innovation and technological excellence. It
                stands as a testament to the incredible tech talent flourishing
                across our nation, bringing together the brightest minds from
                every corner of India to forge solutions that resonate globally.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-[30px]">
          {hackathonData.map((item) => (
            <div
              key={item.name}
              className="bg-[#161F2F] shadow-xl rounded-[20px] p-4 flex md:w-[39vw] w-[90vw] border border-gray-500 card1"
            >
              <img src={item.imgUrl} alt={item.name} className="w-26 h-24" />

              <div className="pt-[20px] ml-4">
                <h3 className="text-white text-[22px] font-bold">
                  {item.name}
                </h3>

                <p className="text-[#bec4d1] text-[18px] font-semibold">
                  {item.data}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <div className="mt-[70px] w-[80vw] p-[30px] shadow-xl rounded-[20px] border border-gray-500">
            <p className="bg-gradient-to-r from-[#8A8DFF] to-[#E680FF] bg-clip-text text-transparent text-center font-bold text-[38px] xshaz">
              HACKHAZARDS'25 celebrates India, its developers, and their spirit
              of innovation.
            </p>

            <p className="text-[50px] text-center bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent rounded-[50px]">
              ______
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
