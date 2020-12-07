import React, { Component, Fragment } from 'react';

class Home extends Component {
    state = {}


    render() {
        return (
            <Fragment>
                <div className="textContent">
                    <h3>{this.props.user}</h3>
                </div>
            </Fragment>
        )
    }
}

export default Home;