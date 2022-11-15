import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
    render() {
        const { listData } = this.props
        return(
            <div>
                <ul>
                    {listData.map(item => (
                        <ListItem listData={item} /> ))}
                </ul>
            </div>
        )

    }
}

export default List