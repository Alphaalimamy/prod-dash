import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './sidebar/Sidebar'
import "./Shared.css"
const SharedLayout = () => {
    return (
        <div className='main-container'>
            <div className='sidebar-container'>
                <Sidebar/>
            </div>
            <div className="right-container">
                <div className='bg-teal-100'>
                    <Header/>
                </div>
                <div><Outlet /></div>
            </div>
        </div>
    )
}

export default SharedLayout