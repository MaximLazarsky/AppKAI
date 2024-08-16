import { motion } from "framer-motion";
import styled from "styled-components";

export const WrapperAnimatedContent = styled.div`
  position: relative;
`;

export const AnimationTrigger = styled.div`
  cursor: pointer;
`;

export const AnimationContentWrapper = styled(motion.div)`
  overflow: hidden;
`;
