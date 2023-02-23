import React, { Component } from 'react'
import CheckboxComponent from '../global/CheckboxComponent'
import ButtonComponent from '../global/ButtonComponent'
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

    strikeStr(str) {
        let new_str = ""
        const str_split = str.split("")

        for (let i = 0; i < str_split.length; i++) {
            new_str += str_split[i] + "\u0336"
        }

        return new_str
    }

    render() {
        return(
            <div className={"search-tools"}>

                <p className={"text-2xl text-center p-2 m-6"}>Search for...</p>

                <div className={"search-select flex flex-row justify-center items-center gap-4 m-6"}>
                    <CheckboxComponent name={"Restaurants"} value={"restaurants"} onChange={this.handleSearchType} />
                    <CheckboxComponent name={this.strikeStr("Organizations")} value={"organizations"} onChange={this.handleSearchType} />
                    <CheckboxComponent name={this.strikeStr("Events")} value={"events"} onChange={this.handleSearchType} />
                </div>

                <p className={"text-2xl text-center p-2 m-6"}>Search by...</p>

                <div className={"search-buttons flex flex-row justify-center items-center gap-4 m-6"}>
                    <ButtonComponent name={"Name"} onClick={this.toggleNameSearch} />
                    <ButtonComponent name={"Zip Code"} onClick={this.toggleZipSearch}/>
                    <ButtonComponent name={"State"} onClick={this.toggleStateSearch} />
                </div>

                <div className={"search-inputs"}>
                     <div className={`${this.state.nameSearch ? "" : "hidden"} w-full`}>
                            <Search type={this.state.searchType} searchName={this.handleNameSearch} />
                    </div>

                    <div className={`${this.state.zipSearch ? "" : "hidden"} w-full`}>
                            <ZipCodeSearch type={this.state.searchType} data={this.handleZipCodeSearch} zip={this.handleZipCodeSearch} />
                    </div>

                    <div className={`${this.state.stateSearch ? "" : "hidden"} w-full`}>
                            <StateSelect type={this.state.searchType} getSelectedState={this.handleStateSearch}
                                         vegan={this.state.vegan} submit={this.handleSubmit} />
                    </div>


                    <div>
                        <Filter type={this.state.searchType} param={this.state.searchParam} zip={this.state.searchZip}
                                isChecked={this.state.checked} vegan={this.handleVeganFilter}
                                veganData={this.handleVeganData} currentState={this.state.selectedState} currentName={this.state.searchName} />
                    </div>

                </div>

                <div>

                        <List listData={this.state.data} />
                </div>
            </div>


        )
    }
}

export default Toolbar