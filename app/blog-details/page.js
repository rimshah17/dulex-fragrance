import InnerHeader from "../../components/InnerHeader";
import Footer from "../../components/Footer";
import InnerPageBanner from "../../components/InnerPageBanner";
import DetailBlog from '../../components/blog/DetailBlog';
import SidebarBog from '../../components/blog/SidebarBog';




export default function ShopDetails() {
    return (
        <>
        <InnerHeader/>

        <InnerPageBanner  heading="Shop Details" breadcrumb="Menu" />
         <div className="container mx-auto py-8 px-4 lg:px-0 flex flex-col lg:flex-row gap-8">
        <DetailBlog />
        <SidebarBog />
       </div>
        <Footer/>
        </>
    )

}
