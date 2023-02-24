import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {isExpanded: false}

        this.handleIsExpanded = this.handleIsExpanded.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }

    handleIsExpanded() {
        this.setState({isExpanded: !this.state.isExpanded})
    }

    handleClick (event) {
        this.handleIsExpanded()
    }

    render() {

        return(

            <div className={"navbar flex flex-col justify-between md:flex-row leading-loose tracking-wide p-4"}>

                <div className={"flex flex-row justify-between items-center border-b-4 p-2"}>
                    <div className={"nav-left"}>
                        <Link className={"nav-logo text-xl"} to={"/"}>OpenVeg</Link>
                    </div>

                    {/*Navbar icon/toggle*/}
                    <div className={"nav-icon block md:hidden"} onClick={this.handleIsExpanded}>
                        <span className={"bar bg-white block w-6 h-1 mx-auto my-1"}></span>
                        <span className={"bar bg-white block w-6 h-1 mx-auto my-1"}></span>
                        <span className={"bar bg-white block w-6 h-1 mx-auto my-1"}></span>
                    </div>

                </div>

                <div className={`nav-links bg-green-600 border-4 border-t-0 border-solid border-white rounded-b flex flex-col justify-center items-start gap-4 p-2 
                ${this.state.isExpanded ? "" : "hidden"} md:bg-black md:flex-row md:inline-flex`}>

                    <Link to="/search">Search</Link>
                    <Link to="/contribute">Contribute</Link>
                    <Link to="/about">About</Link>
                    <Link to="/api">API</Link>
                    <Link to="/login">Login</Link>

                </div>

            </div>

        )

    }

}

export default NavbarComponent