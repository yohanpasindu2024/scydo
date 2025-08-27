import { HeaderSection } from "./sections/headerSection";
import {HeaderImage} from "@/components/ui/headerImage";
import BgButton from "@/components/ui/bg-button";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={'h-screen w-screen'}>

        {/* Header Section */}
        <HeaderSection/>
        <div className={"w-full flex items-center justify-center gap-[10px] pt-2 bg-gray-100"}>
            <BgButton path={"/shop-marker"}/>
            <BgButton customStyle={"border-button"} buttonText={"Learn More"}/>
        </div>

        {/* Header Image */}
        <HeaderImage/>

        {/* Second Promo Banner */}
        <div className={"w-full max-sm:h-[58%] bg-gradient-to-b from-blue-100 to-gray-50 mt-[20px] flex flex-col items-center"}>
            <h1 className={'max-sm:w-[90%] mt-[30px] font-bold text-3xl text-gray-700 text-center leading-[30px]'}>Softa G-218</h1>
            <p className={"max-sm:w-[90%] text-md text-gray-800 text-center mt-[8px]"}>Simply, The Wide Choices</p>

            <div className={"w-full flex items-center justify-center gap-[10px] pt-2 "}>
                <BgButton path={"/"} buttonText={"Learn More"}/>
                <BgButton path={"/shop-marker"} buttonText={"Buy"} customStyle={"border-button"} width={"max-sm:w-[80px]"}/>
            </div>
            <Image src={'/pen3.png'} alt={"pen"} width={200} height={200} className={'w-full mt-[-70px]'}/>
            <p className={"bg-gradient-to-br mt-[-70px] from-purple-500 to-pink-400 bg-clip-text text-transparent"}>For smooth writers only</p>
        </div>

        {/* Third Promo Banner */}
        <div className={"w-full max-sm:h-[68%] bg-gradient-to-b from-black to-gray-900 mt-[20px] flex flex-col items-center"}>
            <h1 className={'max-sm:w-[90%] mt-[30px] font-bold text-3xl text-gray-100 text-center leading-[40px]'}>For schools & Education Academics</h1>
            <p className={"max-sm:w-[90%] text-md text-gray-100 text-center mt-[8px]"}>Get more discounts for bult orders</p>
            <div className={"w-full flex items-center justify-center gap-[10px] pt-2 "}>
                <BgButton path={"/"} buttonText={"Apply Now"}/>
            </div>
            <Image src={'/school.png'} alt={"pen"} width={200} height={200} className={'w-full mt-[50px]'}/>
        </div>

        <div className={"w-full p-[10px] bg-gray-100 mt-[20px]"}>
            <ul className={"list-decimal max-sm:w-[90%] mx-auto"}>
                <li className={"text-gray-700 text-sm mb-[10px]"}>All the products are brand new and we are guaranteed about it. Mostly, all the pens has at least 1 to 2 year writing period. But remember this may depend on your wring type.</li>

                <li className={"text-gray-700 text-sm mb-[10px]"}>At tis time we have only 3 major colors. Example Black, Blue and Red. But if you have any requirement feel free to <a className={"text-blue-500"}>contact</a> us for customize it. we are always here for help you.</li>

                <li className={"text-gray-700 text-sm mb-[10px]"}>Educators, Schools and Academics can <a className={"text-blue-500"}>apply</a> for bulk discounts. First,you should apply the form and contact with us.</li>

                <li className={"text-gray-700 text-sm mb-[10px]"}>Currently we dont offer card payments here. Bank transfers and cash on delivery methods are available. But if you wish to follow card payments then visit our <span className={"text-blue-500 underline"}>Daraz.lk</span> store.</li>
            </ul>

            <p className={"max-sm:w-[90%] mx-auto"}>All the products are brand new and we are guaranteed about it. Mostly, all the pens has at least 1 to 2 year writing period. But remember this may depend on your wring type.</p>

            <hr className={"max-sm:w-[90%] mx-auto my-[40px] bg-gray-700"}/>

            <ol className={"list-none max-sm:w-[90%] mx-auto"}>
                <li className={"text-[13px]"}><Link href={"/store"}>Scydo shop</Link></li>
                <hr className={" mx-auto my-[10px] bg-gray-700"}/>

                <li className={"text-[13px]"}>GIXIN Store</li>
                <hr className={" mx-auto my-[10px] bg-gray-700"}/>

                <li className={"text-[13px]"}>SOFTA Store</li>
                <hr className={" mx-auto my-[10px] bg-gray-700"}/>

                <li className={"text-[13px]"}>Fashion Store</li>
                <hr className={" mx-auto my-[10px] bg-gray-700"}/>

                <li className={"text-[13px]"}>Apply Live App</li>
                <hr className={" mx-auto my-[10px] bg-gray-700"}/>

                <li className={"text-[13px]"}>Education Hub</li>
                <hr className={" mx-auto my-[10px] bg-gray-700"}/>

                <li className={"text-[13px]"}>For Education</li>
                <hr className={" mx-auto my-[10px] bg-gray-700"}/>

                <li className={"text-[13px]"}>Contact us</li>
                <hr className={" mx-auto my-[10px] bg-gray-700"}/>

                <li className={"text-[13px]"}>Support</li>
                <hr className={" mx-auto my-[10px] bg-gray-700"}/>

                <li className={"text-[13px]"}>About Scydo</li>
                <hr className={" mx-auto my-[10px] bg-gray-700"}/>
            </ol>

            <p className={"max-sm:w-[90%] mx-auto text-[13px] mt-[20px] text-gray-600"}>Sri Lanka</p>
            <p className={"max-sm:w-[90%] mx-auto text-[13px] mt-[5px] mb-[20px] text-gray-400"}>Copyright 2025 Sycdo All rights reserved.</p>
        </div>
    </div>
  );
}
