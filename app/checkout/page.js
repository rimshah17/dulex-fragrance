import InnerHeader from "../../components/InnerHeader";
import Footer from "../../components/Footer";
import InnerPageBanner from "../../components/InnerPageBanner";
import Checkout from '../../components/checkout/Checkout';


export default function MainCheckout() {
    return (
        <>
        <InnerHeader/>
        <InnerPageBanner  heading="Our Shop" breadcrumb="Menu" />
        <Checkout/>
        <Footer/>
        </>
    )

}
