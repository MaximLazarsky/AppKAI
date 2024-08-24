import { FC, KeyboardEvent, MouseEvent, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import chatApi from "./queries/chat.http";
import * as styled from "./style";
import { useTheme } from "styled-components";
import ChatBody from "../chat-body/ChatBody";
import Container from "../../../../ui/container/Container";
import Textarea from "../../../../components/textarea/Textarea";
import { SendIcon } from "../../../../assets/icons/icons";
import ChatTemplate from "../chat-template/ChatTemplate";

const Chat: FC = () => {
  const theme = useTheme();
  const { address } = useAccount();
  // const address = "test234"
  const [messages, setMessages] = useState<
    { text: string; isMine: boolean; id: string; isLast?: boolean }[]
  >([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messageToSend, setMessageToSend] = useState("");
  const [loading, setLoading] = useState(false);
  const [numberRows, setNumberRows] = useState(1);

  const getMessages = async (address: string) => {
    let _session = null;
    try {
      setLoading(true);
      const { data: sessions } = await chatApi.getAllChatSession({
        externalUserId: address,
        limit: 1,
      });

      if (!sessions.length) {
        const { data: session } = await chatApi.createChatSession({
          body: { externalUserId: address },
        });
        _session = session;
      } else _session = sessions[0];

      setSessionId(_session.id);
      const { data: messages } = await chatApi.getChatMessages({
        query: { sessionId: _session.id },
      });
      const messagesToMap = messages
        .flatMap((item) => [
          { text: item.answer, isMine: false, id: `${item.id}mine` },
          { text: item.query, isMine: true, id: `${item.id}fromAi` },
        ])
        .reverse();
      setMessages(messagesToMap);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (address) getMessages(address);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const onSendMessageHandler = async (
    event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    await onSendMessage(messageToSend);
  };

  const onSendMessage = async (message: string) => {
    try {
      setLoading(true);
      if (sessionId && message) {
        setMessageToSend("");
        const { data } = await chatApi.sendMessage({
          query: { sessionId },
          body: {
            query: message,
            endpointId: "predefined-openai-gpt4o",
            responseMode: "sync",
          },
        });
        setMessages([
          ...messages,
          {
            text: message,
            isMine: true,
            id: `${message}${Date.now()}`,
          },
          { text: data.answer, isMine: false, id: data.messageId },
        ]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setNumberRows(1);
      setLoading(false);
    }
  };

  return (
    <Container>
      <styled.StyledWrapper>
        {messages.length ? (
          <ChatBody messages={messages} loading={loading} />
        ) : (
          <ChatTemplate
            onSendMessage={(message) => {
              setMessageToSend(message);
              onSendMessage(message);
            }}
          />
        )}
        <styled.StyledInputWrapper>
          <Textarea
            name="chatInput"
            placeholder="Chat with KAI..."
            onChange={(event) => setMessageToSend(event.target.value)}
            value={messageToSend}
            cols={2}
            rows={numberRows}
            iconPosition={"right"}
            icon={
              <SendIcon
                fill={
                  loading
                    ? theme.palette.light.gray.mainChatGray
                    : theme.palette.light.white
                }
              />
            }
            disabled={false}
            iconCallback={onSendMessageHandler}
            onKeyUp={(event: KeyboardEvent<HTMLElement>) => {
              event.preventDefault();
              event.stopPropagation();
              if (event.code === "Enter" && event.shiftKey) {
                setNumberRows((prevNumber) => prevNumber + 1);
              } else if (
                event.code === "Enter" &&
                !event.shiftKey &&
                !loading
              ) {
                onSendMessageHandler(event);
              }
            }}
            onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
              if (event.code === "Enter" && !event.shiftKey) {
                event.preventDefault();
                event.stopPropagation();
              }
            }}
          />
        </styled.StyledInputWrapper>
      </styled.StyledWrapper>
    </Container>
  );
};
export default Chat;
