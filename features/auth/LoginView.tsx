import { Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { useField } from "../../common/hooks/hooks";
import { login } from "./authSlice";
import { useLoginMutation } from "./authApi";
import React, { useEffect } from "react";

export const LoginView = () => {
  const dispatch = useDispatch();
  const username = useField("text");
  const password = useField("password");
  const [
    loginTrigger, // This is the mutation trigger
    { isLoading, data }, // This is the destructured mutation result
  ] = useLoginMutation();

  useEffect(() => {
    console.log(data);
    if (data) {
      dispatch(login(data));
    }
  }, [data, dispatch]);

  const handleLogin = (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) => {
    e.preventDefault();
    loginTrigger({
      username: username.value,
      password: password.value,
    });
  };

  return (
    <div className="flex flex-col h-118 gap-3">
      <div className="flex flex-grow items-center justify-center">
        <Image alt="login-img" src="/padlock.svg" height="100" width="100" />
      </div>
      <form onSubmit={handleLogin} action="">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input {...username} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input {...password} />
        </FormControl>
        <Button
          w="full"
          mt="2"
          isLoading={isLoading}
          colorScheme="green"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
