import CutomerRevew from "../../components/AllSection/CustomerReview/CutomerRevew";
import Menu from "../../components/AllSection/Menu/Menu";
import WhatWeServe from "../../components/AllSection/WhatWeServe/WhatWeServe";
import Banner from "../../components/banner/Banner";
import Container from "../../components/shared/container/Container";


const Home = () => {
    return (
        <Container>


            <Banner />
            <WhatWeServe />
            <Menu/>
            <CutomerRevew/>
        </Container>
    );
};

export default Home;