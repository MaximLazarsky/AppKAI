import { useEffect, useState } from 'react'
import { CODE_INDICATOR } from '../utilities/constants'

export const useDetermineCode = (text: string) => {
    const [checkedText, setCheckedText] = useState('')
    const hasCodeInText = text.includes(CODE_INDICATOR)

    useEffect(() => {
        if (hasCodeInText) {
            const numberCodeIndicators = (
                text.match(new RegExp(CODE_INDICATOR, 'g')) || []
            ).length
            setCheckedText(
                !(numberCodeIndicators % 2) ? text : text + CODE_INDICATOR
            )
        } else {
            setCheckedText(text)
        }
    }, [text])

    return checkedText
}