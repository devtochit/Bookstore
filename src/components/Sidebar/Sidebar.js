import React from 'react'
import Image from 'next/image'
import { HomeIcon } from "@heroicons/react/solid"
import SidebarMenuItem from './SidebarMenuItem'
import {
    BellIcon,
    BookmarkIcon,
    ClipboardIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
    HashtagIcon,
    InboxIcon,
    UserIcon,

} from "@heroicons/react/outline"

function Sidebar() {
    return (
        <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>
            <div className='hoverEffect p-0 hover:bg-blue-400 xl:px-1'>
                <Image
                    width="50"
                    height="50"
                    src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png">

                </Image>
            </div>

            <div className='mt-4 mb-2.5 xl:items-start'>
                <SidebarMenuItem text="Home" Icon={HomeIcon} />
                <SidebarMenuItem text="Explore" Icon={HashtagIcon} />

            </div>

        </div>
    )
}

export default Sidebar