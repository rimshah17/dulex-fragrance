import InnerHeader from "../../components/InnerHeader";
import Footer from "../../components/Footer";
import InnerPageBanner from "../../components/InnerPageBanner";
import Custom404 from '../../components/Custom404';


export default function Customfour() {
    return (
        <>
        <InnerHeader/>
        <InnerPageBanner  heading="404 Error" breadcrumb="Menu" />
        <Custom404/>
        <Footer/>
        </>
    )

}
