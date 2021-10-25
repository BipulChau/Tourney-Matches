import React from "react";
import Player from "./Player";

import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

function PlayerList(props) {
  const playerDataArray = preparePlayerData(props.a);
  console.log("Player Data Array: ", playerDataArray); //test
  const parsedPlayerData =  addWinsToPlayers(playerDataArray, props.b);
  console.log("Player data with wins: ", parsedPlayerData); //test
  const onePlayer = parsedPlayerData[0];
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {/*Players will be shown here */}
      <Player {...onePlayer} />
    </section>
  );
}

export default PlayerList;
