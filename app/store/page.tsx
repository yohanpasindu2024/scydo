'use client'
import {ProductSchema} from "@/app/api/store/route";

import { MoveUpRight } from 'lucide-react';
import Image from "next/image";
import {useEffect, useState} from "react";
import {FetchProducts} from "@/services/products-service";

interface StoreCardProps {
    product: ProductSchema
}

function StoreCard({product}: StoreCardProps) {
    const { id, name, imageUrl, colorScheme, isPro } = product
    const { from, to, textColor } = colorScheme

    return (
        <div className={`max-sm:w-[87%] max-sm:h-[370px] bg-gradient-to-br ${from} ${to} ml-[7%] rounded-xl mb-[20px] p-[10px]`}>
            <p className={`${textColor} text-[19px] ml-[20px] mt-[20px]`}>{name}</p>
            <p className={"bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent text-[17px] ml-[20px] "}>For smooth writer</p>

            <p className={`${textColor} text-[14px] font-normal ml-[20px] mt-[2px]`}>From Rs. 450 or 12 PCs Rs 1200</p>

            <div className={"relative mt-[10px] w-full max-sm:h-[300px] flex justify-center items-center"}>
                {
                    isPro && <h1 className={'absolute inset-[60px] text-8xl text-yellow-100 text-shadow-amber-200 text-shadow-lg'}>PRO</h1>
                }
                <Image src={imageUrl} alt={"pen"} width={180} height={180} className={'size-[250px] mb-[30px] z-20'}/>
            </div>
        </div>
    )
}

export default function Store() {
    const [products, setProducts] = useState<ProductSchema[]>([])

    useEffect(() => {
        FetchProducts().then((res) => {
            setProducts(res.products)
        })
    }, [])

    return (
        <div className={"h-screen w-screen pt-[35px]"}>
            <h1 className={"max-sm:w-[90%] text-left ml-[7%] text-3xl font-medium mb-[25px]"}>Store. <span className={"text-gray-500"}>
                The best way to buy the products you love.
            </span></h1>

            <p className={"max-sm:w-[90%] text-left ml-[7%] font-bold"}>Need a shopping help?</p>
            <div className={"flex items-center gap-[10px] mb-[30px]"}>
                <p className={"text-left ml-[7%] text-blue-500 font-normal text-[15px]"}>Ask a specialized</p>
                <MoveUpRight className={"size-[15px] text-blue-500"}/>
            </div>
            {
            products.map((product : ProductSchema) => (
                <StoreCard product={product} key={product.id}/>
            ))
        }
            <h1 className={"max-sm:w-[90%] text-left ml-[7%] text-3xl font-medium mb-[25px] mt-[50px]"}>Without Ink? <span className={"text-gray-500"}>
                Smart writing is not possible without ink.
            </span></h1>
        </div>
    )
}
