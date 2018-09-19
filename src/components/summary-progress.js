import React from 'react';
import { getQuestionLevels } from '../actions/users';
import '../components-css/summary-progress.css';

export default class SummaryProgress extends React.Component {
  componentWillMount(){
    this.props.dispatch(getQuestionLevels());
  }

  render() {
    if(!this.props.questionLevels){
      return <p>Fetching Progress...</p>
    }

    let total = 0;
    const progressList = this.props.questionLevels.map(country => {
        total = total + country.level
        return (
          <li className="stats-li" key={country.country}>
              {country.country}
            <div className="progress-bar-container">
              <div className="border">
                <div className="bar" style={{ width: country.level*20  }}>{country.level*5 + "%"}</div>
              </div>
            </div>
          </li>
        )
      })
    const averageLevel = total/this.props.questionLevels.length;

    return(
      <div className="summary-progress-container">
          <br/>
          <br/>
          <h3 className="average">Average Proficiency Level: {averageLevel.toFixed(1)}/5</h3>
          <br/>
          <ul className="stats">
            {progressList}
          </ul>
          <br/>
          <br/>
      </div>
    )
  }
}
