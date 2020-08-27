import React from "react";

class CalThumb extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            calLoaded: [],
        };
    }

    componentDidMount() {
        this.setState({
            calLoaded: require("../../../public/cal1500C.png"),
        });
    }

    render() {
        return (
            <div className="theCal">
                <h2>Calendar/Scheduling App</h2>
                <a href="https://www.devmunns.site/cal/" id="blahC"><h3>Click here to check it out!</h3></a>
                <img src={this.state.calLoaded} alt="Calendar and Scheduling Application" />
            </div>
        )
    }
}

export default CalThumb;