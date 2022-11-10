import React, { Component } from 'react'

class CheckboxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "", value: "", isActive: false}

        this.handleIsActive = this.handleIsActive.bind(this)

    }

    handleIsActive() {
        this.setState({isActive: !this.state.isActive})
    }

    render() {

        return(

            <div className={""}>
                <label className={`bg-green-600 hover:bg-green-400 rounded p-2 ${this.state.isActive ? "active" : ""}`}>
                    {this.props.name}
                    <input type={"checkbox"} className={"hidden"} value={this.props.value} onClick={this.handleIsActive}/>
                </label>

            </div>

        )
    }

}

export default CheckboxComponent