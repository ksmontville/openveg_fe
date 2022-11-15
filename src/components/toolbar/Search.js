import React, { Component } from 'react'
import axios from 'axios'
import ButtonComponent from '../ButtonComponent'

const api_url = process.env.REACT_APP_API_URL

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {type: "", value: ""}

        this.handleSearch = this.handleSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSearch(event)  {
        this.setState({value: event.target.value})
    }

    async handleSubmit(event) {
        event.preventDefault()
        const response = await axios.get(`${api_url}/${this.props.type}/name/${this.titleCase(this.state.value)}`)
        const data = response.data
        console.log(data)
        this.props.restaurantName(data)
    }

    titleCase(str) {
        str = str.toLowerCase().split(' ')
        for(let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
        }
        return str.join(' ')
    }

    render() {
        return(
            <div className={"m-4"}>
                {/*<p className={"font-bold text-center text-xl m-6"}>** THIS APP IS MINIMALLY FUNCTIONAL WITH ONGOING DEVELOPMENT **</p>*/}
                {/*<p className={"font-bold text-center text-xl m-6"}>*/}
                {/*    NOTE: Currently only have data for New Hampshire, New York, Massachusetts, and Vermont.*/}
                {/*</p>*/}
            <form className={"flex flex-col flex-nowrap items-center p-2 gap-y-2"} onSubmit={this.handleSubmit}>
                <label>Search by Name</label>
                <input className={"text-black w-2/3 md:w-1/3"} type="text" value={this.state.value}
                       onChange={this.handleSearch} placeholder="Enter name..."/>
                <ButtonComponent name={"submit"} />
            </form>
            </div>
        )
    }
}

export default Search