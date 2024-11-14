import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />

      <section className="contantForm">
        <div className="container max-w-screen-xl mx-auto">
        <div className="form-wrapper">
            <div className="max-w-lg mx-auto p-6  rounded-lg ">
              <h2>Contact Us</h2>
                <form>
                  <div className="mb-4">
                    <label for="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required=""/>
                  </div>
                  <div className="mb-4">
                    <label for="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" required=""/>
                  </div>
                  <div className="mb-4">
                    <label for="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message" required=""></textarea>
                  </div>
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
