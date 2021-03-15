import { ModalWrapper, ModalContent } from './styles';

export default function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(e) => {
        const isSafeArea = e.target.closest('[data-modal-safe-area="true"]');

        if (!isSafeArea) onClose();
      }}
    >
      <ModalContent data-modal-safe-area="true">{children}</ModalContent>
    </ModalWrapper>
  );
}
