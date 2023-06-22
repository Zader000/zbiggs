import {SideBar, SideBarIcon} from "../components/SideBar";
import React from "react";
import {BsFillPencilFill, BsFillPersonLinesFill, BsHouseFill} from "react-icons/bs";
import {HomePage} from "./HomePage";
import {ResumePage} from "./ResumePage";
import {ProjectsPage} from "./ProjectsPage";

export function MainPage()
{
    const [page, setPage] = React.useState(0);
    return(
        <div className="">
            <SideBar>
                <p className="mx-auto font-extrabold mt-4 mb-2">ZBIGGS</p>
                <SideBarIcon icon={<BsHouseFill/>} tooltip={'Home'} onClick={()=>setPage(0)} isActive={page === 0}/>
                <SideBarIcon icon={<BsFillPersonLinesFill/>} tooltip={'Resume'} onClick={()=>setPage(1)} isActive={page === 1}/>
                <SideBarIcon icon={<BsFillPencilFill/>} tooltip={'Projects'} onClick={()=>setPage(2)} isActive={page === 2}/>
            </SideBar>
            {page === 0 && <HomePage/>}
            {page === 1 && <ResumePage/>}
            {page === 2 && <ProjectsPage/>}
        </div>
    )
}