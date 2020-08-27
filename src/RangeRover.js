import React, {Component} from 'react'
import rangeRover from './range_rover.jpg'

class RangeRover extends Component {
    render() {
        return(
            <div>
                <h1>Range Rover</h1>
                <img src={rangeRover} alt="Land Range Rover" />
                <p>Model: Land Range Rover Sport</p>
            </div>
        )
    }
}

export default RangeRover