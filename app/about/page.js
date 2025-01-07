import InnerHeader from "../../components/InnerHeader";
import Footer from "../../components/Footer";
import InnerPageBanner from "../../components/InnerPageBanner";
import AboutSectionIn from '../../components/about/AboutSectionIn';
import WhyChooseUsAbout from '../../components/about/WhyChooseUsAbout';
import MeetOurChef from '../../components/home/MeetOurChef';
import Testimonials from '../../components/home/Testimonials';
import MenuSection from '../../components/home/MenuSection';


export default function AboutPage() {
    return (
        <>
        <InnerHeader/>

        <InnerPageBanner  heading="Shop Details" breadcrumb="Menu" />
       
        <AboutSectionIn/>
        <WhyChooseUsAbout/>
            <div className="innerChef">
                <MeetOurChef />
                <Testimonials />
                <MenuSection />
            </div>
            
       
        <Footer/>
        </>
    )

}
