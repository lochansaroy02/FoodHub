import React from 'react'

class UserClass extends React.Component {



    constructor(props) {

        super(props)



    }

    async componentDidMount() {
        const userData = await fetch("https://api.github.com/users/lochansaroy02");
        const json = await userData.json();
        console.log(json)

        this.setState = {
            name: json.name,
            location: json.location
        }


    }


    render() {

        this.state = {
            name: "Lochan",
            location: "Kolkata",
        }





        return (
            <div >
                <h3>My name is </h3>
                <h3>I am form  </h3>


            </div>
        )
    }
}


export default UserClass;