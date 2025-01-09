import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <Header />
      
      {/* Our Products Section */}
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
