import React, { Component } from 'react'
import './App.css';
import FocusInput from './components2/FocusInput';
import FragmentDemo from './components2/FragmentDemo';
import FRParentInput from './components2/FRParentInput';
import ParentComp from './components2/ParentComp';
import RefsDemo from './components2/RefsDemo';
import Table from './components2/Table';
export class App2 extends Component {
    render() {
        return (
            <div className="App">
                <FRParentInput/>
                {/* <FocusInput/> */}
                {/* <RefsDemo/> */}
               {/* <ParentComp/> */}
                {/* <Table/> */}
                {/* <FragmentDemo/> */}
            </div>
        )
    }
}

export default App2
