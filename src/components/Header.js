import React from 'react' 
import logo from '../images/logo10.png'
import bear from '../images/redditBearTar.jpg'
import { useState,
         useContext
} from 'react'
import Button from './Button'
import { 
  ChevronDownIcon,
  SearchIcon,
  BellIcon,
  LoginIcon,
  ChatIcon,
  PlusIcon,
  UserIcon 
} from '@heroicons/react/outline'


function Header () {
  const [userDropdownVisibilityClass, setuserDropdownVisibiltyClass] = useState('hidden');
  function toggleUserDropdown() {
    if (userDropdownVisibilityClass === 'hidden') {
      setuserDropdownVisibiltyClass('block');
    } 
    else {
      setuserDropdownVisibiltyClass('hidden');
    }
  }
  
    
  return (
        <header className="w-full bg-reddit_dark p-2">
        <div className="mx-4 flex relative">
          <img src={logo} alt="logo" className="w-8 h-8 mr-2"></img>        
          <form action="" className="bg-reddit_dark-brighter p-1 px-3 flex flex-grow border border-gray-600 rounded-md">
            <SearchIcon className="h-7 w-7 p-1 bg-grey-300" />          
            <input type="text" className="bg-reddit_dark-brighter rounded-md p-1 pl-2 pr-0 block h-6 text-sm focus:outline-none text-white" placeholder="Search" />
          </form>


          {/* <button className="px-2 py-1">
          </button>
          <button className="px-2 py-1">
            <ChatIcon className="h-6 w-6" />
          </button>          
          <button className="px-1 py-1">
            <PlusIcon className="h-6 w-7" />
             </button> */}
        <div className="mx-2">
            <Button className="mr-1">Log In</Button>
            <Button className="">Sign Up</Button>
        </div>
        
          <button className="rounded-md flex ml-4 border border-gray-700" onClick={() => toggleUserDropdown()}>
              <UserIcon className="w-6 h-6 text-gray-400 m-1" />                        
            <ChevronDownIcon className="text-gray-500 h-6 w-6 mt-2 m-1"  />                          
          </button>
          <div className={"absolute right-0 top-8 bg-reddit_dark border border-gray-700 z-10 rounded-md text-reddit_text overflow-hidden "+userDropdownVisibilityClass}>
             <button className="flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm">
                <LoginIcon className="w-5 h-5 mr-2" /> 
               Log In / Sign Up
              </button>
          </div>
         
        </div>
      </header>
    )
}

export default Header
