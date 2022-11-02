import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import * as FcIcons from "react-icons/fc"
import { DashboardLinks, NavLinks } from '../../../component/navigationData'
import "./Sidebar.css"


const Sidebar = () => {



    return (
        <div className='sidebar__main__container'>
            <Link to="/" className='sidebar_top' >
                <FcIcons.FcBullish fontSize={24} />
                <span className='sidebar_top_span'>Open POS</span>
            </Link>

            <div className='sidebar__links'>
                {NavLinks.map((item) => <SideBar key={item.key} item={item}/>)}
            </div>


            <div className='sidebar_bottom'>
                {DashboardLinks.map(item => <SideBar key={item.key} item={item} />)}
            </div>
        </div>
    )
}


const SideBar = ({ item }) => {
    const [index, setIndex] = useState("dashboard")
    const handleClick = () => {
        setIndex(item.path)
    }

    const {pathname} = useLocation()
    return (<Link to={item.path} className={index === pathname ? "sidebar__link active" : "sidebar__link"} onClick={handleClick}>
       {item.icon}  <span className=''> {item.lable} </span>
    </Link>)
}
export default Sidebar