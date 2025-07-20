import vector from "./images/SVG.svg"
import avatar from "./images/avatar.svg"
import calendar from "./images/calendar.svg"
import watch from "./images/watch.svg"

const TrendingGamingNews = () => {
  return (
    <section className="bg-[#253346] mt-[70px] pb-30 pt-30">
      <div className="mycon">

        {/* Top Section */}
        <div className="top-part flex items-center">
          <div className="w-[70%] flex items-center flex-grow justify-between">
            <div className="spotlight rounded-[4px] bg-[#F4796C] max-w-[356px] h-10 px-2 py-1 text-white font-bold text-xl">
              <span>Trending Gaming News</span>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-y-1">
              <div className="h-[1px] w-full bg-[#6D757F]"></div>
              <div className="h-[1px] w-full bg-[#6D757F]"></div>
            </div>

            <div className="flex bg-gray-500 px-2 py-1 rounded-md ml-5 gap-2">
              <button className="text-[14px] text-white font-semibold">VIEW ALL</button>
              <img src={vector} alt="view all icon" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-part mt-10 flex justify-between gap-8">
          {/* Left */}
          <div className="left mb-[30px]">
            <iframe
              className="w-[630px] h-[380px]"
              width="994"
              height="561"
              src="https://www.youtube.com/embed/l-oo9DJfH_k"
              title="Battlefield 2042 Trailer - F-35 fighter jet scene"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <button className="text-white mt-[22px] font-bold px-2 py-1 bg-[gray] rounded-md">FIGHTER</button>
            <h1 className="font-[Manrope] font-bold text-[28px] mt-[14px] text-white max-w-[556px]">
              Exciting New Browned Chocolate Gaming Cookies Daily Breakfast
            </h1>

            <div className="flex gap-3 items-center mt-[14px] mb-[30px]">
              <div className="flex items-center gap-2">
                <img src={avatar} alt="avatar" />
                <span className="text-[#6D757F] font-semibold text-[13px]">BY ADMIN</span>
              </div>
              <div className="flex gap-2">
                <img src={calendar} alt="calendar" />
                <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
              </div>
              <div className="flex gap-2">
                <img src={watch} alt="watch" />
                <span className="text-[#6D757F] font-semibold text-[13px]">20 MINS</span>
              </div>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="vertical-line w-[2px] bg-gray-600 h-[540px]"></div>

          {/* Right */}
          <div className="right-part flex flex-col gap-10">
            <div className="flex gap-8">
              <iframe
                className="rounded-xl"
                width="190"
                height="160"
                src="https://www.youtube.com/embed/ASzOzrB-a9E"
                title="Battlefield 2042 Official Reveal Trailer (ft. 2WEI)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>

              <div>
                <button className="text-white mt-[22px] font-bold text-[13px] px-2 py-1 bg-[gray] rounded-md">FIGHTER</button>
                <h1 className="font-[Manrope] font-bold text-[22px] mt-[14px] text-white max-w-[556px]">
                  Exciting New Browned Chocolate Gaming Cookies Daily Breakfast
                </h1>

                <div className="flex gap-3 items-center mt-[10px] mb-[30px]">
                  <div className="flex items-center gap-2">
                    <img src={avatar} alt="avatar" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">BY ADMIN</span>
                  </div>
                  <div className="flex gap-2">
                    <img src={calendar} alt="calendar" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                  </div>
                  <div className="flex gap-2">
                    <img src={watch} alt="watch" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">20 MINS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 2 */}
            <div className="flex gap-8">
              <iframe className="rounded-xl" width="190" height="160"
                src="https://www.youtube.com/embed/_fG1MlW6L8E"
                title="The Best PILOT takedown in Battlefield 2042.."
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
              </iframe>

              <div>
                <button className="text-white mt-[22px] font-bold text-[13px] px-2 py-1 bg-[gray] rounded-md">ACTION</button>
                <h1 className="font-[Manrope] font-bold text-[22px] mt-[14px] text-white max-w-[556px]">
                  Exciting New Browned Chocolate Gaming Cookies Daily Breakfast
                </h1>

                <div className="flex gap-3 items-center mt-[10px] mb-[30px]">
                  <div className="flex items-center gap-2">
                    <img src={avatar} alt="avatar" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">BY ADMIN</span>
                  </div>
                  <div className="flex gap-2">
                    <img src={calendar} alt="calendar" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                  </div>
                  <div className="flex gap-2">
                    <img src={watch} alt="watch" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">20 MINS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 3 */}
            <div className="flex gap-8">
              <iframe className="rounded-xl" width="190" height="160"
                src="https://www.youtube.com/embed/WomAGoEh-Ss"
                title="Battlefield 2042 Official Gameplay Trailer"
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>

              <div>
                <button className="text-white mt-[22px] font-bold text-[13px] px-2 py-1 bg-[gray] rounded-md">ANIMATION</button>
                <h1 className="font-[Manrope] font-bold text-[22px] mt-[14px] text-white max-w-[556px]">
                  Exciting New Browned Chocolate Gaming Cookies Daily Breakfast
                </h1>

                <div className="flex gap-3 items-center mt-[10px] mb-[30px]">
                  <div className="flex items-center gap-2">
                    <img src={avatar} alt="avatar" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">BY ADMIN</span>
                  </div>
                  <div className="flex gap-2">
                    <img src={calendar} alt="calendar" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                  </div>
                  <div className="flex gap-2">
                    <img src={watch} alt="watch" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">20 MINS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default TrendingGamingNews
