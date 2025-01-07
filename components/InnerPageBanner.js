// components/InnerPageBanner.js
export default function InnerPageBanner({ heading, breadcrumb }) {
    return (
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('/img/inner-banner-background.png')`, // Replace with your background image path
        }}
      >
        <div className="text-center">
          <h1 className="xl:text-5xl md:text-4xl sm:text-3xl  font-bold">{heading}</h1>
          
          <p className="mt-2 mainColor">
            Home <span className="text-white">›</span> {breadcrumb}
          </p>
        </div>
      </section>
    );
  }
  