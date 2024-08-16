import Container from "@/ui/container/Container";
import { FC, useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import chatApi from "./queries/chat.http";
import { ChatMessage } from "./queries/types";
import * as styled from "./style";

const Chat: FC = () => {
  const { address } = useAccount();
  const messageInputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);

  console.log("messages", messages);

  const getMessages = async (address: string) => {
    let _session = null;
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
    setMessages(messages);
  };

  useEffect(() => {
    if (address) getMessages(address);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSendMessage = async () => {
    const message = messageInputRef?.current?.value;
    if (sessionId && message) {
      const { data } = await chatApi.sendMessage({
        query: { sessionId },
        body: {
          query: message,
          endpointId: "predefined-openai-gpt4o",
          responseMode: "sync",
        },
      });
      console.log("data", data);
    }
  };

  return (
    <Container>
      <styled.ChatWrapper>
        <input
          ref={messageInputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSendMessage();
            }
          }}
        />
      </styled.ChatWrapper>
    </Container>
  );
};
export default Chat;
