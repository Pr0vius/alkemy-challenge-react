import React, { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import HeroStats from "../../Components/HeroStats";
import { TeamContext } from "../../context";
import Team from "../../services/team";
import "./style.css";

const TeamStats = () => {
  const initialState = {
    height: 0,
    weight: 0,
    mainAttribute: "",
    powerstats: {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0,
    },
  };
  const showTrue = {
    show: true,
    color: "danger",
    text: "Hide Team Stats",
  };
  const showFalse = {
    show: false,
    color: "primary",
    text: "Show Team Stats",
  };

  const { team } = useContext(TeamContext);
  const [show, setShow] = useState(showTrue);
  const [stats, setStats] = useState(initialState);

  useEffect(() => {
    const average = Team.getTeamAverage(team);
    setStats(average);
  }, [team]);

  const handleClick = () => {
    show.show ? setShow(showFalse) : setShow(showTrue);
  };
  return (
    <div>
      <button
        className={`btn btn-${show.color} d-block w-100 my-3`}
        id="showButton"
        onClick={handleClick}
      >
        {show.text}
      </button>

      {show.show ? (
        <>
          <h4 className="text-white text-center my-3">Team Stats</h4>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item bg-dark text-white p-1">
              Main Attribute: {stats.mainAttribute}
            </li>
            <li className="list-group-item bg-dark text-white p-1">
              Average weight: {stats.weight} kg
            </li>
            <li className="list-group-item bg-dark text-white p-1">
              Average Heigth: {stats.height} cm
            </li>
          </ul>
          <HeroStats powerstats={stats.powerstats} />
        </>
      ) : null}
    </div>
  );
};

export default TeamStats;
