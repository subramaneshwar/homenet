import React, { Component } from 'react'

export class Navs extends Component {
    render() {
        return (
            <div id="shadow">
                <div id="heading">
                    <div id="image">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                            width="150"
                            height="50"
                        />
                    </div>
                    <div id="buttons">
                        <button id="signin">Sign In</button>&nbsp;&nbsp;&nbsp;
                        <button id="signin">Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navs