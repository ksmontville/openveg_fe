import React, { Component } from 'react'
import axios from "axios";

const api_url = process.env.REACT_APP_API_URL

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {vegan: false, selectedState: "", selectedName: ""}

        this.handleChange = this.handleChange.bind(this)
        this.handleData = this.handleData.bind(this)
    }

    handleChange = async () => {
        this.setState({vegan: !this.state.vegan, selectedState: this.props.currentState, selectedName: this.props.currentName}, await this.handleData)
    }

    handleData = async () => {
        this.props.vegan(this.state.vegan)
        if (this.props.param === "state") {
            const response = await axios.get(`${api_url}/${this.props.type}/?state=${this.state.selectedState.toLowerCase()}&vegan=${this.state.vegan}`)
            const data = response.data
            this.props.veganData(data)
        }
        else if (this.props.param === "zip") {
            const response = await axios.get(`${api_url}/${this.props.type}/?zip=${this.props.zip}&vegan=${this.state.vegan}`)
            const data = response.data
            this.props.veganData(data)
        }

        else if (this.props.param === "name") {
            const response = await axios.get(`${api_url}/${this.props.type}/name/${this.titleCase(this.props.currentName)}&vegan=${this.state.vegan}`)
            const data = response.data
            this.props.veganData(data)
        }
    }

     titleCase(str) {
        str = str.toLowerCase().split(' ')
        for(let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
        }
        return str.join(' ')
    }

    render() {
        return (
            <div className={"flex flex-row items-center justify-center gap-2 m-6"}>
                <label>Show Only Vegan Results</label>
                <input className={"hover:bg-green-600 checked:bg-green-600 focus:bg-green-600"} name="vegan" type="checkbox" value={this.state.vegan}
                       checked={this.state.vegan} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Filter