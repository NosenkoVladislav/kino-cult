import React, {Component} from "react";
import ReactPlayer from "react-player";

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: true,
            controls: true,
            light: false
        }

    }

    render() {
        const settings = this.state;
        return(
            <ReactPlayer
                url={this.props.film.video}
                controls={settings.controls}
                width="100%"
            />
        )
    }
}
