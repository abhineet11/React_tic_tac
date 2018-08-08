import React, { Component } from 'react';

import './Square.css'

class Square extends Component {
    render() {
        return(
            <div>
                <button className = "btn-square" onClick = {() => this.props.onClick() }>
                    {this.props.value}
                </button>    
            </div>
        )
    }
}

export default Square