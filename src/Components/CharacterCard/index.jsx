import React from "react";
import HeroStats from "../HeroStats";
import { Link } from "react-router-dom";
import AddToTeamBtn from "../AddToTeamBtn";
import "./style.css";

const CharacterCard = ({ character }) => {
  const bgColor = {
    good: "bg-info",
    bad: "bg-danger",
    neutral: "bg-warning",
  };
  return (
    <div className={`card charcard ${bgColor[character.biography.alignment]}`}>
      <img
        src={character.image.url}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-overlay">
        <h5 className="text-center text-white">{character.name}</h5>
        <HeroStats powerstats={character.powerstats} />
        <div className="d-flex justify-content-evenly w-100">
          <AddToTeamBtn character={character} />
          <Link to={`/character/${character.id}`} className="btn btn-info">
            Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
