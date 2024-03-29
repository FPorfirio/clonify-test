import * as React from "react";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { makeStore } from "./store";

interface Props {
  children: React.ReactNode;
}

export const Root = ({ children }: Props) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
