interface BodyHeaderProps {
    highlightText? :string,
    normalText? : string,
    customStyle? : string,
}

export default function BodyHeader({highlightText, normalText, customStyle} : BodyHeaderProps) {
    return (
        <h1 className={`${customStyle} body-header-text`}>{ `${ highlightText ? highlightText : ''}${highlightText ? '.' : ''} ` }<span className={"text-gray-500"}>
                { normalText ? normalText : ''}
            </span></h1>
    )
}