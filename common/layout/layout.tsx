import { Header } from "../components/Header";

interface ReactProps {
  children: React.ReactNode;
}

export const LayoutHeader = ({ children }: ReactProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
