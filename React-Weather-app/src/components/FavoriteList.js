import React from "react";
import "../styles.css";
const FavoriteList = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="favorite-list">
      <h2>Favorite Locations</h2>
      {favorites.length === 0 ? (
        <p>No favorite locations yet!</p>
      ) : (
        <ul>
          {favorites.map((fav, index) => (
            <li key={index}>
              {fav.city}, {fav.country} - {fav.temperature}°C
              <button onClick={() => removeFromFavorites(fav.city)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteList;
