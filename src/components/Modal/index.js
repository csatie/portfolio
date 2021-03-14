import { ModalWrapper, ModalContent } from './styles';

export default function Modal({ isOpen, onClose, content }) {
  return (
    <ModalWrapper isOpen={isOpen} onClick={onClose}>
      <ModalContent>{content}</ModalContent>
    </ModalWrapper>
  );
}
