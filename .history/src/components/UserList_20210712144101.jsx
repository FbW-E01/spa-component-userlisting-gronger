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
            isSelected: false,
            Hello: "hi"
        }
    }
   
    clickHandler = () => {
        this.setState({
            isSelected: true,
            hello = "joseph"
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>SHOW INFO</button>
                <ul>
                    {this.state.isSelected ? (
                        this.state.users.map(x => <li>
                            {x.username},  {x.email}
                        </li>)
                    ): null}
                </ul>

            </div>
        )
    }
}
