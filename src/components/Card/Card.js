import React from "react";
import "./style.css";

const Card = (props) => {

  const cardLinksObj = props.cardLinks

  return (
    <>
      <div className={props.altClass || "waffle--card"}>
        <div className="waffle--card-image-wrapper">
          <img
            className="waffle--card-image"
            src={props.imageSource}
            alt={props.imageAlt}
          />
        </div>
        <div className="waffle--card-title">{props.title}</div>
        <div className="waffle--card-subtitle">{props.subtitle}</div>
        <div className="waffle--internal-links-wrapper">
          <a href={props.detailPageLink} className="waffle--internal-link">
            Read More...
          </a>
        </div>
        <div className="waffle--card-tags-wrapper">
          {props.tags.map((tag) => (
            <span className="waffle--card-tag">{tag}</span>
          ))}
        </div>
        <div className="waffle--card-links-wrapper">
          {Object.entries(cardLinksObj).map(([key, value]) => (
            <div className="waffle--card-link-wrapper">
              <a href={value} target="_blank" className="waffle--card-link">
                {key}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
