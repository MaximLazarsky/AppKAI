import { RefObject } from "react"

export const getTextBlocksWithCode = (displayText: string) => {
    const resultArray: { text: string, isCode: boolean }[] = []
    let isCode = false
    let codeText = ''

    for (let i = 0; i < displayText.length; i++) {
        if (
            displayText[i] === '`' &&
            displayText[i + 1] === '`' &&
            displayText[i + 2] === '`'
        ) {
            if (isCode) {
                resultArray.push({ text: codeText, isCode: true })
                codeText = ''
            } else {
                resultArray.push({ text: codeText, isCode: false })
                codeText = ''
            }
            isCode = !isCode
            i += 2
        } else {
            codeText += displayText[i]
        }
    }

    if (codeText) {
        resultArray.push({ text: codeText, isCode: isCode })
    }

    return resultArray
}

export const scrollToCb = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight
    }
}