import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon

} from "@heroicons/react/outline"

function Header() {
    return (
        <div>
            <div className="flex justify-between max-w-6xl bg-red-500">
                <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image
                        src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="relative  w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image
                        src="https://cdn.pixabay.com/photo/2016/08/01/21/02/icon-1562139_960_720.png"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>


                <div className="relative mt-1 p-3 rounded-md">
                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
                    />
                </div>

            </div>
        </div>
    )
}

export default Header