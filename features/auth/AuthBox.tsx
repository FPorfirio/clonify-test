import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsAuthenticated, selectUser } from "./authSlice";
import { Button, ButtonGroup, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { LoginModal } from "./LoginModal";

const LoginBox = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isAuthenticated) {
      onClose();
    }
  }, [isAuthenticated, onClose]);

  return (
    <div>
      <ButtonGroup>
        <Button onClick={onOpen}>Login</Button>
        <Button>Sign up</Button>
      </ButtonGroup>
      <LoginModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </div>
  );
};

const UserBox = ({ user }: { user: string }) => {
  console.log(user);
  return (
    <div className="bg-blue-50 flex gap-2 h-14 px-2 py-1 rounded w-32">
      <div>
        <Image
          width={"50"}
          height={"50"}
          src={"/profile.svg"}
          alt="profile-picture"
        />
      </div>
      <h2 className="flex-grow mb-1.5 self-end">{user}</h2>
    </div>
  );
};

export const AuthBox = ({ className }: { className: string }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated)!;
  const user = useSelector(selectUser)!;

  return (
    <div className={className}>
      {isAuthenticated ? (
        <UserBox user={user} />
      ) : (
        <LoginBox isAuthenticated={isAuthenticated} />
      )}
    </div>
  );
};
