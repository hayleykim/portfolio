import { useState } from "react";
import "./portfolio.css";
import Menu from './Menu';

export default function Portfolio () {
    const [items, setItems] = useState(Menu);

    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElement) => {
            return curElement.category === categoryItem;
        });

        setItems(updatedItems);
    }

    return (
        <section className="work container section" id="portfolio">
        <h2 className="section__title">Recent Projects</h2>

        <div className="work__filters">
            <span className="work__item" onClick={() => setItems(Menu)}>All</span>
            <span className="work__item" onClick={() => filterItem("React")}>React</span>
            <span className="work__item" onClick={() => filterItem("Python")}>Python</span>
            <span className="work__item" onClick={() => filterItem("JavaScript")}>JavaScript</span>
        </div>

        <div className="work__container grid">
            {items.map((element) => {
                const{ id, image, title, category, url } = element;

                return (
                    <div className="work__card" key={id}>
                        <div className="work__thumbnail">
                            <img src={image} alt="work image" className="work__img" />
                            <div className="work__mask"></div>
                        </div>

                        <span className="work__category">{category}</span>
                        <h3 className="work__title">{title}</h3>
                        <a href={url} className="work__button" target="_blank">
                            <i className="icon-link"></i>
                        </a>
                    </div>
                )

            })}
        </div>
        </section>
    )
}