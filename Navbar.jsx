import { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { lists } from "./data";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState({});
    const [activeIndex, setActiveIndex] = useState(null); // Track clicked item

    // Toggle submenu for a specific item
    const toggleSubmenu = (index) => {
        setSubmenuOpen((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    // Handle menu click
    const handleMenuClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="hidden sm:flex text-white">
            <div className={`bg-black h-screen p-5 pt-5 duration-200 ${open ? "w-72" : "w-20"} relative`}>
                <BsArrowLeftShort
                    className={`bg-white text-purple-800 text-3xl rounded-full absolute -right-3 top-9 border border-purple-700 cursor-pointer 
                        ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="inline-flex">
                    <FaLocationArrow className={`bg-red-600 text-4xl rounded cursor-pointer block float-left mr-2 duration-300 p-1  
                        ${open && "rotate-[360deg]"}`}
                    />
                    <h1 className={`origin-left font-bold text-2xl duration-300 font-mono
                         ${!open && "scale-0"}`}>
                        Gradient
                    </h1>
                </div>
                <div className={`flex  items-center rounded-md bg-white mt-6  py-2 ${!open ? "px-2.5" : "px-4"}`}>
                    <BsSearch className={`text-black text-lg ${open && "mr-2"} block float-left cursor-pointer`} />
                    <input type="search" placeholder="Search" className={`text-base bg-transparent w-full text-black focus:outline-none ${!open && "hidden"}`} />
                </div>
                <ul >
                    {lists.map((list, index) => (
                        <li key={index} onClick={() => handleMenuClick(index)}>
                            <NavLink
                                to={list.path}
                                className={`flex items-center gap-x-4 cursor-pointer p-2 rounded-md transition-all duration-200
                                    ${list.spacing ? "mt-5" : "mt-2"} 
                                    ${activeIndex === index ? "bg-purple-700 text-white" : "text-gray-400 hover:bg-gray-700 hover:text-white"}
                                    ${!open ? 'my-7' : 'my-2'}
                                    `}
                            >
                                <span className={` ${!open ? 'text-lg' : 'text-base'}
                                     block float-left`
                                    }>
                                    {list.icon}
                                </span>
                                <span className={`${!open && "hidden"}`}>{list.title}</span>
                                {list.submenu && (
                                    <BsChevronDown
                                        className={`ml-auto transition-transform ${submenuOpen[index] ? "rotate-180" : ""}`}
                                        onClick={() => toggleSubmenu(index)}
                                    />
                                )}
                            </NavLink>
                            {list.submenu && submenuOpen[index] && open && (
                                <ul>
                                    {list.submenuItems.map((submenuItem, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className="text-gray-300 flex items-center gap-x-4 cursor-pointer p-2 
                                                hover:bg-white hover:text-black rounded-md px-5"
                                        >
                                            {submenuItem.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}