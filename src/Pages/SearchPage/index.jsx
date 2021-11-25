import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import CharacterList from "../../Containers/CharacterList";
import { heroApi } from "../../services/apis";
const SearchPage = () => {
  const { keyword } = useParams();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    heroApi.searchName(keyword).then(res => setCharacters(res));
  }, [keyword]);

  return (
    <>
      <h2 className="display-6 text-white mb-5">
        Results for <b>{keyword}</b>:
      </h2>
      {characters.length >= 1 ? (
        <CharacterList data={characters} />
      ) : (
        <p className="text-white text-center h6">No results for {keyword}</p>
      )}
    </>
  );
};

export default SearchPage;
