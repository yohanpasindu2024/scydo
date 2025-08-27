'use client'

import Link from "next/link";
import React from "react";

interface BgButtonProps {
    buttonText?: string,
    path?: string,
    customStyle?: string,
    width?: string,
    onClick?: () => void,
}

export default function BgButton({buttonText, path, customStyle, width, onClick}: BgButtonProps) {
    return (
        <Link href={path ? path : "/"} className={`${customStyle ? customStyle : "bg-button"} ${width ? width : "max-sm:w-[125px]"}`} onClick={onClick}>
            {buttonText ? buttonText : "Shop Marker"}
        </Link>
    )
}