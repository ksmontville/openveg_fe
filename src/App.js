import React, {Component} from 'react'
import Header from './components/Header'
import Toolbar from './components/toolbar/Toolbar'
import Contribute from './components/Contribute'
import Footer from './components/Footer'


class App extends Component {
    render() {
        return (
            <div className={"App flex flex-col bg-orange-400 min-h-screen"}>
                <div className={"bg-red-400"}>
                    <Header />
                </div>

                <div className={""}>
                    <Toolbar />
                </div>

                <div className={"bg-yellow-400"}>
                    <Contribute />
                </div>

                <div className={"bg-blue-400 mt-auto"}>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App