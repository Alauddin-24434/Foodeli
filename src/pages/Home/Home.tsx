import CutomerRevew from "../../components/AllSection/CustomerReview/CutomerRevew";

import Menu from "../../components/AllSection/Menu/Menu";

import WhyChooseUs from "../../components/AllSection/WhyChooseUs/WhyChooseUs";

import Banner from "../../components/banner/Banner";
import Container from "../../components/shared/container/Container";


const Home = () => {
    return (
        <Container>


            <Banner />
            <WhyChooseUs/>
    
            <Menu />
            <CutomerRevew />
       
          
            
        </Container>
    );
};

export default Home;