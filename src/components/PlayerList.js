import React from "react";
import Player from "./Player";
import playerData from "../data/playerData";
import matchData from "../data/matchData";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

function PlayerList(props) {
  const playerDataArray = preparePlayerData(playerData);
  console.log("Player Data Array: ", playerDataArray); //test
  const parsedPlayerData =  addWinsToPlayers(playerDataArray, matchData);
  console.log("Player data with wins: ", parsedPlayerData);
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {/*Players will be shown here */}
      <Player />
    </section>
  );
}

export default PlayerList;
