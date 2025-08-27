interface HelpCardProps {
    title?: string,
    subTitle?: string,
    customStyle?: string,
    onClick?: () => void,
}

export default function HelpCard(
    {title, subTitle, customStyle, onClick} : HelpCardProps,
) {
    return (
        <div
            className={`flex flex-col items-start justify-center bg-gray-100 py-[10px] px-[20px] rounded-xl ${customStyle ? customStyle : ''}`}
            role={'button'}
            tabIndex={0}
            onClick={onClick}
        >
            <p
                className={"font-medium"}
            >{title}</p>
            <p>{subTitle}</p>
        </div>
    )
}