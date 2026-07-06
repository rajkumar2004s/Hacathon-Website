const RewardCard = ({ icon, amount, title, description }) => {
  return (
    <div className="x bg-[radial-gradient(#022854,#030508)] rounded-[10px] border border-gray-500 md:w-[24vw] md:h-[40vh] w-[80vw] mt-5 md:mt-0 p-3 flex flex-col items-center justify-center part">

      <div className="bg-gradient-to-r from-[#80a653] to-[#121f02] w-20 h-20 rounded-full flex justify-center items-center">
        <i className={`fa-solid ${icon} text-white text-2xl`} />
      </div>

      <p className="font-bold text-[30px] text-white pt-2">
        {icon === "fa-indian-rupee-sign" && (
          <i className="fa-solid fa-indian-rupee-sign mr-1"></i>
        )}
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

export default RewardCard;