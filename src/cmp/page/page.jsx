import Header from "../page/header/header";
import Modal from "../page/modal/modal";
import Trending from "../page/trending/trending";
import Featured from "../page/featured/featured";
import Latest from '../page/latest/latest';
import Best from "../page/bestProduct/best";
import Variety from '../page/variety/variety';
import Offers from "../page/offers/offers";
import Footer from "../page/footer/footer";

const Page = () => {
    return(
        <>
            <Header />
                <Modal />
                    <Trending />
                        <Featured />
                            <Latest />
                        <Best />
                    <Variety />
                <Offers />
            <Footer />
        </>
    )
}

export default Page;