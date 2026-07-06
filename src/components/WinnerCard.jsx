const WinnerCard = ({ rank, amount, title, description }) => {
  return (
    <div className="rounded-[10px] w-full md:w-[24vw] h-[40vh] p-3 flex flex-col items-center justify-center trophy">

      <div className="bg-gradient-to-r from-[#0591a3] to-[#ae65f7] w-20 h-20 rounded-full flex justify-center items-center relative trophy-icon">

        <div className="absolute top-0 right-0">
          <p className="bg-white rounded-full w-[30px] text-center">
            {rank}
          </p>
        </div>

        <i className="fa-solid fa-trophy text-white text-2xl"></i>

      </div>

      <p className="font-bold text-[30px] text-white pt-2">
        <i className="fa-solid fa-indian-rupee-sign mr-1"></i>
        {amount}
      </p>

      <p className="font-bold text-[25px] text-[#0d80de]">
        {title}
      </p>

      <p className="text-[#99a3ad] text-center">
        {description}
      </p>

    </div>
  );
};

export default WinnerCard;