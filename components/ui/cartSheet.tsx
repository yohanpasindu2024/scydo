'use client'

import React from 'react'

import {
    Sheet,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetContent,
} from "@/components/ui/sheet";

interface CartSheetProps {
    open: boolean,
    onOpenChange: (setOpen: boolean) => void,
}

export const CartSheet = ({open, onOpenChange}:CartSheetProps) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side={"right"} className={"w-80"}>

            </SheetContent>
        </Sheet>
    )
}
