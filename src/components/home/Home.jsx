import "./home.css";
import Me from "../../assets/profile.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";


export default function Home () {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Hayley Kim</h1>
                <span className="home__education">I'm a Software Developer</span>
                <HeaderSocials />

                <a href="#contact" className="btn">Contact Me</a>
                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}