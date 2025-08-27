import React from 'react'
import { HeaderText } from '@/components/ui/headerText'

export const HeaderSection = () => {
    return (
        <header className={"w-full max-sm:h-[13%] flex flex-col items-center justify-center mt-2 bg-gray-100"}>
            <HeaderText/>
        </header>
    )
}
