// Library
import { keyframes } from "@emotion/react";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const showModal = keyframes`
  from {
    transform: translate(-50%, -48%) scale(0.95);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
`;
export const closeModal = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;
