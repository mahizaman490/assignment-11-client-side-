import { Helmet } from "react-helmet";
import Banner from "./Banner";
import OurCook from "./OurCook";
import Ourresturant from "./Ourresturant";
import SeeAllBtn from "./SeeAllBtn";
import TopFoodSec from "./TopFoodSec";

const Home = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>FlavourFusion|Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           <Banner></Banner>
           <TopFoodSec></TopFoodSec>
           <SeeAllBtn></SeeAllBtn>
           <OurCook></OurCook>
           <Ourresturant></Ourresturant>
        </div>
    );
};

export default Home;