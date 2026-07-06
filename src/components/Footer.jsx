import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#182533] to-[#030d1a] p-6">
      <div className="grid grid-cols-1 md:flex md:flex-row justify-around pt-8">

        <div>
          <h1 className="bg-gradient-to-r from-[#0f63d1] via-[#8115d4] via-[#941c8c] via-[#8115d4] to-[#0f63d1] bg-clip-text text-transparent text-[40px] md:text-[60px] text-center font-bold">
            HACKHAZARDS
          </h1>

          <p className="text-white font-caveat text-[24px] pt-2 pb-6 font-semibold text-center px-[2px]">
            Build in India, for the world.!
          </p>
        </div>

  
        <div>
          <div className="flex flex-col justify-center items-center mt-4 gap-4">
            <a
              href="https://discord.com/invite/z2fTnXjKMm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#5047EA] md:w-[16vw] w-[35vw] text-white h-[8vh] rounded-[10px] flex justify-center items-center hover:bg-transparent hover:border-2 hover:border-[#5047EA] gap-2 hover:text-[#5047EA] transition-all">
                <i className="fab fa-discord mr-[3px]"></i>
                <p className="font-semibold font-[GG Sans]">Join Discord</p>
              </div>
            </a>

            <a
              href="https://hackhazards25.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#bf5ad6] text-white mt-4 w-[40vw] md:w-[16vw] h-[8vh] rounded-[10px] flex justify-center items-center hover:bg-transparent hover:border-2 hover:border-white hover:text-[#E4405F] transition-all">
                <img
                  src="https://res.cloudinary.com/dezeyddao/image/upload/v1743195334/devfolio_logo-removebg-preview_1_iviqxc.png"
                  alt="Devfolio"
                  className="w-[50px] h-[35px]"
                />
                <p className="font-semibold font-[GG Sans] text-white">
                  Apply with Devfolio
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-4">
        <hr className="mt-12 w-[80vw] border-gray-500" />
      </div>

      <div className="grid grid-cols-1 md:flex md:flex-row justify-around pt-6">
        <div>
          <p className="text-white font-inter font-bold text-[26px] text-center md:text-start">
            The NAMESPACE Community
          </p>
        </div>

        <div className="flex justify-center gap-4 md:pt-0 pt-4 mt-6 md:mt-0">
          <a
            href="https://www.youtube.com/@namespacecomm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube text-white text-2xl part"></i>
          </a>

          <a
            href="https://x.com/RBhootla86833?t=CxUvyLeiUC9AxjaaD4jrQw&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter text-white text-2xl part"></i>
          </a>

          <a
            href="https://www.instagram.com/sh1.rajuuhh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram text-white text-2xl part"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/raju03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin text-white text-2xl part"></i>
          </a>

          <a
            href="https://github.com/rajkumar2004s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github text-white text-2xl part"></i>
          </a>

          <a
            href="https://discord.com/invite/z2fTnXjKMm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-discord text-white text-2xl part"></i>
          </a>
        </div>
      </div>

      <p className="text-[16px] text-center text-[#8195b5] font-inter pt-8">
        &copy; 2022 - 2025 The NAMESPACE Community.
      </p>
    </footer>
  );
};

export default Footer;
