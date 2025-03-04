
import { NavLink } from "react-router-dom"
import { lists } from "./data"

const Footer = () => {
  return (
    <>
    <div className="sm:hidden
    bg-neutral-900 text-white absolute bottom-0
     w-full p-8 flex justify-between">
      {lists.map((list,index)=>(
        <NavLink 
        to={list.path}
        className='text-2xl'
        key={index}>
          {list.icon}
        </NavLink>
      ))}
    </div>
    </> 
  )
}

export default Footer
