<<<<<<< HEAD
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
=======
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Image from "next/image";
>>>>>>> 6ff6d2b382672a4ed12bead2fd8c7f695c9db6b7

export default function Home() {
  return (
    <div>
      <Header />
<<<<<<< HEAD
    
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
=======

      {/* Banner Section */}
      <section className="banner">
        <div className="container ">
          <div className="rowCustom">
            <div className="colmun-6">
              <h2>Miss Dior Parfum</h2>
              <p>
                Perfume, the invisible accessory that transcends time, evokes
                memories, and whispers stories, has long been revered for its
                enchanting allure. From poets to perfumers, philosophers to
                fashion icons, scent has inspired them and they have attempted
                to capture the transformative power of scent.
              </p>
            </div>
            <div className="colmun-6">
              <Image
                src="/img/banner-left.jpg"
                alt="Banner Image"
                width={366}
                height={399}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="aboutSection">
        <div className="container ">
          <h2>About Us</h2>
          <p>
            At Miss Dior, we offer a premium selection of perfumes that define
            luxury and elegance.
          </p>
          <Button text="Explore Our Collection" />
        </div>
      </section>

      {/* Products Section */}
      <section className="prodctionSection">
        <div className="container">
          <h2>Our Products</h2>

          <div className="mainProduct-row">
            {Array.from({length: 4}).map((_, index) => (
              <div key={index} className="singleProduct">
                <div className="image-wrpper">
                  <span  className="sale">
                    40% off
                  </span>
                  <Image
                    src="/img/product1.jpg"
                    alt="Product Image"
                    width={222}
                    height={192}
                    className="singleImage"
                  />
                </div>
                <div className="contentWrapper-proudct">
                  <h3>Miss Dior Parfum</h3>
                  <p className="linethoug">Rs.3,950.00</p>
                  <p >from Rs.2,370.00</p>
                </div>
                <button className="btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>
>>>>>>> 6ff6d2b382672a4ed12bead2fd8c7f695c9db6b7

      <Footer />
    </div>
  );
}
