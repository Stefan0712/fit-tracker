import { getDateForHeader } from "../../helpers";
import './stylings/library.css';
import arrowIcon from '../../assets/arrow.svg'
import { Link } from "react-router-dom";


const Library = () => {
    return ( 
        <div className="library page">
            <div className='header'>
                <div className='date'>{getDateForHeader()}</div>
                <h2>Library</h2>
            </div>
            <div className="library-buttons">
                <Link to={'/create-workout'} className="orange-button big-button">Create Workout</Link>
                <Link to={'/create-exercise'} className="orange-button big-button">Create Exercise</Link>
            </div>
            <div className="subtitle full-width"><h3>Browse Workouts</h3><p className="orange-text">See more</p></div>
            <div className="library-items-container">
                <div className="item-body">
                    <div className="item-info">
                        <h4>Upper Body Workout</h4>
                        <div className="item-description">
                            <p>16 exercises</p>
                            <p>30 min</p>
                            <p>Upper Body</p>
                        </div>
                    </div>
                    <div className="item-button"><button className="orange-button medium-square"><img className="small-icon white-icon" src={arrowIcon} alt=""></img></button></div>
                </div>
            </div>
            <div className="subtitle full-width"><h3>Browse exercises</h3><p className="orange-text">See more</p></div>
            <div className="library-items-container">
                <div className="item-body">
                    <div className="item-info">
                        <h4>Biceps Curls</h4>
                        <div className="item-description">
                            <p>3 sets</p>
                            <p>12 reps</p>
                            <p>Upper Body</p>
                        </div>
                    </div>
                    <div className="item-button"><button className="orange-button medium-square"><img className="small-icon white-icon" src={arrowIcon} alt=""></img></button></div>
                </div>
            </div>

        </div>
     );
}
 
export default Library;