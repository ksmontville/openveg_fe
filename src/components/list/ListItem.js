import React, { Component } from 'react'

class ListItem extends Component {

    render() {
        const {restaurantData} = this.props
        return(
            <li className={"m-8"} key={restaurantData.id}>
                <ul className={"leading-relaxed tracking-wide"}>
                    <li>
                        {restaurantData.name}
                    </li>
                    {/*<li>*/}
                    {/*    {restaurantData.description}*/}
                    {/*</li>*/}
                    <li>
                        <a href={restaurantData.web.toString()} target="_blank" rel="noreferrer">{restaurantData.web}</a>
                    </li>
                    <li>
                        {restaurantData.address}
                    </li>
                    <li>
                        {restaurantData.city}, {restaurantData.state} {restaurantData.zip}
                    </li>
                    <li>
                        {restaurantData.vegan ? "Vegan" : "Vegetarian"}
                        {/*Vegan: {restaurantData.vegan.toString()}*/}
                    </li>
                </ul>
            </li>
        )
    }
}

export default ListItem