import React, {Component} from 'react'
import jeep from './jeep.jpg'

class Jeep extends Component {
    render() {
        return(
            <div>
                <h1>Jeep</h1>
                <img src={jeep} alt="Wrangler" />
                <p>Model: Wrangler</p>
            </div>
        )
    }
}

export default Jeep