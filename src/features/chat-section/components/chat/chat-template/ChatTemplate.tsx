import { FC } from "react";
import * as styles from "./style";
import { StyledMessagesWrapper } from "../../chat-body/style";
type ChatTemplateProps = { onSendMessage: (message: string) => void };
const ChatTemplate: FC<ChatTemplateProps> = ({ onSendMessage }) => {
  const suggestedQuestions: string[] = [
    "Can you share your thoughts on the principles upon which the United States was founded?",
    "How did you handle the immense pressure during the Civil War?",
    "Can you share your thoughts behind the Emancipation Proclamation?",
  ];
  return (
    <StyledMessagesWrapper>
      <styles.ChatTemplateHeader></styles.ChatTemplateHeader>
      <styles.ChatWelcomeMessage>
        <styles.WelcomeMessageTitle>Welcome!</styles.WelcomeMessageTitle>
        <styles.WelcomeMessageDescription>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </styles.WelcomeMessageDescription>
      </styles.ChatWelcomeMessage>
      <styles.SuggestedQuestions>
        <styles.SuggestedQuestionsTitle>
          Suggested questions
        </styles.SuggestedQuestionsTitle>
        <styles.SuggestedQuestionsList>
          {suggestedQuestions.map((question, idx) => (
            <styles.SuggestedQuestion
              key={idx}
              onClick={() => {
                onSendMessage(question);
              }}
              children={question}
            />
          ))}
        </styles.SuggestedQuestionsList>
      </styles.SuggestedQuestions>
    </StyledMessagesWrapper>
  );
};
export default ChatTemplate;
