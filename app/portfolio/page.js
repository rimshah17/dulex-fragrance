import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <Header />
      
      {/* Our Products Section */}
      <section className="prodctionSection portfolioProductsection">
        <div className="container max-w-screen-md mx-auto">
          <h2>Our Products</h2>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {Array.from({ length: 5 }).map((_, index) => (
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
                <h3 className="text-sm text-gray-700 font-semibold">Perfume 1</h3>
                <p className="text-gray-400 line-through">Rs.3,950.00</p>
                <p className="text-red-600 font-bold">from Rs.2,370.00</p>
              </div>
              <button className="mt-4 w-full bg-gray-800 text-white text-sm py-2 rounded-lg">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="portfolio-wrapper">
        <div className="container max-w-screen-xl mx-auto">
          <div className="contentWrapper">
            <h2>Our Portfolio</h2>
          </div>
          <div className="container flex flex-wrap gap-4 max-w-screen-xl mx-auto">
            <Image src="/img/about-img-trash.jpg" alt="Portfolio Image 1" width={409} height={411} className="rounded-lg" />
            <Image src="/img/about-img-trash1.jpg" alt="Portfolio Image 2" width={409} height={411} className="rounded-lg" />
            <Image src="/img/about-img.jpg" alt="Portfolio Image 3" width={409} height={411} className="rounded-lg" />
            <Image src="/img/whychoose.jpg" alt="Portfolio Image 4" width={409} height={411} className="rounded-lg" />
            <Image src="/img/about-img-trash.jpg" alt="Portfolio Image 5" width={409} height={411} className="rounded-lg" />
            <Image src="/img/about-img.jpg" alt="Portfolio Image 6" width={409} height={411} className="rounded-lg" />
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
