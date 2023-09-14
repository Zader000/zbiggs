import React from "react";
import {BsFileEarmarkPersonFill, BsFillPencilFill, BsFillPersonLinesFill, BsHouseFill} from "react-icons/bs";
import {NavLink, Outlet} from "react-router-dom";


export function SideBar()
{
    return(
       <>
           <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
               <p className="mx-auto font-extrabold mt-4 mb-2">ZBIGGS</p>
               <SideBarIcon icon={<BsHouseFill/>} tooltip={'Home'} route={'/'}/>
               <SideBarIcon icon={<BsFileEarmarkPersonFill/>} tooltip={'Resume'} route={'/resume'}/>
               <SideBarIcon icon={<BsFillPencilFill/>} tooltip={'Projects'} route={'/projects'}/>
               <SideBarIcon icon={<BsFillPersonLinesFill/>} tooltip={'Contact'} route={'/contact'}/>
           </div>
           <Outlet/>
       </>
    );
}

interface SideBarIconProps
{
    icon: React.ReactNode;
    tooltip: string;
    route: string;
}

export function SideBarIcon({ icon, tooltip, route }: SideBarIconProps)
{
    return(
        <NavLink className={({isActive}) => (`sidebar-icon group ${isActive ? 'active-icon' : ''}`)}
              to={route}>{icon} <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span></NavLink>
    )
}