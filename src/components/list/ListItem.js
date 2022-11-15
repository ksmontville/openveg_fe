import React, { Component } from 'react'

class ListItem extends Component {

    render() {
        const {listData} = this.props
        return(

            <li className={"text-center m-8"} key={listData.id}>
                <ul className={"leading-relaxed tracking-wide"}>
                    <li>
                        {listData.name}
                    </li>
                    {/*<li>*/}
                    {/*    {restaurantData.description}*/}
                    {/*</li>*/}
                    <li>
                        <a className={"text-green-200 underline"} href={listData.web.toString()} target="_blank" rel="noreferrer">{listData.web}</a>
                    </li>
                    <li>
                        {listData.address}
                    </li>
                    <li>
                        {listData.city}, {listData.state} {listData.zip}
                    </li>
                    <li>
                        {listData.vegan ? "Vegan" : "Vegetarian"}
                        {/*Vegan: {restaurantData.vegan.toString()}*/}
                    </li>
                </ul>
            </li>

        )
    }
}

export default ListItem