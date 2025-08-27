import React from 'react'
import Image from "next/image";
import pen from "@/app/assets/pen.png";


export const HeaderImage = () => {
    return (
        <div className={'w-full h-[40%] pt-[70px] flex flex-col items-center justify-center bg-gray-100'}>
            <p className={"bg-gradient-to-br from-purple-500 to-pink-400 bg-clip-text text-transparent"}>For smooth writers only</p>
            <Image src={pen} alt={"pen"} width={180} height={180} className={'size-[270px] mb-[30px]'}/>
        </div>
    )
}
