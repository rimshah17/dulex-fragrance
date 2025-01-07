import InnerHeader from "../../components/InnerHeader";
import Footer from "../../components/Footer";
import InnerPageBanner from "../../components/InnerPageBanner";
import ShopSidebar from '../../components/shop/ShopSidebar';
import ShopGrid from '../../components/shop/ShopGrid';

export default function ShopPage() {
  const products = [
    { image: "/img/shop/s1.png", title: "Fresh Lime", price: "$38.00", oldPrice: "$45.00" },
    { image: "/img/shop/s2.png", title: "Chocolate Muffin", price: "$28.00", oldPrice: "$45.00"  },
    { image: "/img/shop/s3.png", title: "Burger", price: "$21.00", oldPrice: "$45.00" },
    { image: "/img/shop/s4.png", title: "Pizza", price: "$43.00" },
    { image: "/img/shop/s5.png", title: "Country Burger", price: "$45.00" },
    { image: "/img/shop/s6.png", title: "Drink", price: "$23.00", oldPrice: "$45.00" },
    { image: "/img/shop/s7.png", title: "Sandwiches", price: "$12.00" },
    { image: "/img/shop/s8.png", title: "Chicken Chop", price: "$17.00" },
    { image: "/img/shop/s4.png", title: "Pizza", price: "$43.00" },
    { image: "/img/shop/s5.png", title: "Country Burger", price: "$45.00" },
    { image: "/img/shop/s6.png", title: "Drink", price: "$23.00", oldPrice: "$45.00" },
    { image: "/img/shop/s7.png", title: "Sandwiches", price: "$12.00" },
    { image: "/img/shop/s8.png", title: "Chicken Chop", price: "$17.00" },
  ];

  return (
    <>
    <InnerHeader /> 
    <InnerPageBanner  heading="Our Shop" breadcrumb="Menu" />
    <div className="container mx-auto py-8 sm:px-2">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Shop Grid - 80% */}
        <div className="w-full lg:w-4/5 ">
          <ShopGrid products={products} />
        </div>
        {/* Sidebar - 20% */}
        <div className="w-full lg:w-1/5">
          <ShopSidebar products={products} />
        </div>

      </div>
    </div>
    <Footer /> 
    </>
  );
}
