import React from "react";
import Match from "./Match";


function MatchList(props) {
  // const oneMatch = props[0]  ;
  const {matchData} = props;
  const parsedMatches = matchData.map(match => <Match key={match.matchNumber} {...match}/>)
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {/* Matches will be shown here   */}
      {parsedMatches}
    </section>
  );
}

export default MatchList; 
