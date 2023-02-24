import React, {Component} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import NavbarComponent from './components/global/NavbarComponent'
import HomePage from "./routes/HomePage";
import SearchPage from "./routes/SearchPage";
import ContributePage from "./routes/ContributePage";
import AboutPage from "./routes/AboutPage";
import APIPage from "./routes/APIPage";
import LoginPage from "./routes/LoginPage";
import ErrorPage from "./routes/ErrorPage";


class App extends Component {
    render() {
        return (
            <div className={"App flex flex-col justify-center align-start min-h-screen"}>

                <div className={"bg-green-600"}>
                    <Header />
                </div>

                 <nav className={""}>
                    <BrowserRouter>
                        <NavbarComponent />
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="search" element={<SearchPage />} />
                                <Route path="contribute" element={<ContributePage />} />
                                <Route path="about" element={<AboutPage />} />
                                <Route path="api" element={<APIPage />} />
                                <Route path="login" element={<LoginPage />} />
                                <Route path="*" element={<ErrorPage />} />
                            </Routes>
                </BrowserRouter>
                </nav>


                <div className={"bg-green-600 border-t-4 mt-auto"}>
                    <Footer />
                </div>

            </div>
        )
    }
}

export default App