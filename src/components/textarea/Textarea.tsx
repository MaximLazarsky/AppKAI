import { ChangeEvent, FC, KeyboardEvent, MouseEvent } from "react"
import * as styled from "./style"

type TextareaProps = {
    name: string,
    placeholder: string,
    onChange: (event: ChangeEvent<HTMLTextAreaElement>)=>void,
    onBlur?: () => void,
    value: string,
    cols: number,
    rows: number,
    icon: JSX.Element,
    iconPosition: string,
    disabled: boolean,
    iconCallback: (event: MouseEvent<HTMLElement>)=>void,
    onKeyUp: (event: KeyboardEvent<HTMLElement>) => void
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => void
}

const Textarea: FC<TextareaProps> = ({
    name,
    placeholder,
    onChange,
    onBlur,
    value,
    cols,
    rows,
    icon,
    iconPosition = 'right',
    disabled,
    iconCallback,
    ...rest
}) => {
    return (
        <styled.StyledTextAreaContainer>
            <styled.StyledIcons iconPosition={iconPosition}>
                {icon && (
                    <styled.StyledIcon
                        disabled={disabled}
                        {...(iconCallback && { onClick: iconCallback })}
                    >
                        {icon}
                    </styled.StyledIcon>
                )}
            </styled.StyledIcons>
            <styled.StyledTextAreaInput
                name={name}
                cols={cols}
                rows={rows}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                {...rest}
            />
        </styled.StyledTextAreaContainer>
    )
}

export default Textarea