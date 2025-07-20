import Footer from "../../layouts/footer/Footer"
import Header from "../../layouts/header/Header"
import Showcase from "../../components/home-components/Showcase"
import ExcitingCategories from "../../components/home-components/Exciting-categories"
import ShopNow from "../../components/home-components/Shop-now"
import TodaysSpotlight from "../../components/home-components/todays-spotlight"
import PopularNews from "../../components/home-components/popular-news"
import FreeGamingWebsite from "../../components/home-components/free-gaming-website"
import TrendingGamingNews from "../../components/home-components/trending-gaming-news"
import WeeklyBestNews from "../../components/home-components/weekly-best-news"
import EmailPart from "../../components/home-components/email-part"

const HomePage = () => {
  return (
    <>
      <Header />

      <main>
        <Showcase />
        <ExcitingCategories />
        <ShopNow />
        <TodaysSpotlight />
        <PopularNews />
        <FreeGamingWebsite />
        <TrendingGamingNews />
        <WeeklyBestNews />
        <EmailPart />
      </main>

      <Footer />
    </>
  )
}

export default HomePage
