import Layout from "../common/layout/layout";
import Deals from "../components/deal/deals";
import Slider from "../components/mainpage/slider";
import Newarrivals from "../components/newarrival/newarrivals";
import Recommendation from "../components/recommended/recommendation";

function Home() {
    return (
        <Layout>
            <Slider />
            <Newarrivals />
            <Deals />
            <Recommendation />
        </Layout>
    )
}
export default Home;