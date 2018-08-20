import * as React from "react";

let banner = "./resources/innatlaurelpoint.jpg";

let bannerStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${banner})`
};

export class Home extends React.Component{
    render() {
        return (
            <section style={ bannerStyle }>
            </section>
        );
    }
}

