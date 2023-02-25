import React, { useState } from "react";
import "./portfolio.css";
import data from "./data";

function Portfolio() {
  const [item, setItem] = useState(data);

  const filterItem = (cateItem) => {
    const updateItem = data.filter((curElem) => {
      return curElem.category === cateItem;
    });
    setItem(updateItem);
  };

  return (
    <section className="portfolio mtop" id="aktywność">
      <div className="container">
        <div className="head flexSB">
          <div className="left">
            <h6>Ciekawość świata i&nbsp;ludzi</h6>
            <h2>Moja aktywność</h2>
          </div>
        </div>
        <div className="links">
          <ul className="flexSB">
            <li className="active" onClick={() => setItem(data)}>
              Wszystko
            </li>
            <li onClick={() => filterItem("Przyjaźń")}>Przyjaźń</li>
            <li onClick={() => filterItem("Sport")}>Sport</li>
            <li onClick={() => filterItem("Siłownia")}>Siłownia</li>
            <li onClick={() => filterItem("Wycieczki")}>Wycieczki</li>
          </ul>
        </div>
        <div className="content grid mtop">
          {item.map((elem) => {
            const { cover, title } = elem;
            return (
              <div className="box">
                <div className="img">
                  <img src={cover} alt="..." />
                </div>
                <div className="overlay">
                  <h3>{title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
