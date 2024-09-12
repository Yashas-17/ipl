import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeamsList: [], isLoading: true}

  componentDidMount() {
    this.getIplteams()
  }

  getIplteams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(updatedData)
    this.setState({iplTeamsList: updatedData, isLoading: false})
  }

  renderIplTeams = () => {
    const {iplTeamsList} = this.state
    return (
      <ul className="ul-container">
        {iplTeamsList.map(each => (
          <TeamCard key={each.id} teamDetails={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-bg-container">
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="IPL Logo"
          />
          <h1 className="dashboard-heading">IPL Dashboard</h1>
        </div>
        <div>
          {isLoading ? (
            <div className="loader-container">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            this.renderIplTeams()
          )}
        </div>
      </div>
    )
  }
}

export default Home
