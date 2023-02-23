import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return(
            <div className={"leading-loose tracking-wide text-center p-2"}>
                <p>Kyle Montville, &copy;2022-2023 -- Icons by
                    <a className={"underline"} href="icons8.com" target="_blank"> Icons8 </a>
                  -- Photo by <a className={"underline"} href="https://unsplash.com/es/@alexkondratiev?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alex Kondratiev</a>
                </p>
            </div>
        )
    }
}

export default Footer