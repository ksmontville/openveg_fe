import React, {Component} from 'react'
// import Header from './components/Header'
import Toolbar from './components/toolbar/Toolbar'
// import Contribute from './components/Contribute'
import Footer from './components/Footer'
import NavbarComponent from './components/NavbarComponent'


class App extends Component {
    render() {
        return (
            <div className={"App flex flex-col justify-center align-start min-h-screen"}>
                <div className={"bg-green-600"}>
                {/*Header*/}
                </div>

                <nav className={""}>
                    <NavbarComponent />
                </nav>

                <div className={""}>
                    <Toolbar />
                </div>

                <div className={"bg-yellow-400"}>
                    {/*<Contribute />*/}
                </div>

                <div className={"bg-green-600 border-t-4 mt-auto"}>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App