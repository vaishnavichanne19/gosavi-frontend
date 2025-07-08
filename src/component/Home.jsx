import react from "react"
import Banner from "./Banner";
import HomeService from "./HomeService";
import HomeMeet from "./HomeMeet";
import Achievement from "./Achievement";
import Price from "./Price";
import Newsletter from "./Newsletter";
import Testimony from "./Testimony";
import Blog from "./Blog";
import Quote from "./Quote";
import Dentacare from "./Dentacare";
import HomeGallery from "./HomeGallery";


function Home () {
    return (
        <div>
<Banner/>
<HomeService/>
<Dentacare/>
<HomeMeet/>
<Achievement/>
{/* <Price/> */}
<Testimony/>
<Newsletter/>
<HomeGallery/>
<Blog/>
<Quote/>
        </div>
    )
}

export default Home;