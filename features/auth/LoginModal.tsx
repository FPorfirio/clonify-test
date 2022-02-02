import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { UseDisclosureProps } from "@chakra-ui/react";
import { LoginView } from "./LoginView";

export const LoginModal = ({ isOpen, onOpen, onClose }: UseDisclosureProps) => {
  return (
    <>
      <Modal isOpen={isOpen!} onClose={onClose!}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <LoginView />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
