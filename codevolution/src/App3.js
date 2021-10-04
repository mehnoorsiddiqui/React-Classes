import React, { Component } from 'react'
import PortalDemo from './components3/PortalDemo'
import './App.css';
import ErrorBoundary from './components3/ErrorBoundary';
import Hero from './components3/Hero';
class App3 extends Component {
    render() {
        return (
            <div className="App">
                <ErrorBoundary>
                    <Hero heroName="Batman" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero heroName="Superman" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero heroName="Joker" />
                </ErrorBoundary>

                {/* <PortalDemo/> */}
            </div>
        )
    }
}

export default App3
