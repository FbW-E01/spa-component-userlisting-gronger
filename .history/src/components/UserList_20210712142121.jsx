import React, { Component } from 'react'



export default class UserList extends Component {
    constructor() {
        super();
        this.state =  {
            users: [
                { name: "Bob bobson", username: "bbb9493", email: "fkdjf@gmail.com"},
                { name: "jane ", username: "jane111", email: "jane@gmail.com"},
                { name: "michael", username: "bmike3", email: "emailf@gmail.com"},
                { name: "jim", username: "jim6", email: "hello@gmail.com"},



            ]
        }
    }
   


    render() {
        return (
            <div>
                {/* <h1>ggggggggg</h1> */}

            </div>
        )
    }
}
