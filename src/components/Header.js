import React from 'react'
 
import logo from '../images/logo10.png'
import bear from '../images/redditBearTar.jpg'


function Header () {
    return (
        <header className="w-full bg-reddit_dark p-2">
        <div className="mx-4 flex">
          <img src={logo} alt="logo" className="w-8 h-8 mr-2"></img>        
          <form action="" className="bg-reddit_dark-brighter p-1 px-3 flex flex-grow border border-gray-600 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 p-1 bg-grey-300" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
            <input type="text" className="bg-reddit_dark-brighter rounded-md p-1 pl-2 pr-0 block h-6 text-sm focus:outline-none text-white" placeholder="Search" />
          </form>
          <button className="px-2 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          </button>
          <button className="px-2 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="grey">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg></button>          
          <button className="px-1 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7" viewBox="0 0 20 20" fill="grey">
             <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg></button>
          <button className="rounded-md flex">
            <div className="w-6 h-6">
              <img src={bear} alt="avatar" className=" mt-2 rounded-md"></img>
            </div>            
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-2" viewBox="0 0 20 20" fill="gray">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>            
          </button>
        </div>
      </header>
    )
}

export default Header
