import React, { Component, Fragment } from 'react';

class About extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <div className="textContent">
                    <h3>About</h3>
                    <p>
                        L3aflet is a location based services application designed and built by myself, Oscar Mangan.
                        Using the Django web framework along with React, linked via a RESTful API. Bootstrap is also used
                        to style the front-end.
                    </p>
                    <p>
                        I hope you enjoy this application, it was fun to learn about Django, Docker, React, AWS, PostgreSQL
                        and PostGIS to bring it to life and deploy it!
                    </p>
                </div>
            </Fragment>
        )
    }
}

export default About;