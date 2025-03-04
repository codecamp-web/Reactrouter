
import { BsFillImageFill, BsPerson, BsReverseLayoutTextSidebarReverse, } from "react-icons/bs"
import { RiDashboardFill } from 'react-icons/ri'
import {AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineMail, AiOutlineSetting} from 'react-icons/ai'


export const lists = [

        {title: "Dashboard",
         icon: <RiDashboardFill/>,
         path: '/'
     },    

        {title: "Pages", 
            icon: <AiOutlineFileText />,
            path:'/pages'
         },

        {title: "Media", 
            spacing: true, icon: <BsFillImageFill />,
            path:'/media'
        },
        {
            title: "Projects",
            icon: <BsReverseLayoutTextSidebarReverse />,
            path:'/projects',
            submenu: true,
            submenuItems: [
                { title: "Project 1"},
                {title: "Project 2"},
                {title: "Project 3"},
            ],
        },
        { title: "Analytics" , icon:<AiOutlineBarChart />},
        { title: "Inbox", icon:<AiOutlineMail />},
        { title: "Profile", spacing: true, icon: <BsPerson />},
        { title: "Settings" ,icon: <AiOutlineSetting />},
        { title: "Logout", icon: <AiOutlineLogout />},        
    ]

       