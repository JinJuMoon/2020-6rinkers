import React from "react";
import { Link } from "react-router-dom";
import { userState } from "../../recoil";
import { useRecoilValue } from "recoil/dist";
import CircularBox from "../common/CircularBox";
import CocktailFavorite from "./CocktailFavorite";

const SearchedCocktail = ({ cocktail, cocktails, setCocktails, role }) => {
  const currentUser = useRecoilValue(userState).currentUser;

  return (
    <div
      className="searchedCocktailContainer"
      data-search-cocktail={cocktail.id}
    >
      <div className="searchedCocktailName">{cocktail.name}</div>
      <div className="favoriteContainer">
        {currentUser.role ? (
          <CocktailFavorite
            cocktail={cocktail}
            cocktails={cocktails}
            setCocktails={setCocktails}
          />
        ) : (
          <div />
        )}
      </div>
      <Link
        to={{
          pathname: `/cocktails/${cocktail.id}`,
          role: role,
        }}
      >
        <div className="searchedCocktailImage">
          <img src={cocktail.imageUrl} alt={cocktail.name} />
        </div>
      </Link>
      <div className="searchedCocktailTags">
        {cocktail.tags &&
          cocktail.tags
            .sort((a, b) => a.name.length - b.name.length)
            .slice(0, 4)
            .map((tag, index) => (
              <CircularBox key={"tag" + index} text={tag.name} />
            ))}
      </div>
    </div>
  );
};

export default SearchedCocktail;
