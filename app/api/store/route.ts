import {NextResponse} from "next/server";

export interface ProductSchema{
    id: number,
    name: string,
    imageUrl: string,
    colorScheme: {
        from: string,
        to: string,
        textColor: string,
    },
    isPro: boolean,
}

const products :ProductSchema[] = [
    {
        id: 1,
        name: "SOFTA Refill Marker",
        imageUrl: "/pen.png",
        colorScheme: {
            from: "from-gray-900",
            to: "to-gray-700",
            textColor: "text-white"
        },
        isPro: true
    },
    {
        id: 2,
        name: "GIXIN Refill Marker",
        imageUrl: "/pen.png",
        colorScheme: {
            from: "from-blue-200",
            to: "to-gray-100",
            textColor: "text-gray-800"
        },
        isPro: false
    },

]

export async function GET() {
    return NextResponse.json({
        products: products,
        message: "success"
    })
}