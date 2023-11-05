import Banner from "./Banner";
import OurCook from "./OurCook";
import Ourresturant from "./Ourresturant";
import SeeAllBtn from "./SeeAllBtn";
import TopFoodSec from "./TopFoodSec";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TopFoodSec></TopFoodSec>
           <SeeAllBtn></SeeAllBtn>
           <OurCook></OurCook>
           <Ourresturant></Ourresturant>
        </div>
    );
};

export default Home;