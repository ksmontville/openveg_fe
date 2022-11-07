import React, { Component } from 'react'
import Filter from './Filter'
import Search from './Search'
import StateSelect from './StateSelect'
import List from '../list/List'
import ZipCodeSearch from './ZipCodeSearch'

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [], selectedState: "", vegan: false}
    }

    handleNameSearch = (childData) => {
        this.setState({data: childData})
    }

    handleZipCodeSearch = (childData) => {
        this.setState({data: childData})
    }

    handleStateSearch = (childData) => {
        this.setState({selectedState: childData})
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

    render() {
        return(
            <div className={""}>
                <Search restaurantName={this.handleNameSearch} />
                <ZipCodeSearch zipCode={this.handleZipCodeSearch} />
                <StateSelect getSelectedState={this.handleStateSearch} vegan={this.state.vegan} submit={this.handleSubmit} />
                <Filter isChecked={this.state.checked} vegan={this.handleVeganFilter}
                        veganData={this.handleVeganData} currentState={this.state.selectedState}/>
                <List data={this.state.data} />
            </div>
        )
    }
}

export default Toolbar