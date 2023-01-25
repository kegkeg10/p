import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../components/";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className="container page">
            {/* info */}
            <div className="info">
            <h1>
                Job <span>Tracking</span> app
            </h1>
            <p>
                Tattooed etsy vegan thundercats asymmetrical cronut master cleanse
                direct trade seitan scenester. Pinterest VHS vinyl edison bulb
                schlitz vexillologist lumbersexual yuccie master cleanse
            </p>
            <Link to='/register' className="btn btn-hero">Login/register</Link>
            </div>
            <img src={main} alt="Job Hunt" className="img main" />
        </div>
        </Wrapper>
    );
};

export default Landing;
