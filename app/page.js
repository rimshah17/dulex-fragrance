import Header from '../components/Header';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import FoodItem from '../components/home/FoodItemSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import StatisticsSection from '../components/home/StatisticsSection';
import MenuSection from '../components/home/MenuSection';
import MeetOurChef from '../components/home/MeetOurChef';
import Testimonials from '../components/home/Testimonials';
import RestaurantProcess from '../components/home/RestaurantProcess';
import LatestBlog from '../components/home/LatestBlog';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
    
      <main>
      <HeroSection />
      <AboutSection />
      <FoodItem />
      <WhyChooseUs />
      <StatisticsSection />
      <MenuSection />
      <MeetOurChef />
      <Testimonials />
      <RestaurantProcess />
      <LatestBlog />
      </main>

      <Footer />
    </div>
  );
}
