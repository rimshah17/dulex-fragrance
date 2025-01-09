import Image from 'next/image';

export default function Footer() {
  return (
    <section className="footer">
      <div className="container max-w-screen-xl mx-auto py-4">
        <h2>Contact Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Replace <img /> with <Image /> component */}
        <Image 
          src="/img/socialmedia.png"  // Make sure this path is correct
          alt="Social Media"
          width={120}  // Adjust width based on your design needs
          height={40}  // Adjust height based on your design needs
          className="mx-auto"
        />
      </div>
    </section>
  );
}
