import React from "react";
import "./style.css";

const Card = (props) => {

  const cardLinksObj = props.cardLinks

  return (
    <>
      <div className="card">
        <div className="card-image-wrapper">
          <img
            className="card-image"
            src={props.imageSource}
            alt={props.imageAlt}
          />
        </div>
        <div className="card-title">{props.title}</div>
        <div className="card-subtitle">{props.subtitle}</div>
        <div className="detail-page-link">
          <a href={props.detailPageLink}>Read More...</a>
        </div>
        <div>
          {props.tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
        <div className="card-links">
          {Object.entries(cardLinksObj).map(([key, value]) => (
            <div>
              <a href={value} target="_blank">
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
