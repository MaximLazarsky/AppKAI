import { TriggerType } from "@/components/animated-content/AnimatedContent";
import Button from "@/ui/button/Button";
import { FC } from "react";

const ChatTrigger: FC<TriggerType & React.HTMLAttributes<HTMLDivElement>> = ({
  isOpen,
  disabled,
  children,
  ...props
}) => {
  console.log("isOpen", isOpen);
  return (
    <Button {...props} disabled={disabled}>
      {children} arrow
      {/* TODO/feat arrow */}
    </Button>
  );
};
export default ChatTrigger;
