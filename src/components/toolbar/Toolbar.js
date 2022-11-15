import React, { Component } from 'react'
import CheckboxComponent from '../CheckboxComponent'
import ButtonComponent from '../ButtonComponent'
import Filter from './Filter'
import Search from './Search'
import StateSelect from './StateSelect'
import List from '../list/List'
import ZipCodeSearch from './ZipCodeSearch'

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [], selectedState: "", vegan: false, nameSearch: false, zipSearch: false,
            stateSearch: false, searchType: "restaurants", searchParam: "", searchZip: "", searchName: ""}

        this.toggleNameSearch = this.toggleNameSearch.bind(this)
        this.toggleZipSearch = this.toggleZipSearch.bind(this)
        this.toggleStateSearch = this.toggleStateSearch.bind(this)
        this.handleSearchType = this.handleSearchType.bind(this)

    }

    handleNameSearch = (childData) => {
        this.setState({data: childData, searchParam: "name", searchName: childData[0].name})
        console.log(this.state.searchName)
    }

    handleZipCodeSearch = (childData, childZip) => {
        this.setState({data: childData, searchParam: "zip", searchZip: childData })
    }

    handleStateSearch = (childData) => {
        this.setState({selectedState: childData, searchParam: "state"})
    }

    handleVeganFilter = async (childData) => {
        this.setState({vegan: childData})
    }

    handleVeganData = async (childData) => {
        this.setState({data: childData})
    }

    handleSubmit = (childData) => {
        this.setState({data: childData})
    }

    handleSearchType(event) {
        this.setState({searchType: event.target.value})
        console.log(this.state.searchType)
    }

    toggleNameSearch() {
        this.setState({nameSearch: !this.state.nameSearch})
    }

    toggleZipSearch() {
        this.setState({zipSearch: !this.state.zipSearch})
    }

    toggleStateSearch() {
        this.setState({stateSearch: !this.state.stateSearch})
    }

    render() {
        return(
            <div className={""}>

                <div className={"dev-note flex flex-col items-center justify-center font-bold underline text-red-400 text-center text-xl m-6"}>
                    <p>** THIS APP IS MINIMALLY FUNCTIONAL WITH ONGOING DEVELOPMENT **</p>
                    <p>
                        NOTE: Currently only have data for New Hampshire, New York, Massachusetts, and Vermont.
                    </p>
                </div>

                <p className={"text-2xl text-center p-2 m-6"}>Find me...</p>

                <div className={"search-select flex flex-row justify-center items-center gap-4 m-6"}>
                    <CheckboxComponent name={"Restaurants"} value={"restaurants"} onChange={this.handleSearchType} />

                    <div className={"border border-8 border-red-500 flex flex-col items-center gap-4 p-2"}>
                        <label className={"text-red-500 font-bold"}>Coming Soon...</label>
                        <CheckboxComponent name={"Organizations"} value={"organizations"} onChange={this.handleSearchType} />
                        <CheckboxComponent name={"Events"} value={"events"} onChange={this.handleSearchType} />
                    </div>

                </div>

                <div className={"search-tools m-8"}>

                    <div className={"flex flex-col justify-center items-center m-4"}>
                        <ButtonComponent name={"Search by Name"} onClick={this.toggleNameSearch} />

                        <div className={`${this.state.nameSearch ? "" : "hidden"} w-full`}>
                            <Search type={this.state.searchType} searchName={this.handleNameSearch} />
                        </div>

                    </div>

                    <div className={"flex flex-col justify-center items-center m-4"}>
                        <ButtonComponent name={"Search by Zip Code"} onClick={this.toggleZipSearch}/>

                        <div className={`${this.state.zipSearch ? "" : "hidden"} w-full`}>
                            <ZipCodeSearch type={this.state.searchType} data={this.handleZipCodeSearch} zip={this.handleZipCodeSearch} />
                        </div>

                    </div>

                    <div className={"flex flex-col justify-center items-center m-4"}>
                        <ButtonComponent name={"Search by State"} onClick={this.toggleStateSearch} />

                        <div className={`${this.state.stateSearch ? "" : "hidden"} w-full`}>
                            <StateSelect type={this.state.searchType} getSelectedState={this.handleStateSearch}
                                         vegan={this.state.vegan} submit={this.handleSubmit} />
                        </div>
                    </div>

                    <Filter type={this.state.searchType} param={this.state.searchParam} zip={this.state.searchZip}
                            isChecked={this.state.checked} vegan={this.handleVeganFilter}
                            veganData={this.handleVeganData} currentState={this.state.selectedState} currentName={this.state.searchName} />

                    <List listData={this.state.data} />

                </div>

            </div>
        )
    }
}

export default Toolbar