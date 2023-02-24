import React,{ Component } from "react"
import { Link  } from "react-router-dom";

class ErrorPage extends Component {
    render() {
        return(
            <div className={"flex flex-col items-center justify-center gap-8 bg-green-900 rounded-md max-w-fit p-8 text-4xl text-center m-auto"}>
                <p className={"text-6xl"}>404 Error</p>
                <p>Oops, page does not exist!</p>
                <Link className={"text-green-200 underline"} to="/">Back to Home</Link>
            </div>
        )
    }
}

export default ErrorPage