import React, { useContext, useState, useEffect } from "react";
import { TeamContext } from "../../context";
import Team from "../../services/team";

const AddToTeamBtn = ({ character }) => {
  const { team, setTeam } = useContext(TeamContext);
  const [state, setState] = useState({});

  useEffect(() => {
    Team.team = team;
    setState(Team.isOn(character));
  }, [team, character]);

  const handleAdd = evt => {
    evt.preventDefault();
    Team.agregateValidation(character, () => {
      setTeam([...team, character]);
    });
  };

  const handleRemove = evt => {
    evt.preventDefault();
    const newTeam = team.filter(e => e !== character);
    setTeam(newTeam);
  };

  return (
    <>
      {state ? (
        <button className="btn btn-danger" onClick={handleRemove}>
          Remove
        </button>
      ) : (
        <button className="btn btn-primary" onClick={handleAdd}>
          Add To Team
        </button>
      )}
    </>
  );
};

export default AddToTeamBtn;
