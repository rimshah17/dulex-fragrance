import Image from "next/image";
export default function FoodItemSection() {
  return (
  <section className="bg-black text-white py-28 px-6 sm:px-15">
    <p className="text-center subTitle-bannerfont-light familytwo mb-2 xl:text-3xl md:text-2xl mainColor">Food Categorys</p>
        <h2 className="text-center	md:text-4xl xl:text-5xl sm:text-3xl font-bold mb-4 leading-tight">
            <span className="mainColor">Ch</span>oose Food Iteam
        </h2>
<div className="container mx-auto items-center grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-1">
    <div className="image1">
        <img src="/img/home/1.png" alt="" />
    </div>
    <div className="image2">
        <img src="/img/home/2.png" alt="" />
    </div>
    <div className="image3">
        <img src="/img/home/3.png" alt="" />
    </div>
    <div className="image3">
        <img src="/img/home/4.png" alt="" />
    </div>
</div>
  </section>
)}
