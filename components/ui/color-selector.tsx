import {Colors} from "@/constants/constants";

interface ColorSelectorProps {
    name: Colors,
    color?: string,
    selected?: boolean,
    colorChange?: (name: Colors) => void,
}

export default function ColorSelector(
    {name, color, selected = false, colorChange} : ColorSelectorProps,
) {
    return (
        <div
            className={`${color} rounded-full size-[30px]  inset-shadow-xl ${selected ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-background' : ''}`}
            role={'button'}
            tabIndex={0}
            onClick={() => colorChange?.(name)}
        />
    )
}