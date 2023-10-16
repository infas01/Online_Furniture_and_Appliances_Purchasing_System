import React from 'react';
import { useEffect, useState } from "react"
import { Button } from '@material-tailwind/react'

export default () => {

    const [state, setState] = useState(false)
    const [drapdownState, setDrapdownState] = useState({ isActive: false, idx: null })
    

    const submenuNav = [
        { title: "Home", path: "/Main" ,isDrapdown: false},
        { title: "Furnitures", path: "javascript:void(0)" ,isDrapdown: false},
        { title: "Appliances", path: "javascript:void(0)" ,isDrapdown: false},
        { title: "Hot Deals", path: "javascript:void(0)" ,isDrapdown: false},
        { title: "About Us", path: "javascript:void(0)",isDrapdown: false }
        
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".nav-menu")) setDrapdownState({ isActive: false, idx: null });
        };
    }, [])


    return (
        <header className="text-base lg:text-sm fixed top-0 w-full z-50">
            <div className={`bg-white border-b border-gray-500 items-center gap-x-14 px-4 lg:flex lg:px-8 lg:static ${state ? "h-full fixed inset-x-0" : ""}`}>
                <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                    <a href="javascript:void(0)">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAABYlBMVEX////v7+/y8vLn5+e/Uf4AZOr///29U/7///v//v8AZOj///n9//7///hhRPQSjvIcoPN5SPlnRvUGcu7///NRQ/YVlPMOh++GSvgJdu+gTvogqvUepvQXmPQNge6LS/cYnPEEbeysT/0is/Qir/RBQfN6degUlfK62el+auYWou5oQfkKf+4Leux6Q/m20uyQbOgAWeu1SfoAZeLZ2dmo2eWl5fS66PLZ8/jT2e67wuiqrPS1v9YitOx0zuupqulfYuUrLegvNvEmLfNdbeIyt+aIgulARO2W0+4Aqenp5/ZjU96Oh95KrOPU0fA2pOeAweBUM+gAitzp+vSMdumnd/CSbO2gwOWMW++/f/aQr+uFS/DDh/RzmufKk/Rdp+lJhOLWpux2seDFsezev+ymgufm0Om0Ue9Mf+TCYesPadpXmeGYRP2eUezSouoAUeRQjeXw2fPkufK8N/a/YPPy3vH5pt8dAAAIK0lEQVR4nO3ci1caVx7AcUS43OHO9cUIggqCsFoDWmbS6m623dS0dUu7bbekcWOyJm4orol1qzX//97HDEoUfta0XM+5v28S8zh6DnzOfcydCLH7Y9jQ7sfGYtjQxpEIConAkAgMicCQCAyJwJAIDInAkAgMicCQCAyJwJAIDInAkAgMicCQCAyJwJAIDInAkAgMicCQCAyJwJAIDInAkAgMicCQCAyJwJAIDInAkAgMicCQCAyJwJAIDInAkAgMicCQCAyJwJAIDInAkAgMicCQCAyJwJAIzACRS6njurf4QsYIjZHf/fFAmSAihNPbfCERsd/70cCZIPro480tRn/rcCCUx//8lwd/HfkwMkH0ybL48emmy0jMcZwbfQ1nfOxvDz97tP3oc2uIlperX3zcvtl8o2J+jX/52aNabWdn+/M/+NFdzQhRVQgti49fbDIXViKcswfb27WdmsgWouWw+a/+zuG9jdCxh9u12VpNE9kw0agaRdVq9ZPq/FefUtcduhxRSsd3arOzIVHtTzYQqYlWrc6rFr6nZOg4Yl5rZ1ZlE9GyJJoPicRcG7ockfjXs5eItq0hUkILCwvi19rm0MtB9s1sP9GoHmYvM0ThCJJNTf1jCBGNfftoti87iHrr0JRsbfGjgUaUeA/7hWq2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"
                            width={80}
                            height={100}
                            alt="Logo"
                        />
                        <p className="font-semibold">&nbsp;&nbsp;&nbsp;&nbsp;USHAM</p>
                        <p className="font-semibold">SHOWROOM</p>
                    </a>
                    
                    <div className="lg:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}>
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    </svg>

                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`nav-menu flex-1 pb-28 mt-8 mr-10 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${state ? "" : "hidden"}`}>
                    <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
                        
                        <div className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                        <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                        submenuNav.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    {
                                        item.isDrapdown ? (
                                            <button className="w-full flex items-center justify-between gap-1 text-gray-700 hover:text-indigo-600"
                                                onClick={() => setDrapdownState({ idx, isActive: !drapdownState.isActive })}
                                            >
                                                {item.title}
                                                {
                                                    drapdownState.idx == idx && drapdownState.isActive ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                            <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                                                        </svg>

                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                        </svg>
                                                    )
                                                }
                                            </button>
                                        ) : (
                                            <a href={item.path} className="block text-black-700 font-bold hover:text-indigo-600">
                                                {item.title}
                                            </a>
                                        )
                                    }
                                    {
                                        item.isDrapdown && drapdownState.idx == idx && drapdownState.isActive ? (
                                            <div className="mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0">
                                                <ul className='max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3'>
                                                    {item?.navs.map((dropdownItem, idx) => (
                                                        <li key={idx}>
                                                            <p className="text-indigo-600 text-sm">{dropdownItem.label}</p>
                                                            <ul className='mt-5 space-y-6'>
                                                                {dropdownItem.navs.map((navItem, idx) => (
                                                                    <li key={idx} className="group">
                                                                        <a href={navItem.path} className='flex gap-3 items-center'>
                                                                            <div className='w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14'>
                                                                                {navItem.icon}
                                                                            </div>
                                                                            <div>
                                                                                <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">{navItem.title}</span>
                                                                                <p className='text-sm text-gray-600 group-hover:text-gray-800 mt-1'>{navItem.desc}</p>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : ""
                                    }
                                </li>
                            )
                        })
                    }
                   
                            <div className='flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0'>
                                <li>
                                <form onSubmit={(e) => e.preventDefault()} className='flex-1 items-center justify-start pb-4 lg:flex lg:pb-0'>
                                    <div className="flex items-center gap-1 px-2 border border-blue-500 rounded-lg" >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="w-full lg:w-40 px-2 py-2 text-black-500 bg-transparent rounded-md outline-none"
                                        />
                                    </div>
                                </form>
                                </li>

                                <li>
                                    <Button  onClick={() => window.location.href="/LogIn"} 
                                        className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                        Log In
                                    </Button> 
                                </li>

                                 <li>
                                    <Button  onClick={() => window.location.href="/SignUp"} 
                                        className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                        Sign Up
                                    </Button> 
                                </li>
                            </div> 
                        </ul>
                    </div>
                    </ul>
                </div>
            </div>
        </header>


    )
}