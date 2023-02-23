import React, { Component } from 'react'

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
                        <a className={"nav-logo text-xl"} href={"/"} target={""}>OpenVeg</a>
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

                    <a href={"/search"} target={""} onClick={this.handleClick}>Search</a>
                    <a className={"line-through"} href={"/contribute"} target={""} onClick={this.handleClick}>Contribute</a>
                    <a className={"line-through"} href={"/about"} target={""} onClick={this.handleClick}>About</a>
                    <a className={"line-through"} href={"/api"} target={""} onClick={this.handleClick}>API</a>
                    <a className={"line-through"} href={"https://www.google.com"} target={""} onClick={this.handleClick}>Login</a>

                </div>

            </div>

        )

    }

}

export default NavbarComponent