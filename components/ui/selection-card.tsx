'use client'

import {MarkerName, PenAmount, Colors} from "@/constants/constants";

interface SelectionCardProps {
    name?: MarkerName | PenAmount | Colors,
    title: string,
    subTitle? : string,
    price?: string,
    amount?: number,
    customStyle? : string,
    disable? : boolean,
    selected? : boolean,
    setSelection? : (name: MarkerName | PenAmount | Colors | null) => void,
}

export default function SelectionCard(
    {name, title, subTitle, price, amount, customStyle, disable = false, selected = false, setSelection} : SelectionCardProps,
) {
    return (
        <div
            className={`max-sm:w-full max-sm:h-[100px] py-[10px] px-[20px]  rounded-xl flex  items-center justify-between ${selected ? 'border-blue-400 border-2' : `${disable ? 'border-gray-300 border-1' : 'border-gray-400 border-1'}`} ${customStyle ? customStyle : ''}`}
            role={'button'}
            tabIndex={0}
            onClick={ () => {
                if(!disable) {
                    setSelection?.(name ?? null)
                }
            } }
        >
            <div
                className={"max-sm:w-[70%]"}
            >
                <h2 className={`text-xl font-medium ${disable ? 'text-gray-600' : 'text-gray-800'}`}>{ title }</h2>
                {
                    subTitle && <p className={`font-normal ${disable ? 'text-gray-600' :'text-gray-700'}`}>{subTitle}</p>
                }
            </div>

            <div
                className={`max-sm:w-[30%] flex flex-col items-center justify-end text-end ${disable ? 'text-gray-600' : 'text-gray-700'}`}
            >
                <p>LKR {price ? price : 300} For {amount ? amount : 1} PCS</p>
            </div>
        </div>
    )
}