import React, { useContext } from "react";
import CharacterList from "../../Containers/CharacterList";
import { TeamContext } from "../../context";

const Home = () => {
  const { team } = useContext(TeamContext);
  return (
    <>
      {team.length >= 1 ? (
        <CharacterList data={team} />
      ) : (
        <p className="display-6 text-center text-white my-5">
          Find characters and add them to your team!
        </p>
      )}
    </>
  );
};

export default Home;
