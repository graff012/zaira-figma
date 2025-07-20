import categoryOne from "./images/exiciting-cat/Container.svg"
import categoryTwo from "./images/exiciting-cat/Container-2.svg"
import categoryThree from "./images/exiciting-cat/Container-3.svg"
import categoryFour from "./images/exiciting-cat/Container-4.svg"
import categoryFive from "./images/exiciting-cat/Container-5.svg"
import categorySix from "./images/exiciting-cat/Container-6.svg"
import "../../index.css"

const ExcitingCategories = () => {
  return (
    <section className="mt-[70px]">
      <div className="mycon">

        <div className="top-cat flex justify-between items-center mb-10">
          <span className="romb px-6 text-white font-bold text-xl py-3 max-w-[250px] bg-[#F4796C]">
            <span className="inner-romb">Exciting Categories</span>
          </span>

          <div className="flex flex-col justify-between gap-y-1">
            <div className="h-[2px] w-[1030px] bg-[#DFDFDF]"></div>
            <div className="h-[2px] w-[1030px] bg-[#DFDFDF]"></div>
          </div>
        </div>

        <div className="bottom-cat flex justify-between px-[15px] py-[30px]">
          <div className="items-1 w-[180px] h-[180px] flex items-end justify-center ">
            <span className="action text-white py-1 px-2 mb-10 rounded-md">ACTION</span>
          </div>
          <div className="items-2 w-[180px] h-[180px] flex items-end justify-center">
            <span className="text-white action py-1 px-2 mb-10 rounded-md">GAMING</span>
          </div>

          <div className="items-3 w-[180px] h-[180px] flex items-end justify-center">
            <span className="text-white action py-1 px-2 mb-10 rounded-md">RACING</span>
          </div>

          <div className="items-4 w-[180px] h-[180px] flex items-end justify-center">
            <span className="text-white action py-1 px-2 mb-10 rounded-md">ANIMATION</span>
          </div>

          <div className="items-5 w-[180px] h-[180px] flex items-end justify-center">
            <span className="text-white action py-1 px-2 mb-10 rounded-md">FIGHTER</span>
          </div>

          <div className="items-6 w-[180px] h-[180px] flex items-end justify-center">
            <span className="text-white action py-1 px-2 mb-10 rounded-md">STORY</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ExcitingCategories
