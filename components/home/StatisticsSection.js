import Image from "next/image";

// components/StatisticsSection.js
export default function StatisticsSection() {
    return (
      <section className="counterSection text-white py-12">
        <div className="container mx-auto flex flex-wrap justify-between   items-center gap-8">
        
          <div className="flex flex-col items-center ">
          <img src="/img/home/count1.png" alt="icon1" className=" w-24" />
            <h3 className="text-lg font-semibold">Professional Chefs</h3>
            <p className="text-3xl font-bold">420</p>
          </div>
  
        
          <div className="flex flex-col items-center">
          <img src="/img/home/count1.png" alt="icon1" className=" w-24" />
            <h3 className="text-lg font-semibold">Items Of Food</h3>
            <p className="text-3xl font-bold">320</p>
          </div>
  
        
          <div className="flex flex-col items-center">
          <img src="/img/home/count1.png" alt="icon1" className=" w-24" />
            <h3 className="text-lg font-semibold">Years Of Experienced</h3>
            <p className="text-3xl font-bold">30+</p>
          </div>
  
        
          <div className="flex flex-col items-center">
          <img src="/img/home/count1.png" alt="icon1" className=" w-24" />
            <h3 className="text-lg font-semibold">Happy Customers</h3>
            <p className="text-3xl font-bold">220</p>
          </div>
        </div>
      </section>
    );
  }
  