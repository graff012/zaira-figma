import { Link } from "react-router-dom"
import logo from "../../components/home-components/images/w_logo.png.svg"
import day from "../Background+Shadow.svg"
import up from "../Button.svg"

const Footer = () => {
  return (
    <footer className="bg-[#0C1622] pt-[200px] mt-[66px] relative">

      <div className="mycon">
        <div className="top-f flex items-center">

          <div className="left-ff">
            <img src={logo} alt="" />
            <p className="text-base text-[#BACCE1] max-w-[265px] mt-5">Browned butter and brown sugar
              caramelly goodness, crispy edges
              thick and soft centers and melty
              little puddles of chocolate.</p>
          </div>

          <div className="right-ff max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            {/* Company */}
            <div>
              <h2 className="text-lg font-semibold mb-2 text-white">Company</h2>
              <div className="w-6 h-1 bg-[#FF6B6B] mb-4"></div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#">About Us</a></li>
                <li><a href="#">The Test Kitchen</a></li>
                <li><a href="#">Podcast</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Jobs</a></li>
              </ul>
            </div>

            {/* Get Help */}
            <div>
              <h2 className="text-lg font-semibold mb-2 text-white">Get Help</h2>
              <div className="w-6 h-1 bg-[#FF6B6B] mb-4"></div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#">Contact & FAQ</a></li>
                <li><a href="#">Orders & Returns</a></li>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Catalog</a></li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h2 className="text-lg font-semibold mb-2 text-white">Explore</h2>
              <div className="w-6 h-1 bg-[#FF6B6B] mb-4"></div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#">The Shop</a></li>
                <li><a href="#">Recipes</a></li>
                <li><a href="#">Food</a></li>
                <li><a href="#">Travel</a></li>
                <li><a href="#">Hotline</a></li>
              </ul>
            </div>

            {/*  Follow Us On */}
            <div>
              <h2 className="text-lg font-semibold mb-2 text-white">Follow Us On</h2>
              <div className="w-6 h-1 bg-[#FF6B6B] mb-4"></div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">YouTube</a></li>
                <li><a href="#">Pinterest</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-[2px] width-[1320px] bg-[#7C91AA] mt-[100px]"></div>

        <div className="bottom-f flex gap-4 justify-between items-center">

          <div className="flex items-center">
            <Link to="/" className="text-[#7C91AA]">Privacy Policy & Terms</Link>
            <div className="text-center text-[#7C91AA]">.</div>
            <Link to="/" className="text-[#7C91AA] my-9">Site Credits</Link>
          </div>

          <div className="text-[#7C91AA]">
            © 2023 All Rights Reserved
          </div>
        </div>
      </div>

      <img className="absolute left-[1400px] bottom-[170px]" src={day} alt="" />
      <img className="absolute left-[1430px] bottom-[140px]" src={up} alt="" />

    </footer>
  )
}

export default Footer
