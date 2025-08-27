interface ShoppingPromoCardProps {
    promoText : string,
    customStyle? : string,
    onClick? : () => void,
}

export default function shoppingPromoCard({promoText, customStyle, onClick} : ShoppingPromoCardProps) {
    return <div
        className={`${customStyle} bg-gray-100 w-fit py-[8px] px-[20px] rounded-full flex justify-center items-center mt-[20px] shadow-sm`}
        onClick={onClick}
        role={'button'}
        tabIndex={0}
    >{promoText}</div>
}