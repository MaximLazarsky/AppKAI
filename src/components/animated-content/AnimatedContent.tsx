import React, { useState } from "react";
import * as styles from "./style";

interface AnimatedContentProps {
  trigger: (props: TriggerType) => React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}
export type TriggerType = {
  isOpen: boolean;
  toggle: () => void;
  disabled?: boolean;
};

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  trigger,
  content,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <styles.WrapperAnimatedContent>
      <styles.AnimationTrigger onClick={toggle}>
        {trigger({ isOpen, toggle, disabled })}
      </styles.AnimationTrigger>
      <styles.AnimationContentWrapper
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ height: { duration: 0.5 }, opacity: { duration: 0.3 } }}
      >
        <div>{content}</div>
      </styles.AnimationContentWrapper>
    </styles.WrapperAnimatedContent>
  );
};

export default AnimatedContent;
