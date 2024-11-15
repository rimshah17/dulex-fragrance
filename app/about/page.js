import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Header />

      {/* About Us Section */}
      <div className="aboutpageWrapper">
        <section className="aboutSectionleft">
          <div className="container mx-auto flex flex-wrap">
            <div className="md:w-6/12 contentWrapper">
              <h2>About Us</h2>
              <p>
                Between strength and grace, boldness and elegance. Miss Dior Parfum embodies the Dior vision of youth and femininity. Francis Kurkdjian, Dior Perfume Creative Director, reinterprets the initial olfactory inspiration of Miss Dior, infusing it with today's youthful spirit.
              </p>
            </div>
            <div className="md:w-6/12">
              <Image src="/img/about-img.jpg" alt="About Us Image" width={500} height={300} />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="aboutSectionleft">
          <div className="container mx-auto flex flex-wrap">
            <div className="md:w-6/12">
              <Image src="/img/whychoose.jpg" alt="Why Choose Us" width={500} height={300} />
            </div>
            <div className="md:w-6/12 contentWrapper">
              <h2>Why Choose Us</h2>
              <p>
                Between strength and grace, boldness and elegance. Miss Dior Parfum embodies the Dior vision of youth and femininity. Francis Kurkdjian, Dior Perfume Creative Director, reinterprets the initial olfactory inspiration of Miss Dior, infusing it with today's youthful spirit.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
