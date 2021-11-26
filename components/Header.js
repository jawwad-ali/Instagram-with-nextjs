import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon
} from "@heroicons/react/outline"
import { useSession, signOut } from "next-auth/react"
import SignInBanner from './SignInBanner'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
// import SignIn from './SignIn'

function Header() {
    const { data: session } = useSession()
    const [open, setOpen] = useRecoilState(modalState)
    console.log("open", open)

    return (
        <div>
            {/* <SignIn /> */}
            <div className="shadow-sm border-b bg-white sticky top-0 z-50">
                <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                    <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                        <Image
                            src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png"
                            priority
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                        <Image
                            src="https://cdn.pixabay.com/photo/2016/08/01/21/02/icon-1562139_960_720.png"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className="max-w-xs">
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
                    <div className="flex items-center justify-end space-x-4">
                        <MenuIcon className="h-6 md:hidden cursor-pointer" />
                        {session ?

                            <>
                                <div className="relative navBtn">
                                    <PaperAirplaneIcon className=" rotate-45" />
                                    <div
                                        className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full 
                                        flex items-center justify-center animate-pulse text-white navBtn ">
                                        3
                                    </div>
                                </div>
                                <HomeIcon className="navBtn" />
                                <PlusCircleIcon className="navBtn" onClick={() => setOpen(true)} />
                                <UserGroupIcon className="navBtn" />
                                <HeartIcon className="navBtn" />

                                <img
                                    src={session?.user?.image} alt={session?.user?.name}
                                    onClick={() => signOut()}
                                    className="h-8 rounded-full cursor-pointer"
                                />
                            </>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
            {!session ? <SignInBanner /> : null}
        </div>
    )
}

export default Header