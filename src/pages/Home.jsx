import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import NewArrivals from "../components/NewArrivals"
import BestSellers from "../components/BestSellers"
import Categories from "../components/Categories"
import Reviews from "../components/Reviews"
import Footer from "../components/Footer"
import ModNav from "../components/ModNav"
const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Categories />
      <NewArrivals />
      <BestSellers />
      <Banner />
      <Reviews />
    </div>
  )
}

export default Home
