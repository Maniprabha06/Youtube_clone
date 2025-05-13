import React from 'react'
import {SideBarItems} from "../static/data";
import "../App.css";

const Sidebar = () => {

  return (
    <div className="yt-scrollbar w-60 bg-yt-black  h-[calc(100vh-53px)] mt-14 fixed top-0 left-0 text-yt-white p-3 overflow-scroll">Sidebar
    <div className='mb-4'>
        {
            SideBarItems.Top.map((item,index)=>{
                return (
                    <div
              key={index}
              className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black my-1 ${
                item.name === "Home" ? "bg-yt-light-black" : "bg-yt-black"
              }`}>
                
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default Sidebar