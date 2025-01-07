import InnerHeader from "../../components/InnerHeader";
import Footer from "../../components/Footer";
import InnerPageBanner from "../../components/InnerPageBanner";
import ChefGrid from '../../components/chef/ChefGrid';


export default function ChefMain() {
    return (
        <>
        <InnerHeader/>
        <InnerPageBanner  heading="Our Chef" breadcrumb="Menu" />
        <ChefGrid/>
        <Footer/>
        </>
    )

}
