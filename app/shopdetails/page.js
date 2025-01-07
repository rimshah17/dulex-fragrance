import InnerHeader from "../../components/InnerHeader";
import Footer from "../../components/Footer";
import InnerPageBanner from "../../components/InnerPageBanner";
import ProductDetailsPage from '../../components/shopDetail/ProductDetailsPage';
import TabsComponent from '../../components/shopDetail/TabsComponent';
import SimilarProducts from '../../components/shopDetail/SimilarProducts';


export default function ShopDetails() {
    return (
        <>
        <InnerHeader/>
        <InnerPageBanner  heading="Shop Details" breadcrumb="Menu" />
        <ProductDetailsPage/>
        <TabsComponent />
        <SimilarProducts />
        <Footer/>
        </>
    )

}
