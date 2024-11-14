import CutomerRevew from "../../components/AllSection/CustomerReview/CutomerRevew";

import Menu from "../../components/AllSection/Menu/Menu";
import WhatWeServe from "../../components/AllSection/WhatWeServe/WhatWeServe";
import WhyChooseUs from "../../components/AllSection/WhyChooseUs/WhyChooseUs";

import Banner from "../../components/banner/Banner";
import Container from "../../components/shared/container/Container";


const Home = () => {
    return (
        <Container>


            <Banner />
            <WhatWeServe />
            <WhyChooseUs/>
            <CutomerRevew />
            <Menu />
          
            
        </Container>
    );
};

export default Home;