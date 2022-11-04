import React, {Component} from 'react'
// import Header from './components/Header'
import Toolbar from './components/toolbar/Toolbar'
// import Contribute from './components/Contribute'
import Footer from './components/Footer'


class App extends Component {
    render() {
        return (
            <div className={"App flex flex-col justify-center align-start min-h-screen"}>
                <div className={"bg-green-600"}>

                </div>

                <nav className={"leading-loose tracking-wide text-lg"}>
                    <div className={"flex flex-row flex-nowrap justify-between items-center p-4"}>
                        <ul>
                            <li>
                                OpenVeg
                            </li>
                        </ul>
                        <ul className={"flex flex-row flex-nowrap justify-center items-center gap-x-4"}>
                            <li>
                                API
                            </li>
                            <li>
                                Contribute
                            </li>
                            <li>
                                Login
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className={""}>
                    <Toolbar />
                </div>

                <div className={"bg-yellow-400"}>
                    {/*<Contribute />*/}
                </div>

                <div className={"bg-green-600 mt-auto"}>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App