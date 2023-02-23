import React, { Component } from 'react'

class ListItem extends Component {

    titleCase(str) {
        str = str.toLowerCase().split(' ')
        for(let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
        }
        return str.join(' ')
    }

    render() {
        const {listData} = this.props
        return(

            <li className={"text-center m-8"} key={listData.id}>
                <ul className={"leading-relaxed tracking-wide"}>
                    <li>
                        {listData.name}
                    </li>
                    <li>
                        {listData.description}
                    </li>
                    <li>
                        <a className={"text-green-200 underline"} href={listData.web.toString()} target="_blank" rel="noreferrer">{listData.web}</a>
                    </li>
                    <li>
                        {listData.address}
                    </li>
                    <li>
                        {listData.city ? this.titleCase(listData.city) : "[City]"}, {this.titleCase(listData.state)} {listData.zip ? listData.zip : "[Zip]"}
                    </li>
                    <li>
                        {listData.vegan ? "Vegan" : "Vegan Options"}
                    </li>
                </ul>
            </li>

        )
    }
}

export default ListItem