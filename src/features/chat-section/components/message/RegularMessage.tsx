import { FC, useEffect, useState } from "react"
import * as styled from './style'
import { NEW_LINE } from "@/utilities/constants"
import { useDetermineCode } from "@/hooks/useDetermineCode"
import { getTextBlocksWithCode } from "@/utilities/helpers"
import {CopyIcon, DoneIcon} from "@/assets/icons/icons"

type RegularMessageProps = {
    isMine: boolean,
    color?: string,
    text: string,
    scrollToCb?: ()=> void,
    isSmallSize?: boolean,
    isLastMessage: boolean
}

const RegularMessage: FC<RegularMessageProps> = ({
    isMine,
    color,
    text = '',
    scrollToCb,
    isSmallSize,
    isLastMessage
}) => {
    const checkedText = useDetermineCode(text)
    const [displayText, setDisplayText] = useState('')
    const [currentCharIndex, setCurrentCharIndex] = useState(0)
    const [isTypingStopped, setTypingStopped] = useState(false)
    const [copied, setCopied] = useState('')

    useEffect(() => {
        if (!isMine && isLastMessage) {
            const typingInterval = setInterval(() => {
                if (currentCharIndex < checkedText.length) {
                    setDisplayText(
                        prevDisplayText =>
                            prevDisplayText + checkedText[currentCharIndex]
                    )
                    setCurrentCharIndex(prevIndex => prevIndex + 1)
                    scrollToCb?.()
                } else {
                    clearInterval(typingInterval)
                    setTypingStopped(true)
                }
            }, 20)
            return () => {
                clearInterval(typingInterval)
            }
        } else {
            setDisplayText(checkedText)
        }
    }, [currentCharIndex, checkedText])

    return (
        <styled.StyledMessageItem
            isMine={isMine}
            color={color}
            isSmallSize={isSmallSize}
        >
            <styled.StyledMessageTemplateText isSmallSize={isSmallSize} as={'div'}>
                {getTextBlocksWithCode(displayText)?.map((block, index) => {
                    return (
                        <styled.StyledCode key={index} isCode={block?.isCode}>
                            {block?.isCode && isTypingStopped && (
                                <styled.StyledCopyButton
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            block?.text
                                        )
                                        setCopied(block?.text)
                                    }}
                                >
                                    {copied === block?.text && <DoneIcon />}
                                    <CopyIcon />
                                </styled.StyledCopyButton>
                            )}
                            {block?.text?.split(NEW_LINE).map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </styled.StyledCode>
                    )
                })}
            </styled.StyledMessageTemplateText>
        </styled.StyledMessageItem>
    )
}

export default RegularMessage