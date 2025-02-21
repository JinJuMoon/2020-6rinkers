import React from "react";
import { Link } from "react-router-dom";
import "../../css/recommend/result.css";

const ResultSlide = ({ cocktail, key, role }) => {
  return (
    <div className="result-slide" key={key}>
      <div className="result-cocktail-name">{cocktail.name}</div>
      <Link
        to={{
          pathname: `/cocktails/${cocktail.id}`,
          role: role,
        }}
      >
        <div className="result-cocktail-image">
          <img
            src={cocktail.imageUrl}
            alt={cocktail.name}
            width="70%"
            height="100%;"
          />
        </div>
      </Link>
      <div className="result-cocktail-description">{cocktail.description}</div>
    </div>
  );
};

export default ResultSlide;
