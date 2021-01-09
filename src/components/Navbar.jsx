
import './Navbar.css'
import {MenuItems} from './MenuItems'
import {Button} from './Button'


import React, { Component } from 'react'

export class Navbar extends Component {
    state = {clicked: false}

    handleCliked = ()=>{
        this.setSetState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <>
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">React <i className="fab fa-react"></i></h1>
                    <div className="menu-icon" onClick = {this.handleClicked}>
                        <i className = {this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                    </div>
                    <ul className = {this.state.clicked ?'nav-menu active' : 'nav-menu'}>

                    </ul>
                </nav>
            </>
        )
    }
}

export default Navbar
