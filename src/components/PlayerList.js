import React from "react";

import Player from "./Player";

function PlayerList(props) {
  const { parsedPlayerData } = props;
  console.log("Props or ParsedPlayerData:",props);
  const playerData = parsedPlayerData.map((player) => (
    <Player key={player.gamerTag} {...player} />
  ));
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {/*Players will be shown here */}
      {playerData}
    </section>
  );
}

export default PlayerList;
