import AnimatedContent from "@/components/animated-content/AnimatedContent";
import { FC } from "react";
import ChatTrigger from "./components/chat-trigger/ChatTrigger";
import Chat from "./components/chat/Chat";

const ChatSection: FC = () => {
  return (
    <AnimatedContent
      trigger={(params) => <ChatTrigger {...params}>Chat with KAI</ChatTrigger>}
      content={<Chat />}
    />
  );
};
export default ChatSection;
