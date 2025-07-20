import Car from "./images/spotlight/Container.svg"
import avatar from "./images/avatar.svg"
import calendar from "./images/calendar.svg"
import watch from "./images/watch.svg"
import middleOne from "./images/spotlight/middle-1.svg"
import middleTwo from "./images/spotlight/middle-2.svg"
import killYou from "./images/spotlight/kill-you.svg"
import vector from "./images/spotlight/Button → SVG-2.svg"
import message from "./images/spotlight/message.svg"
import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const TodaysSpotlight = () => {
  return (
    <section className="mt-[70px]">
      <div className="mycon">

        <div className="top-spot flex items-center">
          <div className="w-[70%] flex items-center justify-between">
            <div className="spotlight rounded-[4px] bg-[#F4796C] max-w-[226px] h-10 px-2 py-1 text-white font-bold text-xl">
              <span>Today's Spotlight</span>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-y-1">
              <div className="h-[1px] w-full bg-[#6D757F]"></div>
              <div className="h-[1px] w-full bg-[#6D757F]"></div>
            </div>
          </div>

          <div className="w-[30%] flex pl-[55px]">
            <div className="spotlight rounded-[4px] bg-[#F4796C] max-w-[226px] h-10 px-2 py-1 text-white font-bold text-xl">
              <span>Follow Us</span>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-y-1">
              <div className="h-[1px] w-full bg-[#6D757F]"></div>
              <div className="h-[1px] w-full bg-[#6D757F]"></div>
            </div>
          </div>

        </div>

        <div className="flex justify-between">

          <div className="bottom-spot mt-[30px] flex justify-between w-[70%]">
            <div className="b-left-spot">
              <img src={Car} alt="" />
              <button className="text-[#6D757F] border-2 border-[#B8C1CD] px-3 mt-[23px] font-semibold py-1 rounded-md text-base">RACING</button>
              <h1 className="mag-layout mt-2 text-[#183354] text-[28px] max-w-[430px] font-bold">How To Build A Magazine Layout
                With CSS Grid Areas</h1>
              <div className="flex gap-3 items-center mt-2">
                <div className="flex items-center gap-2">
                  <img src={avatar} alt="avatar" />
                  <span className="text-[#6D757F] font-semibold text-[13px]">BY ADMIN</span>
                </div>

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

            <div className="b-mid-spot flex flex-col justify-between">
              <div className="flex gap-7">
                <div className="flex flex-col items-start">
                  <button
                    className="font-semibold text-[13px] text-[#6D757F] border-2 border-[#B8C1CD] px-2 py-1 rounded-md
                  hover:cursor-pointer hover:opacity-90">ACTION
                  </button>
                  <span className="font-[Manrope] text-xl font-bold text-[#183354] max-w-[194px]">Fortnite Ratings are
                    Skyrocketing</span>
                  <div className="flex gap-2 items-center mt-[10px]">
                    <img src={calendar} alt="calendar" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                  </div>
                </div>
                <img src={middleOne} />
              </div>

              <div className="flex gap-7">
                <div className="flex flex-col items-start">
                  <button
                    className="font-semibold text-[13px] text-[#6D757F] border-2 border-[#B8C1CD] px-2 py-1 rounded-md
                  hover:cursor-pointer hover:opacity-90">FIGHTER
                  </button>
                  <span className="font-[Manrope] text-xl font-bold text-[#183354] max-w-[194px]">Everything You Need
                    To Know About</span>
                  <div className="flex gap-2 items-center mt-[10px]">
                    <img src={calendar} alt="calendar" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                  </div>
                </div>
                <img src={middleTwo} />
              </div>

              <div className="flex gap-7">
                <div className="flex flex-col items-start">
                  <button
                    className="font-semibold text-[13px] text-[#6D757F] border-2 border-[#B8C1CD] px-2 py-1 rounded-md
                  hover:cursor-pointer hover:opacity-90">GAMING
                  </button>
                  <span className="font-[Manrope] text-xl font-bold text-[#183354] max-w-[194px]">We Can’t Wait to Try
                    This Gaming Area</span>
                  <div className="flex gap-2 items-center mt-[10px]">
                    <img src={calendar} alt="calendar" />
                    <span className="text-[#6D757F] font-semibold text-[13px]">27 AUGUST, 2024</span>
                  </div>
                </div>
                <img src={killYou} />
              </div>
            </div>


          </div>

          <div className="b-right-spot w-[26%] mt-[30px]">
            <div className="top grid grid-cols-2 grid-rows-3 gap-1">
              <div className="cards">
                <Link className="flex items-center justify-center py-3 gap-2" to="/">
                  <FaFacebookF />
                  <span>Facebook</span>
                </Link>
              </div>

              <div className="cards">
                <Link to="/" className="flex py-3 items-center justify-center gap-2">
                  <FaTwitter />
                  <span>Twitter</span>
                </Link>
              </div>

              <div className="cards">
                <Link to="/" className="flex py-3 items-center justify-center gap-2">
                  <FaInstagram />
                  <span>Instagram</span>
                </Link>
              </div>

              <div className="cards">
                <Link to="/" className="flex py-3 items-center justify-center gap-2">
                  <FaYoutube />
                  <span>YouTube</span>
                </Link>
              </div>

              <div className="cards">
                <Link to="/" className="flex py-3 items-center justify-center gap-2">
                  <FaLinkedin />
                  <span>Linkedin</span>
                </Link>
              </div>

              <div className="cards">
                <Link to="/" className="py-3 flex items-center justify-center gap-2">
                  <FaPinterestP />
                  <span>Pinterest</span>
                </Link>
              </div>
            </div>

            <div className="bottom h-auto relative pt-[50px] bg-[#183354] mt-8 flex flex-col justify-center items-center rounded-md">

              <img src={message} className="absolute top-10 opacity-10" />
              <h1 className="font-[Manrope] text-2xl font-extrabold text-white">Daily Newsletter</h1>
              <p className="my-6 leading-7 text-white font-medium text-base text-center">Get all the top stories from
                Blogs to keep track.</p>
              <Link className="flex gap-20 bg-[#F4796C] mb-[30px] px-5 rounded-md max-w-[260px] items-center justify-center hover:cursor-pointer hover:opacity-90 " to={"/"}>
                <button className="py-[16.5px] text-[14px] text-white ">Enter your email</button>
                <img src={vector} alt="vector" />
              </Link>

            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default TodaysSpotlight
