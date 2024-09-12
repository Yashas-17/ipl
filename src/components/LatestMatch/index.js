import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails
  return (
    <div className="latest-match-container">
      <div className="left-container">
        <h1 className="heading">{competingTeam}</h1>
        <p className="date-heading">{date}</p>
        <p>{venue}</p>
        <p>{matchStatus}</p>
        <p>{result}</p>
      </div>
      <div className="competing-team-img-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <div className="right-container">
        <h2>First Innings</h2>
        <p>{firstInnings}</p>
        <h2>Second Innings</h2>
        <p>{secondInnings}</p>
        <h2>Man Of The Match</h2>
        <p>{manOfTheMatch}</p>
        <h2>Umpires</h2>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
