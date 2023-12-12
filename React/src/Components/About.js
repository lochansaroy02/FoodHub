import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component {

    constructor(pros) {
        super(pros)
        console.log("Parent Constructer")
    }


    componentDidMount() {
        console.log("Parent CDM");
    }
    render() {



        console.log("Parent Render")
        return (
            <div>
                <UserClass name={"First"} location={"Kolkata"} />

            </div>
        )
    }
}

export default About;