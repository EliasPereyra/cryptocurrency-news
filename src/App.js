import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'

import { Navbar } from './components/'
import { CryptoDetails, Cryptocurrencies, Exchanges, Homepage, News } from './pages'

import './App.css'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                            <Route exact path="/crypto/:coinId" element={<Exchanges />} />
                            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                            <Route exact path="/news" element={<News />} />
                        </Routes>
                    </div>
                </Layout>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default App;
