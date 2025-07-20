import conOne from "./images/weekly/Container-1.svg"
import conTwo from "./images/weekly/Container-2.svg"
import conThree from "./images/weekly/Container-3.svg"
import conFour from "./images/weekly/Container-4.svg"
import conFive from "./images/weekly/Container-5.svg"
import conSix from "./images/weekly/Container-6.svg"
import calendar from "./images/calendar.svg"
import watch from "./images/watch.svg"
import vector from "./images/SVG.svg"

const WeeklyBestNews = () => {
  return (
    <section className="mt-20 px-[15px] py-5">
      <div className="mycon">

        <div className="top-spot flex items-center">
          <div className="w-[70%] flex items-center justify-between">
            <div className="spotlight rounded-[4px] bg-[#F4796C] max-w-[226px] h-10 px-2 py-1 text-white font-bold text-xl">
              <span>Weekly Best News</span>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-y-1">
              <div className="h-[1px] w-full bg-[#6D757F]"></div>
              <div className="h-[1px] w-full bg-[#6D757F]"></div>
            </div>
          </div>

          <div className="w-[30%] flex pl-[55px]">
            <div className="spotlight rounded-[4px] bg-[#F4796C] max-w-[226px] h-10 px-2 py-1 text-white font-bold text-xl">
              <span>Hot News</span>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-y-1">
              <div className="h-[1px] w-full bg-[#6D757F]"></div>
              <div className="h-[1px] w-full bg-[#6D757F]"></div>
            </div>
          </div>
        </div>

        <div className="bottom mt-9 flex justify-between">
          <div className="left-items flex flex-col gap-5 max-w-[70%]">

            <div className="left-items-1 flex gap-x-10">
              <img className="rounded-xl" src={conOne} alt="" />
              <div>
                <button className="font-[Manrope] rounded-md text-white text-[13px] px-2 py-1 bg-[#F4796C]">FIGHTER</button>

                <h1 className="font-bold font-[Manrope] text-[22px] text-[#183354] max-w-[340px] mt-[15px] mb-[15px]">
                  Taking The Stress Out Of Design
                  System Management
                </h1>

                <div className="flex items-center gap-4 mb-[15px]">
                  <div className="flex gap-2">
                    <img src={calendar} alt="calendar" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                  </div>
                  <div className="flex gap-2">
                    <img src={watch} alt="watch" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">20 MINS</span>
                  </div>
                </div>

                <p className="text-base text-[#545E69] max-w-[404px] mb-5">Browned butter and brown sugar caramelly oodness
                  crispy edgesthick and soft centers and melty little
                  puddles of chocolate y first favorite.</p>

                <div className="flex bg-gray-500 max-w-[138px] px-2 py-1 rounded-md gap-2">
                  <button className="text-[14px]  text-white font-semibold">READ MORE</button>
                  <img src={vector} alt="view all icon" />
                </div>

              </div>
            </div>

            <div className="left-items-2 flex gap-x-10">
              <img className="rounded-xl" src={conTwo} alt="" />
              <div>
                <button className="font-[Manrope] rounded-md text-white text-[13px] px-2 py-1 bg-[#F4796C]">RACING</button>

                <h1 className="font-bold font-[Manrope] text-[22px] text-[#183354] max-w-[340px] mt-[15px] mb-[15px]">
                  Taking The Stress Out Of Design
                  System Management
                </h1>

                <div className="flex items-center gap-4 mb-[15px]">
                  <div className="flex gap-2">
                    <img src={calendar} alt="calendar" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                  </div>
                  <div className="flex gap-2">
                    <img src={watch} alt="watch" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">20 MINS</span>
                  </div>
                </div>

                <p className="text-base text-[#545E69] max-w-[404px] mb-5">Browned butter and brown sugar caramelly oodness
                  crispy edgesthick and soft centers and melty little
                  puddles of chocolate y first favorite.</p>

                <div className="flex bg-gray-500 max-w-[138px] px-2 py-1 rounded-md gap-2">
                  <button className="text-[14px]  text-white font-semibold">READ MORE</button>
                  <img src={vector} alt="view all icon" />
                </div>
              </div>

            </div>

            <div className="left-items-3 flex gap-x-10">


              <img className="rounded-xl" src={conThree} alt="" />
              <div>
                <button className="font-[Manrope] rounded-md text-white text-[13px] px-2 py-1 bg-[#F4796C]">ACTION</button>

                <h1 className="font-bold font-[Manrope] text-[22px] text-[#183354] max-w-[340px] mt-[15px] mb-[15px]">
                  Taking The Stress Out Of Design
                  System Management
                </h1>

                <div className="flex items-center gap-4 mb-[15px]">
                  <div className="flex gap-2">
                    <img src={calendar} alt="calendar" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                  </div>
                  <div className="flex gap-2">
                    <img src={watch} alt="watch" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">20 MINS</span>
                  </div>
                </div>

                <p className="text-base text-[#545E69] max-w-[404px] mb-5">Browned butter and brown sugar caramelly oodness
                  crispy edgesthick and soft centers and melty little
                  puddles of chocolate y first favorite.</p>

                <div className="flex bg-gray-500 max-w-[138px] px-2 py-1 rounded-md gap-2">
                  <button className="text-[14px]  text-white font-semibold">READ MORE</button>
                  <img src={vector} alt="view all icon" />
                </div>
              </div>

            </div>


            <div className="left-items-4 flex gap-x-10">

              <img className="rounded-xl" src={conFour} alt="" />
              <div>
                <button className="font-[Manrope] rounded-md text-white text-[13px] px-2 py-1 bg-[#F4796C]">ANIMATION</button>

                <h1 className="font-bold font-[Manrope] text-[22px] text-[#183354] max-w-[340px] mt-[15px] mb-[15px]">
                  Taking The Stress Out Of Design
                  System Management
                </h1>

                <div className="flex items-center gap-4 mb-[15px]">
                  <div className="flex gap-2">
                    <img src={calendar} alt="calendar" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                  </div>
                  <div className="flex gap-2">
                    <img src={watch} alt="watch" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">20 MINS</span>
                  </div>
                </div>

                <p className="text-base text-[#545E69] max-w-[404px] mb-5">Browned butter and brown sugar caramelly oodness
                  crispy edgesthick and soft centers and melty little
                  puddles of chocolate y first favorite.</p>

                <div className="flex bg-gray-500 max-w-[138px] px-2 py-1 rounded-md gap-2">
                  <button className="text-[14px]  text-white font-semibold">READ MORE</button>
                  <img src={vector} alt="view all icon" />
                </div>

              </div>
            </div>
          </div>

          <div className="right-items max-w-[30%]">
            <img className="mb-6" src={conFive} alt="" />

            <button className="font-[Manrope] rounded-md text-[#6D757F] mb-2 text-[13px] px-2 py-1 border-2 border-gray-600">FIGHTER</button>

            <p className="font-bold text-xl text-[#183354] font-[Manrope] max-w-[325px]">Racing Games Browned Buttadert
              Cookies Daily Breakfast</p>

            <div className="flex items-center gap-4 mt-[15px] mb-7">
              <div className="flex gap-2">
                <img src={calendar} alt="calendar" />
                <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
              </div>
              <div className="flex gap-2">
                <img src={watch} alt="watch" />
                <span className="text-[#6D757F] font-semibold text-[13px]">20 MINS</span>
              </div>
            </div>


            <button className="font-[Manrope] rounded-md text-[#6D757F] mb-2 text-[13px] px-2 py-1 border-2 border-gray-600">ACTION</button>

            <p className="font-bold text-xl text-[#183354] font-[Manrope] max-w-[325px]">Racing Games Browned Buttadert
              Cookies Daily Breakfast</p>

            <div className="flex items-center gap-4 mt-[15px] mb-7">
              <div className="flex gap-2">
                <img src={calendar} alt="calendar" />
                <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
              </div>
              <div className="flex gap-2">
                <img src={watch} alt="watch" />
                <span className="text-[#6D757F] font-semibold text-[13px]">20 MINS</span>
              </div>
            </div>


            <button className="font-[Manrope] rounded-md text-[#6D757F] mb-2 text-[13px] px-2 py-1 border-2 border-gray-600">STORY</button>

            <p className="font-bold text-xl text-[#183354] font-[Manrope] max-w-[325px]">Racing Games Browned Buttadert
              Cookies Daily Breakfast</p>

            <div className="flex items-center gap-4 mt-[15px] mb-[50px]">
              <div className="flex gap-2">
                <img src={calendar} alt="calendar" />
                <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
              </div>
              <div className="flex gap-2">
                <img src={watch} alt="watch" />
                <span className="text-[#6D757F] font-semibold text-[13px]">20 MINS</span>
              </div>
            </div>

            <img src={conSix} alt="" />

          </div>

        </div>
      </div>
    </section>
  )
}

export default WeeklyBestNews
