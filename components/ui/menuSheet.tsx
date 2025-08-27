import React from 'react'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
} from './sheet'
import Link from "next/link";

interface MenuSheetProps {
    open: boolean,
    onOpenChange: (setOpen: boolean) => void,
}

export const MenuSheet = ({open, onOpenChange}: MenuSheetProps) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>

            <SheetContent side="right" className="w-[90%]">

                <SheetDescription className={"h-full pl-[30px] flex flex-col gap-[10px] justify-center"}>
                    <Link href={"/store"} onClick={() => onOpenChange(false)}><li className={"menu-text"}>Store</li></Link>
                    <li className={"menu-text"}>Fashion Store</li>
                    <li className={"menu-text"}>Education Hub</li>
                    <li className={"menu-text"}>Outlyn Plus</li>
                    <li className={"menu-text"}>Account</li>
                    <li className={"menu-text"}>Contact</li>
                </SheetDescription>

                <SheetFooter>
                    <SheetClose className="self-start rounded-sm px-3 py-2 bg-secondary hover:bg-secondary/80">
                        Close
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
