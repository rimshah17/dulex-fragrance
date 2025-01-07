import InnerHeader from "../../components/InnerHeader";
import Footer from "../../components/Footer";
import InnerPageBanner from "../../components/InnerPageBanner";
import StaticCartTable from '../../components/cart/StaticCartTable';
import CouponAndTotalBill from '../../components/cart/CouponAndTotalBill';


export default function Shopcart() {
    return (
        <>
        <InnerHeader />
        <InnerPageBanner heading="Shopping Cart" breadcrumb="Menu" />
        <StaticCartTable />
        <CouponAndTotalBill />
        <Footer />
        </>
    )

}
