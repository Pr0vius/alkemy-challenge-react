import React from "react";
import CharacterCard from "../../Components/CharacterCard";

const CharacterList = ({ data = [] }) => {
  return (
    <div className="container-fluid mb-5">
      <div className="row">
        {data.map(character => (
          <div key={character.id} className="col-12 col-md-6 col-lg-4 p-1">
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
