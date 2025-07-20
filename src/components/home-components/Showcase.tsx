import "../../index.css"
import avatar from "./images/avatar.svg"
import calendar from "./images/calendar.svg"
import watch from "./images/watch.svg"

const Showcase = () => {
  return (
    <section className="showcase flex justify-between h-[600px]">
      <div className="left-show w-[50%] flex flex-col items-center justify-end">
        <div className="mb-12 max-w-[500px] text-center">

          <button className="rounded-[5px] mb-4 bg-[#F4796C] font-bold py-2 text-sm text-white px-4 hover:opacity-80 hover:cursor-pointer">FIGHTER</button>
          <h1 className="text-white text-xl font-bold">Mobile Apple Planning Big Mac Redesign
            ander Nigh HalfMacShare</h1>

          <div className="flex justify-center gap-4 text-sm mt-3">
            <div className="flex items-center gap-1">
              <img src={avatar} alt="" />
              <span className="text-white">BY ADMIN</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={calendar} alt="calendar" />
              <span className="text-white">27 August, 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={watch} alt="watch" />
              <span className="text-white">20 MINS</span>
            </div>
          </div>

        </div>
      </div>

      <div className="right-show w-[50%] flex flex-col items-center justify-end">
        <div className="text-center mb-12 max-w-[500px]">

          <button className="rounded-[5px] mb-4 bg-[#F4796C] font-bold py-2 text-sm text-white px-4 hover:opacity-80 hover:cursor-pointer">
            ACTION</button>
          <h1 className="text-white text-xl font-bold">How To Build A Magazine Layout With
            CSS Grid Areas</h1>

          <div className="flex justify-center gap-4 text-sm mt-3">
            <div className="flex items-center gap-1">
              <img src={avatar} alt="" />
              <span className="text-white">BY ADMIN</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={calendar} alt="calendar" />
              <span className="text-white">27 August, 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={watch} alt="watch" />
              <span className="text-white">20 MINS</span>
            </div>
          </div>

        </div>

      </div>
    </section >
  )
}

export default Showcase
