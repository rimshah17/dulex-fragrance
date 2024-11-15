import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      
      {/* Banner Section */}
      <section className="banner">
        <div className="container max-w-screen-xl mx-auto flex flex-wrap">
          <div className="md:w-6/12">
            <h2>Miss Dior Parfum</h2>
            <p>
              Perfume, the invisible accessory that transcends time, evokes memories, and whispers stories, has long been revered for its enchanting allure. From poets to perfumers, philosophers to fashion icons, scent has inspired them and they have attempted to capture the transformative power of scent.
            </p>
          </div>
          <div className="md:w-6/12">
            <Image 
              src="/img/banner-left.jpg" 
              alt="Banner Image" 
              width={366} 
              height={399} 
              className="rounded-md" 
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 text-lg mb-6">
            At Miss Dior, we offer a premium selection of perfumes that define luxury and elegance.
          </p>
          <Button text="Explore Our Collection" />
        </div>
      </section>

      {/* Products Section */}
      <section className="prodctionSection">
        <div className="container max-w-screen-md mx-auto">
          <h2>Our Products</h2>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-64 p-4 border rounded-lg shadow-lg">
              <div className="relative">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  40% off
                </span>
                <Image 
                  src="/img/product1.jpg" 
                  alt="Product Image" 
                  width={222} 
                  height={192} 
                  className="object-cover rounded-lg" 
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-sm text-gray-700 font-semibold">Miss Dior Parfum</h3>
                <p className="text-gray-400 line-through">Rs.3,950.00</p>
                <p className="text-red-600 font-bold">from Rs.2,370.00</p>
              </div>
              <button className="mt-4 w-full bg-gray-800 text-white text-sm py-2 rounded-lg">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
