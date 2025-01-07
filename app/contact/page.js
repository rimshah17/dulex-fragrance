import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />

      <section className="contantForm">
        <div className="container ">
        <div className="form-wrapper">
            <div className="max-w-lg mx-auto p-6  rounded-lg ">
              <h2>Contact Us</h2>
                <form>
                    <input type="text" id="name" name="name"  placeholder="Your Name" required=""/>
                    <input type="email" id="email" name="email"  placeholder="Your Email" required=""/>
                    <textarea id="message" name="message" rows="4"  placeholder="Your Message" required=""></textarea>
                  
                  <button type="submit" className="w-full btn text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
                </form>
              </div>
              
        </div> 
        </div> 
    </section>

      <Footer />
    </>
  );
}
