import React, { Component } from 'react'
import axios from "axios";

const states_data = ["CA", "CT", "DE", "MA", "MD", "ME", "NH", "NJ", "NY", "PA", "RI", "VA", "VT"]
const api_url = process.env.REACT_APP_API_URL

class StateSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {usState: "", usStates: []}

        this.handleSelect = this.handleSelect.bind(this)
    }

    async handleSelect(event) {
        this.setState({usState: event.target.value}, await this.handleSubmit)
    }

    async handleSubmit() {
        this.props.getSelectedState(this.state.usState)
        const response = await axios.get(`${api_url}/${this.props.type}/?state=${this.state.usState.toLowerCase()}&vegan=${this.props.vegan}`)
        const data = response.data
        this.props.submit(data)
    }

    componentDidMount() {
        this.setState({usStates: [
            {"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},
            {"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},
            {"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},
            {"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},
            {"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},
            {"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},
            {"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},
            {"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},
            {"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},
            {"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},
            {"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},
            {"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},
            {"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},
            {"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},
            {"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},
            {"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},
            {"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},
            {"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},
            {"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},
            {"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},
            {"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},
            {"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},
            {"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},
            {"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},
            {"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]})
    }

    strikeStr(str) {
        let new_str = ""
        const str_split = str.split("")

        for (let i = 0; i < str_split.length; i++) {
            new_str += str_split[i] + "\u0336"
        }

        return new_str
    }

    render() {
        const { usStates } = this.state

        const usStatesList = usStates.map((state) => {
            return (
                <option key={state.abbreviation} value={state.name}>{states_data.includes(state.abbreviation) ? state.name : this.strikeStr(state.name) }</option>
            )
        })
        return(
            <div className={"m-4 text-black"}>
                <form className={"flex flex-col justify-center items-center gap-y-2"}>
                    <label className="text-white">Search by State (strike-through states coming soon!)</label>
                    <select className={"w-2/3 md:w-1/3"} onChange={this.handleSelect}>
                        <option value="null" defaultValue="">---</option>
                        <option value="" defaultValue="">Show All</option>
                        {usStatesList}
                    </select>
                </form>
            </div>
        )
    }
}

export default StateSelect