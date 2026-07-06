import React, { useState, useEffect, useRef } from "react";

const BadgeSection = () => {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState(null);

  const badgeCanvas = useRef(null);

  const drawText = (ctx) => {
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 26px Arial";
    ctx.textAlign = "center";
    ctx.fillText(userName || "Your Name", 200, 300);

    ctx.fillStyle = "#13a4e8";
    ctx.font = "20px Arial";
    ctx.fillText("Hackathon 2025", 200, 350);
  };

  const drawBadge = () => {
    const canvas = badgeCanvas.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Background
    ctx.fillStyle = "#1a1a2e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Border
    ctx.strokeStyle = "#13a4e8";
    ctx.lineWidth = 6;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    if (userImage) {
      const img = new Image();

      img.onload = () => {
        ctx.drawImage(img, 100, 60, 200, 200);
        drawText(ctx);
      };

      img.src = userImage;
    } else {
      drawText(ctx);
    }
  };

  useEffect(() => {
    drawBadge();
  }, [userName, userImage]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setUserImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const downloadBadge = () => {
    const canvas = badgeCanvas.current;

    const link = document.createElement("a");
    link.download = "badge.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const shareBadge = async () => {
    const canvas = badgeCanvas.current;

    canvas.toBlob(async (blob) => {
      const file = new File([blob], "badge.png", {
        type: "image/png",
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: "Hackathon Badge",
            text: "Check out my awesome badge!",
          });
        } catch (err) {
          alert("Sharing failed.");
        }
      } else {
        alert("Sharing is not supported on this browser.");
      }
    });
  };

  return (
    <div id="badgesection">
      <div className="min-h-screen bg-gradient-to-r from-[#0b0b0d] via-[#220842] to-[#260e42] p-6 text-white font-sans">
        <h1 className="text-center text-[50px] md:text-[62px] font-bold bg-gradient-to-r from-[#5d4ecf] to-[#13a4e8] bg-clip-text text-transparent">
          Create Your Badge
        </h1>

        <p className="text-center text-[#c2b9b8] pt-2 text-[20px]">
          Generate your personalized hackathon badge and share it with the
          world!
        </p>

        <div className="pt-12 flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="bg-[#21262b] border border-gray-500 p-6 rounded-2xl">
            <canvas
              ref={badgeCanvas}
              className="rounded"
              width={400}
              height={600}
            />
          </div>

          <div className="flex flex-col items-center gap-6">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="p-3 rounded-lg text-white bg-[#53585e] w-[280px] md:w-[300px] outline-none"
            />

            <label className="cursor-pointer bg-gradient-to-r from-[#0f5cbf] to-[#732470] p-3 rounded-xl text-center w-[280px] md:w-[300px]">
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />
              <i className="fa-solid fa-arrow-up-from-bracket mr-2"></i>
              Upload Your Photo
            </label>

            <div className="flex gap-4">
              <button
                onClick={downloadBadge}
                className="bg-[#0f7d2c] px-5 py-3 rounded-xl w-[130px] flex items-center justify-center gap-2 hover:bg-green-700 transition"
              >
                <i className="fa-solid fa-download"></i>
                Download
              </button>

              <button
                onClick={shareBadge}
                className="bg-[#7d0f4d] px-5 py-3 rounded-xl w-[130px] flex items-center justify-center gap-2 hover:bg-pink-800 transition"
              >
                <i className="fa-solid fa-share-from-square"></i>
                Share
              </button>
            </div>

            <p className="bg-[#21262b] p-4 rounded-xl text-center mt-4 text-[18px] font-caveat max-w-[300px]">
              <span className="text-[#15a1d4]">Please Note:</span> There are
              bonus points if all your team members share their badges on social
              media. 😜
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeSection;
