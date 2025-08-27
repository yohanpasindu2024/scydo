'use client'

import {MarkerName, PenAmount, Colors} from "@/constants/constants";

import BodyHeader  from "@/components/ui/body-header";
import ShoppingPromoCard  from "@/components/ui/shopping-promo-card";
import SelectionCard  from "@/components/ui/selection-card";
import HelpCard  from "@/components/ui/help-card";
import ImagePlaceholder  from "@/components/ui/image-placeholder";
import ColorSelector  from "@/components/ui/color-selector";
import {useEffect, useRef, useState} from "react";


export default function ShopMarker() {
    const [brandSelected, setBrandSelected] = useState<MarkerName | null>(null)
    const [penAmount, setPenAmount] = useState<number | null>(null)
    const [color, setColor] = useState<Colors | null>(null)
    const [inkDisabled, setInkDisabled] = useState<boolean>(false)
    const [inkAmount, setInkAmount] = useState<{color: Colors | null, amount: number}>({color: color, amount: 1})


    const hasAutoScrolledRef = useRef(false)

    function handleSelection(name: MarkerName  | null) {
        setBrandSelected(name)
        setPenAmount(1)

        setTimeout( () => {
            document.getElementById('more-pens')?.scrollIntoView({behavior: 'smooth'})
        }, 100)
    }

    function handlePenAmount(amount: PenAmount) {
        if (amount === PenAmount.TWO) {
            setPenAmount(2)
        }

        if (amount === PenAmount.SIX) {
            setPenAmount(6)
        }

        if (amount === PenAmount.TWELVE) {
            setPenAmount(12)
        }

        setTimeout( () => {
            document.getElementById('color-pick')?.scrollIntoView({behavior: 'smooth'})
        }, 100)
    }

    function handleColor(color: Colors) {
        setColor(color)
        setInkDisabled(true)

        if (hasAutoScrolledRef.current) return
        hasAutoScrolledRef.current = true

        requestAnimationFrame(() => {
            document.getElementById('ink-selection')?.scrollIntoView({behavior: 'smooth'})
        })

        window.setTimeout(() => {
            document.getElementById('more-inks')?.scrollIntoView({behavior: 'smooth'})
            hasAutoScrolledRef.current = false
        }, 1200)
    }

    return (
        <div className={'h-screen max-sm:w-[90%] mx-auto'}>
            <BodyHeader
                highlightText={"Buy"}
                normalText={"Refillable white board Marker"}
                customStyle={'mt-[30px] mb-[10px]'}
            />

            <p>From LKR 300 to LKR 500</p>

            <ShoppingPromoCard
                promoText={"Get 3% Cash Back with Promo Code"}
                customStyle={'mt-[30px]'}
            />
            <ShoppingPromoCard
                promoText={"Get 4% Cash Back for Bulk Orders"}
            />

            {/* Brand selection Section */}
            <section id={'brand-selection'}>
                <BodyHeader
                    highlightText={"Model"}
                    normalText={"which is best for you?"}
                    customStyle={'mt-[60px] mb-[30px]'}
                />

                <ImagePlaceholder/>

                <SelectionCard
                    name={MarkerName.SOFTA}
                    title={"Softa refill Marker"}
                    subTitle={"1 Year writing"}
                    price={"300"}
                    customStyle={'mt-[50px]'}
                    setSelection={(value) => handleSelection(value as MarkerName)}
                    selected={brandSelected === MarkerName.SOFTA}
                />
                <SelectionCard
                    name={MarkerName.GIXIN}
                    title={"Gixin refill Marker"}
                    subTitle={"2 Year writing"}
                    price={"420"}
                    customStyle={'mt-[20px]'}
                    setSelection={(value) => handleSelection(value as MarkerName)}
                    selected={brandSelected === MarkerName.GIXIN}
                />

                <HelpCard
                    title={"Need help choosing a model?"}
                    subTitle={"Explore the differences in pen sizes and life of the pen."}
                    customStyle={'mt-[30px] mb-[60px]'}
                />
            </section>

            {/* More Pens Section */}
            <section id={'more-pens'}>
                <BodyHeader
                    highlightText={"More Pens"}
                    normalText={"Pick how much you need."}
                    customStyle={'mt-[30px] mb-[30px]'}
                />
                <SelectionCard
                    title={"02 Refill Markers"}
                    subTitle={"lKR 50 Saving"}
                    price={"550"}
                    amount={2}
                    customStyle={'mt-[50px]'}
                    name={PenAmount.TWO}
                    setSelection={(value) => handlePenAmount(value as PenAmount)}
                    selected={penAmount === 2}
                />
                <SelectionCard
                    title={"06 Refill Markers"}
                    subTitle={"lKR 50 Saving"}
                    price={"550"}
                    amount={6}
                    customStyle={'mt-[20px]'}
                    name={PenAmount.SIX}
                    setSelection={(value) => handlePenAmount(value as PenAmount)}
                    selected={penAmount === 6}
                />
                <SelectionCard
                    title={"12 Refill Markers"}
                    subTitle={"lKR 50 Saving"}
                    price={"550"}
                    amount={12}
                    customStyle={'mt-[20px]'}
                    name={PenAmount.TWELVE}
                    setSelection={(value) => handlePenAmount(value as PenAmount)}
                    selected={penAmount === 12}
                />
            </section>

            {/* color pick selection Section */}
            <section id={'color-pick'}>
                <BodyHeader
                    highlightText={"Finish"}
                    normalText={"Pick your favourite."}
                    customStyle={'mt-[60px] mb-[30px]'}
                />

                <ImagePlaceholder
                    margin={'mb-[30px]'}
                />

                <div className={'flex items-center justify-start gap-[20px]'}>
                    <ColorSelector
                        color={'bg-blue-700'}
                        name={Colors.BLUE}
                        selected={color === Colors.BLUE}
                        colorChange={(value) => handleColor(value as Colors)}
                    />
                    <ColorSelector
                        color={'bg-red-700'}
                        name={Colors.RED}
                        selected={color === Colors.RED}
                        colorChange={(value) => handleColor(value as Colors)}
                    />
                    <ColorSelector
                        color={'bg-black'}
                        name={Colors.BLACK}
                        selected={color === Colors.BLACK}
                        colorChange={(value) => handleColor(value as Colors)}
                    />
                    <ColorSelector
                        color={'bg-green-700'}
                        name={Colors.GREEN}
                        selected={color === Colors.GREEN}
                        colorChange={(value) => handleColor(value as Colors)}
                    />
                </div>
            </section>

            {/* ink selection Section */}
            <section id={'ink-selection'}>
                <BodyHeader
                    highlightText={"Inks"}
                    normalText={"Without ink writing is impossible."}
                    customStyle={'mt-[60px] mb-[30px]'}
                />

                <ImagePlaceholder
                    margin={'mb-[30px]'}
                    text={"Ink images goes here..."}
                />

                <SelectionCard
                    title={"Red Ink"}
                    price={"90"}
                    customStyle={'mt-[50px]'}
                    name={Colors.RED}
                    disable={inkDisabled}
                    selected={color === Colors.RED}
                />

                <SelectionCard
                    title={"Black Ink"}
                    price={"80"}
                    customStyle={'mt-[20px]'}
                    name={Colors.BLACK}
                    disable={inkDisabled}
                    selected={color === Colors.BLACK}
                />

                <SelectionCard
                    title={"Blue Ink"}
                    price={"80"}
                    customStyle={'mt-[20px]'}
                    name={Colors.BLUE}
                    disable={inkDisabled}
                    selected={color === Colors.BLUE}
                />

                <SelectionCard
                    title={"Green Ink"}
                    price={"90"}
                    customStyle={'mt-[20px]'}
                    name={Colors.GREEN}
                    disable={inkDisabled}
                    selected={color === Colors.GREEN}
                />

                <HelpCard
                    title={"Not sure about color?"}
                    subTitle={"Explore the differences in colors and how they use."}
                    customStyle={'mt-[30px] mb-[60px]'}
                />
            </section>

            {/* More ink Section */}
            <section id={'more-inks'}>
                <BodyHeader
                    highlightText={"More Inks"}
                    normalText={"Pick how much you need."}
                    customStyle={'mt-[30px] mb-[30px]'}
                />
                <SelectionCard
                    title={"01 Ink"}
                    price={"80"}
                    customStyle={'mt-[50px]'}
                />
                <SelectionCard
                    title={"02 Inks"}
                    subTitle={"lKR 50 Saving"}
                    price={"550"}
                    amount={2}
                    customStyle={'mt-[20px]'}
                />
                <SelectionCard
                    title={"06 Inks"}
                    subTitle={"lKR 50 Saving"}
                    price={"550"}
                    amount={6}
                    customStyle={'mt-[20px]'}
                />
                <SelectionCard
                    title={"12 Inks"}
                    subTitle={"lKR 50 Saving"}
                    price={"550"}
                    amount={12}
                    customStyle={'mt-[20px]'}
                />
                <SelectionCard
                    title={"24 Inks"}
                    subTitle={"lKR 50 Saving"}
                    price={"550"}
                    amount={24}
                    customStyle={'mt-[20px]'}
                />
            </section>
        </div>
    )
}