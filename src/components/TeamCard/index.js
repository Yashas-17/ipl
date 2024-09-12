import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="link-ele">
      <li className="li-container">
        <img alt={name} className="team-img" src={teamImageUrl} />
        <h1 className="team-name-heading">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
