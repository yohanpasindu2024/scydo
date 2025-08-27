'use client'
import React, {useState} from 'react'

import { AlignRight, ShoppingBag, Search } from "lucide-react";
import {MenuSheet} from "@/components/ui/menuSheet";
import {CartSheet} from "@/components/ui/cartSheet";

export const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)

    return (
        <div className={'w-full h-10 bg-gray-100 flex items-center justify-end px-[5%]'}>
            <div className={'flex items-center gap-[25px]'}>
                <Search className={'text-gray-800'} size={20}/>
                <ShoppingBag className={'text-gray-800'} size={18} onClick={() => setCartOpen(true)}/>
                <AlignRight className={'text-gray-800'} size={20} onClick={() => setOpen(true)}/>
            </div>

            <MenuSheet open={open} onOpenChange={setOpen}/>
            <CartSheet open={cartOpen} onOpenChange={setCartOpen}/>
        </div>
    )
}
