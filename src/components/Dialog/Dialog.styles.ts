// Library
import styled from "@emotion/styled";
// Keyframe
import { fadeIn, fadeOut, showModal } from "@/shard/keyframe";
// Primitive
import * as PrimitiveDialog from "@radix-ui/react-dialog";

export const StyledDialogContent = styled(PrimitiveDialog.Content)<{ maxWidth?: number }>`
  animation:
    ${fadeIn} 0.2 cubic-bezier(0.16, 1, 0.3, 1),
    ${showModal} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: white;
  border: 1px solid;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: grid;
  gap: 1rem;
  left: 50%;
  max-width: ${({ maxWidth }) => maxWidth ?? 512}px;
  position: fixed;
  padding: 1.5rem;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: all 0.2s ease;
  width: 100%;
  z-index: 50;

  &[data-state="closed"] {
    animation: ${fadeOut} 0.2s ease;
  }
`;

export const StyledDialogOverlay = styled(PrimitiveDialog.Overlay)`
  animation: ${fadeIn} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: rgba(0, 0, 0, 0.8);
  inset: 0;
  position: fixed;
  transition: all 0.2s ease;
  z-index: 50;
`;

export const StyledDialogHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledDialogTitle = styled(PrimitiveDialog.Title)`
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1;
  margin: 0;
`;
export const StyledDialogDescription = styled(PrimitiveDialog.Description)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
  margin-top: 0.375rem;
`;
export const StyledDialogClose = styled(PrimitiveDialog.Close)`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  display: inline-flex;
  height: 24px;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  right: 1rem;
  top: 1rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 24px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 1;
  }
`;
