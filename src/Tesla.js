import React, {Component} from 'react'
import modelX from './modelX.jpg'

class Tesla extends Component {
    render() {
        return(
            <div>
                <h1>Tesla</h1>
                <img src={modelX} alt="model X picture" />
                <p>Model: ModelX</p>
            </div>
        )
    }
}

export default Tesla