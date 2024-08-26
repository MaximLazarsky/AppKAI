import { FC } from "react";
import { TriggerType } from "../../../../components/animated-content/AnimatedContent";
import Button from "../../../../ui/button/Button";

const ChatTrigger: FC<TriggerType & React.HTMLAttributes<HTMLDivElement>> = ({
  disabled,
  children,
  ...props
}) => {

  return (
    <Button {...props} disabled={disabled}>
      {children}
      {/* TODO/feat arrow */}
    </Button>
  );
};
export default ChatTrigger;
