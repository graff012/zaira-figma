import calendar from "./images/calendar.svg"
import watch from "./images/watch.svg"
import categorySix from "./images/popular-news/Container-6.svg"
import categorySeven from "./images/popular-news/Container-7.svg"
import categoryEight from "./images/popular-news/Container-8.svg"
import categoryNine from "./images/popular-news/Container-9.svg"
import categoryTen from "./images/popular-news/Container-10.svg"

const PopularNews = () => {
  return (
    <section className="mt-[50px]">
      <div className="mycon">
        <div className="top-part flex items-center">
          <div className="w-[70%] flex items-center flex-grow justify-between">
            <div className="spotlight rounded-[4px] bg-[#F4796C] max-w-[226px] h-10 px-2 py-1 text-white font-bold text-xl">
              <span>Our Popular News</span>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-y-1">
              <div className="h-[1px] w-full bg-[#6D757F]"></div>
              <div className="h-[1px] w-full bg-[#6D757F]"></div>
            </div>
          </div>

          <div className="w-[30%] flex pl-[55px]">
            <div className="spotlight rounded-[4px] bg-[#F4796C] max-w-[226px] h-10 px-2 py-1 text-white font-bold text-xl">
              <span>Recent Posts</span>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-y-1">
              <div className="h-[1px] w-full bg-[#6D757F]"></div>
              <div className="h-[1px] w-full bg-[#6D757F]"></div>
            </div>
          </div>
        </div>

        <div className="bottom-part flex justify-between  mt-[30px]">
          <div className="left-pop max-w-[70%]">
            <div className="toples flex justify-between">
              <div className="racing pl-[30px] w-[440px] h-[300px]">
                <div className="flex flex-col mt-[146px]">

                  <div className="bg-[gray] max-w-[73px] rounded-md flex justify-center items-center">
                    <button className="text-[13px] font-semibold   font-[Manrope] px-2 py-1 text-white">RACING</button>
                  </div>

                  <h1 className="text-xl font-bold mt-[14px] text-white">Racing Games Browned Butte roadert
                    Cookies Daily Breakfast</h1>

                  <div className="flex gap-7 items-center mt-[15px]">
                    <div className="flex gap-2">
                      <img src={calendar} alt="avatar" />
                      <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                    </div>

                    <div className="flex gap-2">
                      <img src={watch} alt="avatar" />
                      <span className="text-[#6D757F] font-semibold text-[13px]">20 MINS</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="action pl-[30px] w-[440px]">
                <div className="flex flex-col mt-[146px]">

                  <div className="bg-[gray] max-w-[73px] rounded-md flex justify-center items-center">
                    <button className="text-[13px] font-semibold   font-[Manrope] px-2 py-1 text-white">ACTION</button>
                  </div>

                  <h1 className="text-xl font-bold mt-[14px] text-white">How To Host A WordPress Site On
                    Amazon Lightsail</h1>

                  <div className="flex gap-7 items-center mt-[15px]">
                    <div className="flex gap-2">
                      <img src={calendar} alt="avatar" />
                      <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                    </div>

                    <div className="flex gap-2">
                      <img src={watch} alt="avatar" />
                      <span className="text-[#6D757F] font-semibold text-[13px]">20 MINS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-bot flex  mt-10 justify-between">

              <div className="fighter rounded-md pl-[30px] w-[290px] h-[300px]">

                <div className="flex flex-col mt-[146px]">

                  <div className="bg-[gray] max-w-[73px] rounded-md flex justify-center items-center">
                    <button className="text-[13px] font-semibold   font-[Manrope] px-2 py-1 text-white">FIGHTER</button>
                  </div>

                  <h1 className="text-xl font-bold mt-[14px] text-white">The Magic Of February
                    2024 Wallpapers</h1>

                  <div className="flex gap-7 items-center mt-[15px]">
                    <div className="flex gap-2">
                      <img src={calendar} alt="avatar" />
                      <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                    </div>

                  </div>
                </div>
              </div>

              <div className="animation rounded-md w-[290px] h-[300px] pl-[30px]">

                <div className="flex flex-col mt-[146px]">

                  <div className="bg-[gray] max-w-[73px] rounded-md flex justify-center items-center">
                    <button className="text-[13px] font-semibold   font-[Manrope] px-2 py-1 text-white">ANIMATION</button>
                  </div>

                  <h1 className="text-xl font-bold mt-[14px] text-white">Customization And
                    Animation</h1>

                  <div className="flex gap-7 items-center mt-[15px]">
                    <div className="flex gap-2">
                      <img src={calendar} alt="avatar" />
                      <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                    </div>

                  </div>
                </div>
              </div>

              <div className="story rounded-md w-[290px] h-[300px] pl-[30px]">

                <div className="flex flex-col mt-[146px]">

                  <div className="bg-[gray] w-[73px] rounded-md flex justify-center items-center">
                    <button className="text-[13px] font-semibold   font-[Manrope] px-2 py-1 text-white">STORY</button>
                  </div>

                  <h1 className="text-xl font-bold mt-[14px] text-white">Better ROI For Your
                    Digital Products</h1>

                  <div className="flex gap-7 items-center mt-[15px]">
                    <div className="flex gap-2">
                      <img src={calendar} alt="avatar" />
                      <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="right-pop w-[26%] flex flex-col justify-between">

            <div className="item-1 flex gap-4">
              <img src={categorySix} className="" />
              <div>
                <button className="text-[#6D757F] mt-2 font-semibold text-[13px] px-4 py-[2px] border-2 rounded-sm border-[#6D757F]">ACTION</button>
                <h1 className="mt-2">The Butter Chocolate
                  Cookies Daily</h1>

                <div className="flex gap-2">
                  <img src={calendar} alt="avatar" />
                  <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                </div>
              </div>

            </div>

            <div className="item-2 flex gap-4">
              <img src={categorySeven} className="" />
              <div>
                <button className="text-[#6D757F] font-semibold text-[13px] px-4 py-[2px] border-2 rounded-sm border-[#6D757F]">STORY</button>
                <h1>The Butter Chocolate
                  Cookies Daily</h1>

                <div className="flex gap-2">
                  <img src={calendar} alt="avatar" />
                  <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                </div>
              </div>
            </div>

            <div className="item-3 flex gap-4">
              <img src={categoryEight} className="" />
              <div>
                <button className="text-[#6D757F] font-semibold text-[13px] px-4 py-[2px] border-2 rounded-sm border-[#6D757F]">ANIMATION</button>
                <h1>The Butter Chocolate
                  Cookies Daily</h1>

                <div className="flex gap-2">
                  <img src={calendar} alt="avatar" />
                  <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                </div>
              </div>
            </div>

            <div className="item-4 flex gap-4">
              <img src={categoryNine} className="" />
              <div>
                <button className="text-[#6D757F] font-semibold text-[13px] px-4 py-[2px] border-2 rounded-sm border-[#6D757F]">FIGHTER</button>
                <h1>The Butter Chocolate
                  Cookies Daily</h1>

                <div className="flex gap-2">
                  <img src={calendar} alt="avatar" />
                  <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                </div>
              </div>
            </div>

            <div className="item-5 flex gap-4">
              <img src={categoryTen} className="" />
              <div>
                <button className="text-[#6D757F] font-semibold text-[13px] px-4 py-[2px] border-2 rounded-sm border-[#6D757F]">RACING</button>
                <h1>The Butter Chocolate
                  Cookies Daily</h1>

                <div className="flex gap-2">
                  <img src={calendar} alt="avatar" />
                  <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularNews
