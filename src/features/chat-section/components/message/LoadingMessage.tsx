import { useEffect } from "react"
import { StyledLoadingMessageItem } from "./style"
import DotsLoading from "../../../../components/dots-loading/DotsLoading"

const LoadingMessage = ({ color, scrollToCb, isSmallSize }: {scrollToCb: ()=>void, color?: string, isSmallSize?: boolean}) => {
    useEffect(() => {
        scrollToCb()
    }, [])
    return (
        <StyledLoadingMessageItem
            color={color}
            isMine={false}
            isSmallSize={isSmallSize}
        >
            <DotsLoading />
        </StyledLoadingMessageItem>
    )
}

export default LoadingMessage