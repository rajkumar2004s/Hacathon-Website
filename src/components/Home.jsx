function Home() {
  return (
    <div>
      <section className="video w-full mt-6">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover bg"
        >
          <source
            src="https://res.cloudinary.com/dwdekki8t/video/upload/v1744738099/yx1f9p3oqbc16t79t9fa.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="description-card">
          <h1 className="hack pt-4 text-[40px] md:text-[80px] w-full bg-gradient-to-r from-white to-[#891191] bg-clip-text text-transparent font-bold">
            HACKHAZARD'S 25
          </h1>

          <p className="md:text-[35px] text-[20px] mt-4 font-semibold font-sans text-[#bbcca1] para1">
            Build in <span>INDIA</span>, for the World !!
          </p>

          <p className="md:text-[30px] text-[25px] mt-4 font-inter w-full text-[#72bbd6] para2 pt-2">
            India's largest community-run online hackathon
          </p>

          <div className="flex flex-col justify-center items-center mt-12 pt-6">
            <a
              href="https://discord.com/invite/z2fTnXjKMm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#5047EA] md:w-[16vw] w-[34vw] md:h-[8vh] h-[7vh] rounded-[10px] flex justify-center items-center part xsjoin">
                <i className="fab fa-discord mr-[6px] text-white"></i>

                <p className="text-white font-semibold">Join Discord</p>
              </div>
            </a>

            <a
              href="https://hackhazards25.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4"
            >
              <div className="bg-gradient-to-r from-[#4F46E5] to-[#E4405F] mt-4 md:w-[16vw] w-[34vw] md:h-[8vh] h-[7vh] flex justify-center items-center rounded-[10px] part xsdev">
                <img
                  src="https://res.cloudinary.com/dezeyddao/image/upload/v1743195334/devfolio_logo-removebg-preview_1_iviqxc.png"
                  alt="Devfolio"
                  className="w-[50px] h-[35px]"
                />

                <p className="text-white font-semibold">Apply with Devfolio</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
