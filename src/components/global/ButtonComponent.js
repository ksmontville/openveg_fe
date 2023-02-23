import React, { Component } from 'react'

class ButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "", onClick: ""}

    }

    render() {

        return(

            <div>
                <button className={`rounded-md bg-green-600 hover:bg-green-400 p-2`} onClick={this.props.onClick}
                        type={"submit"}>{this.props.name}</button>
            </div>

        )

    }

}

export default ButtonComponent