import headerLogo from "./images/w_logo.png.svg"
import navSymbol from "./images/Symbol.svg"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5"
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import likeImg from "./images/Item → Link.svg"
import cartImg from "./images/Item → Link-2.svg"
import vector from "./images/Vector.svg"

const Header = () => {
  return (
    <header>
      <div className="header-top bg-[#12253E]">
        <div className="mycon flex items-center justify-between p-6">

          <div className="header-top-left flex items-center gap-3">
            <Link to={"/"}>
              <img src={headerLogo} alt="Header Logo" />
            </Link>

            <button className=" bars-btn text-3xl"><FaBars /></button>
          </div>

          <div className="header-top-right flex justify-between items-center gap-5">
            <form className="flex items-center border-2 border-[#3A506B] h-11 w-100 p-5 rounded-3xl">
              <input type="text" className="bg-transparent outline-none text-white" placeholder="Search here ..." />
              <button className="text-2xl text-white"> <IoSearch /> </button>
            </form>

            <nav className="flex items-center gap-[15px] text-2xl text-white">
              <button><FaFacebookF /></button>
              <button><FaTwitter /></button>
              <button><FaInstagram /></button>
              <button><FaLinkedinIn /></button>
            </nav>
          </div>

        </div>
      </div>

      <div className="header-bottom bg-[#183354] p-6">
        <div className="mycon flex justify-between">

          <nav className="flex items-center gap-10">
            <div className="home flex items-center gap-1">
              <Link className="text-[#F4796C] font-semibold text-[18px]" to={'/'}>Home</Link>
              <img src={navSymbol} alt="" />
            </div>

            <Link className="text-white font-semibold text-[18px]" to={'/'}>About Us</Link>

            <div className="features flex items-center gap-1">
              <Link className="text-white font-semibold text-[18px]" to={'/'}>Features</Link>
              <img src={navSymbol} alt="" />
            </div>

            <div className="categories flex items-center gap-1">
              <Link className="text-white font-semibold text-[18px]" to={'/'}>Categories</Link>
              <img src={navSymbol} alt="" />
            </div>

            <Link className="text-white font-semibold text-[18px]" to={'/'}>Contact</Link>
          </nav>

          <div className="header-bottom-rigth max-w-md flex items-center gap-3 justify-between ">
            <img src={likeImg} alt="" />
            <img src={cartImg} alt="" />
            <div className="sign-in flex items-center gap-2">
              <img src={vector} alt="" />
              <span className="font-bold text-white text-base">Sign In</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
