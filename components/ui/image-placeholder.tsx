import Image from "next/image";

interface ImagePlaceholderProps {
    text? : string,
    customStyle? : string,
    margin? : string
}

export default function ImagePlaceholder(
    {text, customStyle, margin} : ImagePlaceholderProps,
) {
    return (
        <div className={margin}>
            <div
                className={`rounded-xl bg-gray-200 flex items-center justify-center ${customStyle ? customStyle : 'w-full h-[270px]'}`}
            >
                <Image
                    src={"/pen.png"}
                    alt={"Pen Placeholder"}
                    width={200}
                    height={200}
                />
            </div>
        </div>
    )
}