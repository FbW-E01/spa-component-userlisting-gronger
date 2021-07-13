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



            ],
            isSelected: false
        }
    }
   
    clickHandler = () => {
        this.setState({
            isSelected: true
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => clickHandler}>SHOW INFO</button>
                <ul>
                     {this.state.users.map(x => 
                        <li>{x.username}, {x.email}</li>)}
                </ul>

            </div>
        )
    }
}
