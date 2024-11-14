import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Portfolio() {
  return (
    <>
      <Header />
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
                <img src="/img/product1.jpg" alt="" className="w-full h-48 object-cover" />
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
      <section className="portfolio-wrapper">
        <div className="container max-w-screen-xl mx-auto">
          <div className="contentWrapper">
            <h2>Our Portfolio</h2>
          </div>
          <div className="container flex max-w-screen-xl mx-auto">
            <img src="/img/about-img-trash.jpg" alt="" />
            <img src="/img/about-img-trash1.jpg" alt="" />
            <img src="/img/about-img.jpg" alt="" />
            <img src="/img/whychoose.jpg" alt="" />
            <img src="/img/about-img-trash.jpg" alt="" />
            <img src="/img/about-img.jpg" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
