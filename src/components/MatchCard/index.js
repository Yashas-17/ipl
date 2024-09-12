import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = recentMatchDetails
  const statusClassName = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <div className="result-card-container">
      <div className="logo-container">
        <img
          alt={`competing team ${competingTeam}`}
          src={competingTeamLogo}
          className="competing-team-img"
        />
      </div>
      <h1 className="competing-team">{competingTeam}</h1>
      <p className="result">{result}</p>
      <p className={`match-status ${statusClassName}`}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
