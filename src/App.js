import "./App.css";
import PlayerList from "./components/PlayerList";
import MatchList from "./components/MatchList";
import matchData from "./data/matchData";
import playerData from "./data/playerData";
import { preparePlayerData, addWinsToPlayers } from "./helpers/playerHelpers";

function App() {
  const playerDataArray = preparePlayerData(playerData);
  console.log("Player Data Array: ", playerDataArray); //test
  const parsedPlayerData =  addWinsToPlayers(playerDataArray, matchData);
  console.log("Player data with wins: ", parsedPlayerData); //test
  //const onePlayer = parsedPlayerData[0];
  return (
    <div className="App">
      <h1>
        Tourney Matches{" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList parsedPlayerData={parsedPlayerData} />
      <MatchList matchData={matchData} />
    </div>
  );
}

export default App;
