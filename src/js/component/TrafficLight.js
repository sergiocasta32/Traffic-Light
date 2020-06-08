import React from "react";
import ReactDOM from "react-dom";

//create your first component
export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			//your state properties here
			clickColor: null
		};
	}

	render() {
		var clickRed = "";
		var clickYellow = "";
		var clickGreen = "";

		if (this.state.clickColor === "red") {
			clickRed = "glow";
		} else if (this.state.clickColor === "yellow") {
			clickYellow = "glow";
		} else if (this.state.clickColor === "green") {
			clickGreen = "glow";
		}

		return (
			<div className="TrafficLight">
				<div id="trafficTop" />
				<div id="container">
					<div
						className={"red light " + clickRed}
						onClick={() => this.setState({ clickColor: "red" })}
					/>
					<div
						className={"yellow light " + clickYellow}
						onClick={() => this.setState({ clickColor: "yellow" })}
					/>
					<div
						className={"green light " + clickGreen}
						onClick={() => this.setState({ clickColor: "green" })}
					/>
				</div>
			</div>
		);
	}
}

//ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
