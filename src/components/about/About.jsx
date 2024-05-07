import "./about.css";
import Image from "../../assets/profile.jpg";
import AboutBox from "./AboutBox";

export default function About () {

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={ Image } alt="about image" className="about__img" />
                

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">Hey there! I'm a junior software developer with a passion for all things programming. Armed with a degree in IT and fueled by endless cups of coffee, I would love to dive into projects headfirst and any challenge that comes my way.</p>
                        <a href="" className="btn"> Download Resume</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Front-end Development</h3>
                                <span className="skills__number"> 90% </span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage frontend"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Back-end Development</h3>
                                <span className="skills__number"> 75% </span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage backend"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UX/UI Design</h3>
                                <span className="skills__number"> 85% </span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage uxui"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}