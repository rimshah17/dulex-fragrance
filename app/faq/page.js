import InnerHeader from "../../components/InnerHeader";
import Footer from "../../components/Footer";
import InnerPageBanner from "../../components/InnerPageBanner";
import FAQSection from '../../components/FAQSection';
FAQSection
export default function ShopDetails() {
    return (
        <>
        <InnerHeader/>
        <InnerPageBanner  heading="Our Shop" breadcrumb="Menu" />
        <FAQSection/>
        <Footer/>
        </>
    )

}
