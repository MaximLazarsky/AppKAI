import RegularMessage from "../message/RegularMessage";
import * as styled from "./style";
import { useEffect, useRef } from "react";
import LoadingMessage from "../message/LoadingMessage";
import { scrollToCb } from "../../../../utilities/helpers";

const ChatBody = ({messages, loading}:{messages: {text: string, isMine: boolean, id: string, isLast?: boolean}[], loading: boolean}) => {
    const messagesWrapper = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (messages.length || loading) {
            scrollToCb(messagesWrapper)
        }
    }, [messages.length, loading])

    return  (
        <styled.StyledMessagesWrapper ref={messagesWrapper}>
            {!!messages.length && messages.map((item, index) => (
                <RegularMessage 
                    text={item.text} 
                    isMine={item.isMine} 
                    key={item.id} 
                    isLastMessage={index === messages.length - 1} 
                    scrollToCb={()=>scrollToCb(messagesWrapper)}
                />))
            }
            {loading && <LoadingMessage scrollToCb={()=>scrollToCb(messagesWrapper)}/>}
        </styled.StyledMessagesWrapper>
    )
}

export default ChatBody