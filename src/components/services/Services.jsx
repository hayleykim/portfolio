import "./services.css";
import Image1 from "../../assets/portfolio-1.png"
import Image2 from "../../assets/portfolio-2.png"
import Image3 from "../../assets/portfolio-3.png"

export default function Services () {

    const data = [
        {
            id: 1,
            image: Image1,
            title: "Software Development",
            description: "HTML, CSS, JavaScript, React.js, Python, MongoDB, Postgresql, Django, Node.js, Express.js, Bootstrap, SQL ... and so on"
        },
        {
            id: 2,
            image: Image2,
            title: "More Technologies",
            description: "Photoshop, Canva, AWS, Cloudinary, TypeScript, Photography, Video editing ... and more!"
        },
        {
            id: 3,
            image: Image3,
            title: "UX/ UI",
            description: "I am also comfortable with discussing UX/ UI - Bootstrap and custom CSS. I enjoy developing concise, clean and trendy UI with user-friendly UX."
        }
    ]

    return (
        <section className="services container section" id="skills">
            <h2 className="section__title">Skills</h2>

            <div className="services__container grid">
                {data.map(({id, image, title, description}) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt="service image"  className="services__img" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}