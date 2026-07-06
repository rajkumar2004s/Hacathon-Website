import { useEffect, useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const hackathonStartDate = new Date();
  hackathonStartDate.setMonth(hackathonStartDate.getMonth() + 2);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const distance = hackathonStartDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home">
      <nav className="bg-gradient-to-r from-[#0d111c] to-[#010612]  shadow-xl border-b border-[#b8c2d9] fixed top-0 z-50 w-full h-[12vh] p-4 flex justify-around items-center">
        <div className="flex items-center">
          <div className="flex items-center mr-6">
            <img
              src="https://res.cloudinary.com/dwdekki8t/image/upload/v1754469820/d4ee9718-8691-4028-b074-74cb556c8a8c.png"
              alt="Hack Hazards"
              className="w-[25vw] md:w-[10vw] md:h-[8vh] pr-4 z-10"
            />

            <img
              src="https://res.cloudinary.com/dwdekki8t/image/upload/v1754469799/frame44_qnowhk.png"
              alt="Hack Hazards 2025 Purple Logo"
              className="w-[45vw] md:w-[14vw] md:h-[6vh] pl-2 pr-10"
            />
          </div>

          <div className="hidden md:block">
            <h1 className="text-white font-sans">
              Hacker registration closes in:
            </h1>

            <div className="flex text-white gap-2 text-center pt-2">
              <div className="bg-[#4b0082] p-1 rounded w-10 text-sm">
                {timeLeft.days}d
              </div>

              <div className="bg-[#4b0082] p-1 rounded w-10 text-sm">
                {String(timeLeft.hours).padStart(2, "0")}h
              </div>

              <div className="bg-[#4b0082] p-1 rounded w-10 text-sm">
                {String(timeLeft.minutes).padStart(2, "0")}m
              </div>

              <div className="bg-[#4b0082] p-1 rounded w-10 text-sm">
                {String(timeLeft.seconds).padStart(2, "0")}s
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          <i className="fa-solid fa-bars text-[30px] text-[#3007b8] cursor-pointer z-10"></i>
        </div>

        <div className="hidden md:flex text-white font-inter items-center space-x-5  ">
          <a href="#home" className="nav">
            Home
          </a>

          <a href="#aboutsection" className="nav">
            About
          </a>

          <a href="#2024Editionsection" className="nav">
            2024 Edition
          </a>

          <a href="#themessection" className="nav">
            Themes
          </a>

          <a href="#problemstatementsection" className="nav">
            Problem Statement
          </a>

          <a href="#prizessection" className="nav">
            Prizes
          </a>

          <a href="#schedulesection" className="nav">
            Timeline
          </a>

          <a href="#badgesection" className="nav">
            Badges
          </a>
        </div>
      </nav>

      {showMenu && (
        <div className="md:hidden pt-6 fixed top-[50px] left-0 w-full z-50 transition-all duration-300 ease-in-out">
          <div className="flex flex-col sm:flex-row justify-end font-Roboto text-white bg-gradient-to-r from-gray-900 via-black to-gray-900 font-semibold p-4 space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#aboutsection" onClick={closeMenu}>
              About
            </a>

            <a href="#2024Editionsection" onClick={closeMenu}>
              2024 Edition
            </a>

            <a href="#themessection" onClick={closeMenu}>
              Themes
            </a>

            <a href="#problemstatementsection" onClick={closeMenu}>
              Problem Statement
            </a>

            <a href="#prizessection" onClick={closeMenu}>
              Prizes
            </a>

            <a href="#schedulesection" onClick={closeMenu}>
              Timeline
            </a>

            <a href="#badgesection" onClick={closeMenu}>
              Badges
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
