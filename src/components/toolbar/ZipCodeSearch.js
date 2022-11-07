import React, { Component } from 'react'
import axios from "axios";

const api_url = process.env.REACT_APP_API_URL

class ZipCodeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {zip: ""}

        this.handleZip = this.handleZip.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleZip(event) {
        this.setState({zip: event.target.value})
    }

     async handleSubmit(event) {
        event.preventDefault()
        const response = await axios.get(`${api_url}/?zip=${this.state.zip}`)
        const data = response.data
        this.props.zipCode(data)
    }

    render() {

        return (
            <div className={"m-4"}>
                <form className={"flex flex-col flex-nowrap items-center p-2 gap-y-2"} onSubmit={this.handleSubmit}>
                    <label>Search by Zip Code</label>
                    <input className={"text-black w-2/3 md:w-1/3"} type="text" onChange={this.handleZip} placeholder="Enter 5-digit zip code..."/>
                    <button className={"rounded-md w-1/4 bg-green-600 p-2 md:w-1/12"} type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default ZipCodeSearch