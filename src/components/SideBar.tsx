import {BsPlus, BsFillPersonLinesFill, BsFillLightningFill, BsGearFill, BsHouseFill} from "react-icons/bs";
import React from "react";

interface SideBarProps
{
    children: React.ReactNode;
}

export function SideBar(props: SideBarProps)
{
    return(
        <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            {props.children}
        </div>
    );
}

interface SideBarIconProps
{
    icon: React.ReactNode;
    tooltip?: string;
    onClick?: () => void;
}

export function SideBarIcon({ icon, tooltip, onClick }: SideBarIconProps)
{
    if (!tooltip)
    {
        tooltip = "Tooltip 💡";
    }
    return(
        <div className="sidebar-icon group" onClick={onClick}>
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
        </div>
    )
}