import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import UserList from './components/UserList.jsx';

class Help extends React.Component {

    ReactDOM.render(
    <div>
        <UserList />
    </div>,
    document.querySelector("#root")
    );

}



