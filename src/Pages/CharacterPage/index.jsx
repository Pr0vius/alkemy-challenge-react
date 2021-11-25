import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import AddToTeamBtn from "../../Components/AddToTeamBtn";
import { heroApi } from "../../services/apis";

const CharacterPage = () => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    heroApi.searchById(id).then(res => {
      delete res.response;
      setCharacter(res);
      setLoading(true);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="container">
          <div className="row">
            <h2 className="text-white text-center mb-3">{character.name}</h2>
            <div className="col-12 col-md-6 col-lg-4 d-flex flex-column aling-items-center">
              <img
                className="img-thumbnail my-3"
                src={character.image.url}
                alt={character.name}
              />
              <AddToTeamBtn character={character} />
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <ul className="list-group mt-3">
                <li className="list-group-item text-white bg-dark">
                  Name:
                  <br />
                  <text className="ms-4 text-capitalize">
                    {character.biography["full-name"]}
                  </text>
                </li>
                <li className="list-group-item text-white bg-dark">
                  Aliases:
                  <br />
                  {character.biography.aliases.map(e => (
                    <>
                      <text className="ms-4 text-capitalize">{e}.</text>
                      <br />
                    </>
                  ))}
                </li>
                <li className="list-group-item text-white bg-dark">
                  Eye's color:
                  <br />
                  <text className="ms-4 text-capitalize">
                    {character.appearance["eye-color"]}
                  </text>
                </li>
                <li className="list-group-item text-white bg-dark">
                  Hair color:
                  <br />
                  <text className="ms-4 text-capitalize">
                    {character.appearance["hair-color"]}
                  </text>
                </li>
                <li className="list-group-item text-white bg-dark">
                  Places of Work:
                  <br />
                  {character.work.base.split(";").map(e => (
                    <>
                      <text className="ms-4">{e}.</text>
                      <br />
                    </>
                  ))}
                </li>
                <li className="list-group-item text-white bg-dark">
                  Weight:
                  <br />
                  <text className="ms-4 text-capitalize">
                    {character.appearance.weight[1]}
                  </text>
                </li>
                <li className="list-group-item text-white bg-dark">
                  Height:
                  <br />
                  <text className="ms-4 text-capitalize">
                    {character.appearance.height[1]}
                  </text>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CharacterPage;
